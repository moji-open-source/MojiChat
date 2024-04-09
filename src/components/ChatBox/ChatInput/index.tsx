import { Button } from '@nextui-org/react'
import {
  ClipboardEvent,
  FormEvent,
  ForwardedRef,
  KeyboardEvent,
  createRef,
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import classs from './ChatInput.module.css'

export interface ChatInputProps {
  onSubmit?: (message: string | null) => Promise<boolean>
}

export interface ChatInputEvents {
  submit: () => void
}

function ChatInput(props: ChatInputProps, refs: ForwardedRef<ChatInputEvents>) {
  const formRef = createRef<HTMLFormElement>()
  const [chatMessage, setChatMessage] = useState<string | null>(null)
  // 记录当前 input 是否处于组合输入状态,例如中文输入法
  const isComposing = useRef(false)
  const editorRef = createRef<HTMLDivElement>()

  function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    return props.onSubmit?.(chatMessage).then((shouldClear) => {
      if (!shouldClear) return
      clearEditorContent()
    }).catch(() => { })
  }

  /**
   * 录音处理,使用 Rust cpal 音频库处理
   */
  function onCapturedAudioHandler() {
    console.log('哔哔~')
  }

  /**
   * 消息编辑框内容改变处理
   */
  function onEditorChangeHandler(event: FormEvent<HTMLDivElement>) {
    const { currentTarget } = event
    setChatMessage(currentTarget.innerText)
  }

  /**
   * 清空消息框
   */
  function clearEditorContent() {
    setChatMessage(null)
    //TODO editorRef 不知道为什么是 null
    if (editorRef.current == void 0) return
    editorRef.current.innerHTML = ''
  }

  function submit() {
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    formRef.current?.dispatchEvent(submitEvent)
  }

  function onKeyDownHandler(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter' && !isComposing.current) {
      submit()
      event.preventDefault()
    }
  }

  /**
   * 处理内容粘贴
   */
  function onPasteCaptureHandler(event: ClipboardEvent<HTMLDivElement>) {
    event.preventDefault()
    const { clipboardData } = event
    // 处理纯文本
    if (clipboardData.types.includes('text/plain')) {
      console.log('纯文本粘贴')
      const data = clipboardData.getData('text/plain')
      const textNode = document.createTextNode(data)
      const selection = window.getSelection()
      // 将文本写入当前选中的文本区域
      if (selection == void 0 || !selection.rangeCount) return false
      selection.deleteFromDocument()
      selection.getRangeAt(0).insertNode(textNode)
      selection.collapseToEnd()
      return
    }
    // 粘贴文件
    if (clipboardData.types.includes('Files')) {
      console.log('粘贴文件')
      return
    }
  }

  useImperativeHandle(refs, () => {
    return {
      submit: () => submit()
    }
  }, [])

  return (
    <form
      ref={formRef}
      onSubmit={onSubmitHandler}
      className="gap-2 flex items-center justify-between w-full"
    >
      <div className="flex items-center pl-1 pr-2 py-2 mx-1 flex-grow text-sm focus:border-solid relative overflow-hidden">
        <div
          ref={editorRef}
          className={classs.editor}
          onCompositionStart={() => {
            isComposing.current = true
          }}
          onCompositionEnd={() => {
            isComposing.current = false
          }}
          onKeyDown={onKeyDownHandler}
          onPasteCapture={onPasteCaptureHandler}
          onInput={onEditorChangeHandler}
          contentEditable
          data-placeholder="Say something~"
        />

        <div className="cursor-pointer text-gray-400" onClick={onCapturedAudioHandler}>
          <i className="fi fi-rr-waveform-path align-middle leading-[0.5] cursor-pointer"></i>
        </div>
      </div>

      <Button
        isIconOnly
        variant="bordered"
        size="sm"
        radius="full"
        className="text-2xl border-none text-default-500"
        disableRipple
      >
        <i className="fi fi-rr-grin-beam  align-middle leading-[0.5]"></i>
      </Button>

      <Button
        startContent={<i className="fi fi-rr-paper-plane align-middle leading-[0.5]"></i>}
        type="submit"
        className="text-tiny text-white bg-black/20 bg-primary"
        variant="flat"
        color="default"
        radius="lg"
        size="sm"
      >
        Send
      </Button>
    </form >
  )
}

export default memo(forwardRef(ChatInput))

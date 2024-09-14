'use client'

import { Button } from '@nextui-org/react'
import {
  ClipboardEvent,
  FormEvent, KeyboardEvent,
  createRef, useRef,
  useState
} from 'react'

import classs from './message-input.module.css'

export interface ChatInputProps {
  onSubmit?: (message: string | null) => Promise<boolean>
}

export interface ChatInputEvents {
  submit: () => void
}

export function MessageInput(props: ChatInputProps) {
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
    if (editorRef.current)
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

  return (
    <form
      ref={formRef}
      onSubmit={onSubmitHandler}
      className="flex items-end justify-between w-full p-1"
    >
      <div className="flex pl-1 pr-2 py-2 flex-grow text-sm focus:border-solid relative overflow-hidden">
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
        ></div>
      </div>

      <Button
        isIconOnly
        variant="bordered"
        size="sm"
        radius="full"
        className="text-2xl border-none text-default-500"
        onClick={onCapturedAudioHandler}
        disableRipple
      >
        <span className="icon-[f7--waveform]"></span>
      </Button>

      <Button
        isIconOnly
        variant="bordered"
        size="sm"
        radius="full"
        className="text-2xl border-none text-default-500 mr-1"
        disableRipple
      >
        <span className="icon-[fluent--emoji-meme-24-regular]"></span>
      </Button>

      <Button
        startContent={<span className="icon-[lets-icons--send-fill] align-middle leading-[0.5] size-6"></span>}
        type="submit"
        className="text-tiny text-white bg-black/20 bg-primary flex-shrink-0 h-9"
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

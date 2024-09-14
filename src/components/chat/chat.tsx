'use client'

import dayjs from 'dayjs'
import React, { createRef, useEffect, useState } from 'react'

import { useScroll } from '@/hooks'

import { MessageInput } from '@/components/chat'
import { useChatMsg } from '@/store/use-chat-message'
import { ChatList } from '../chat-list'

export function ChatWidget() {
  const [dataSources, setDataSources] = useChatMsg()
  const { scrollToBottom } = useScroll()
  const [chat] = useState({
    title: 'Moji Internal group',
    id: 6,
    chatType: 'Group'
  })

  function onSubmitHandler(message: string | null) {
    if (!message) return Promise.resolve(false)

    setDataSources((dataList) => {
      return [
        ...dataList,
        {
          avatar: '/avatar.jpg',
          name: 'Clover',
          time: dayjs().format('YYYY-MM-DD hh:mm'),
          content: message ?? '',
          isMe: true
        }
      ]
    })
    return Promise.resolve(true)
  }

  const chatDivRef = createRef<HTMLDivElement>()

  useEffect(() => {
    const chatDiv = chatDivRef.current
    if (!chatDiv) return

    scrollToBottom(chatDiv)
  }, [dataSources, chatDivRef.current])

  return (
    <div className="flex flex-col h-screen overflow-hidden relative diable-select-text">
      <div
        className="h-16 border-b-solid border-b-1 border-b-border flex items-center p-4 diable-select-text"
        data-tauri-drag-region
      >
        {chat.title}
      </div>

      <div className="w-full flex-grow diable-select-text overflow-x-hidden overflow-y-auto px-4" ref={chatDivRef}>
        <ChatList list={dataSources} />
        <div className="h-12"></div>
      </div>

      <div className="sticky table bottom-2 w-[calc(100%-16px)] mx-2 border-1 border-input rounded-large overflow-hidden bg-background/10 backdrop-blur">
        <MessageInput onSubmit={onSubmitHandler} />
      </div>
    </div>
  )
}

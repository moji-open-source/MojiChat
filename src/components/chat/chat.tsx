'use client'

import { Avatar, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import { useState } from 'react'

import { MessageInput } from '@/components/chat'

const dataList = [
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover',
    name: 'Alice',
    time: '2023-12-28 03:45:02',
    content: "I'm planning a trip next month, any suggestions?",
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover',
    name: 'Alice',
    time: '2023-12-28 03:45:02',
    content: "Who's up for a game night this Friday?",
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover',
    name: 'Charlit',
    time: '2023-12-28 03:45:02',
    content: "Hey everyone, how's it going?",
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover',
    name: 'Alice',
    time: '2023-12-28 03:45:02',
    content: 'Does anyone want to meet up for coffee?',
    isMe: false
  },

  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover',
    name: 'Eve',
    time: '2023-12-28 03:45:02',
    content: 'I just got a new job offer!',
    isMe: false
  },
  {
    avatar: '/avatar.jpg',
    name: 'Clover',
    time: '2023-12-28 03:45:02',
    content: "I need some advice on a project I'm working on.",
    isMe: true
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover',
    name: 'Eve',
    time: '2023-12-28 03:45:02',
    content: 'Has anyone been to the new restaurant downtown?',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover',
    name: 'Charlit',
    time: '2023-12-28 03:45:02',
    content: 'Just finished a great book, highly recommend it!',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover',
    name: 'Bob',
    time: '2023-12-28 03:45:02',
    content: "Who's up for a game night this Friday?",
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover',
    name: 'Alice',
    time: '2023-12-28 03:45:02',
    content: "I can't believe it's already the weekend!",
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover',
    name: 'Charlit',
    time: '2023-12-28 03:45:02',
    content: "I can't believe it's already the weekend!",
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover',
    name: 'Eve',
    time: '2023-12-28 03:45:02',
    content: 'Did anyone see the latest movie release?',
    isMe: false
  },
  {
    avatar: '/avatar.jpg',
    name: 'Clover',
    time: '2023-12-28 03:45:02',
    content: 'Does anyone want to meet up for coffee?',
    isMe: true
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover',
    name: 'Bob',
    time: '2023-12-28 03:45:02',
    content: "I'm planning a trip next month, any suggestions?",
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover',
    name: 'Charlit',
    time: '2023-12-28 03:45:02',
    content: 'I just got a new job offer!',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover',
    name: 'Bob',
    time: '2023-12-28 03:45:02',
    content: "Hey everyone, how's it going?",
    isMe: false
  },
  {
    avatar: '/avatar.jpg',
    name: 'Clover',
    time: '2023-12-28 03:45:02',
    content: "I can't believe it's already the weekend!",
    isMe: true
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover',
    name: 'Eve',
    time: '2023-12-28 03:45:02',
    content: "Who's up for a game night this Friday?",
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover',
    name: 'Alice',
    time: '2023-12-28 03:45:02',
    content: "I need some advice on a project I'm working on.",
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover',
    name: 'Charlit',
    time: '2023-12-28 03:45:02',
    content: 'Has anyone been to the new restaurant downtown?',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover',
    name: 'Bob',
    time: '2023-12-28 03:45:02',
    content: 'Just finished a great book, highly recommend it!',
    isMe: false
  },
  {
    avatar: '/avatar.jpg',
    name: 'Clover',
    time: '2023-12-28 03:45:02',
    content: 'Did anyone see the latest movie release?',
    isMe: true
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover',
    name: 'Charlit',
    time: '2023-12-28 03:45:02',
    content: 'Does anyone want to meet up for coffee?',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover',
    name: 'Bob',
    time: '2023-12-28 03:45:02',
    content: 'I just got a new job offer!',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover',
    name: 'Alice',
    time: '2023-12-28 03:45:02',
    content: "Hey everyone, how's it going?",
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover',
    name: 'Eve',
    time: '2023-12-28 03:45:02',
    content: "I'm planning a trip next month, any suggestions?",
    isMe: false
  },
  {
    avatar: '/avatar.jpg',
    name: 'Clover',
    time: '2023-12-28 03:45:02',
    content: 'Has anyone been to the new restaurant downtown?',
    isMe: true
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover',
    name: 'Charlit',
    time: '2023-12-28 03:45:02',
    content: "I can't believe it's already the weekend!",
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover',
    name: 'Bob',
    time: '2023-12-28 03:45:02',
    content: "Who's up for a game night this Friday?",
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover',
    name: 'Alice',
    time: '2023-12-28 03:45:02',
    content: 'Just finished a great book, highly recommend it!',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover',
    name: 'Eve',
    time: '2023-12-28 03:45:02',
    content: "I need some advice on a project I'm working on.",
    isMe: false
  }
]

export function ChatWidget() {
  const [dataSources, setDataSources] = useState(dataList)
  function onSubmitHandler(message: string | null) {
    setDataSources((dataList) => {
      return [
        ...dataList,
        {
          avatar: '/avatar.jpg',
          name: 'Clover',
          time: '2023-12-28 03:45:02',
          content: message ?? '',
          isMe: true
        }
      ]
    })
    return Promise.resolve(true)
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <Card isFooterBlurred shadow="none" className="border-none flex-grow rounded-none" >
          <CardHeader className="h-16 border-b-solid border-b-1 border-b-[var(--border-color)] diable-select-text"
            data-tauri-drag-region>
            Moji Internal group
          </CardHeader>

          <CardBody>
            <div className="w-full diable-select-text">
              {dataSources.map((it, index) => {
                return (
                  <div className={`chat-item ${it.isMe ? 'is-me' : ''} diable-select-text`} key={index}>
                    <div className="avatar diable-select-text">
                      <Avatar src={it.avatar} className="w-full h-full" />
                    </div>

                    <div className="chat-item-box">
                      <div className="chat-item-user-info diable-select-text">
                        <span>{it.name}</span>
                        <span className="text-gray-500">{it.time}</span>
                      </div>

                      <div className="relative w-fit">
                        <div className="chat-item-read-count bg-gray-200  dark:bg-[#3b3b3d]" draggable>
                          {it.content}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardBody>

          <CardFooter className="flex-shrink-0 sticky border-white/20 border-1 overflow-hidden py-1  rounded-large bottom-2 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <MessageInput onSubmit={onSubmitHandler} />
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

import { Avatar } from '@nextui-org/react'

interface ChatListProps {
  list?: {
    avatar: string
    name: string
    time: string
    content: string
    isMe?: boolean
  }[]
}

export function ChatList({ list = [] }: ChatListProps) {
  return list.map((it, index) => {
    return (
      <div className={`chat-item ${it.isMe ? 'is-me' : ''} diable-select-text`} key={index}>
        <div className="avatar diable-select-text">
          <Avatar src={it.avatar} className="w-full h-full" />
        </div>

        <div className="chat-item-box diable-select-text">
          <div className="chat-item-user-info diable-select-text">
            <span>{it.name}</span>
            <span className="text-gray-500 diable-select-text">{it.time}</span>
          </div>

          <div className="w-fit">
            <div className="chat-item-read-count bg-gray-200  dark:bg-[#3b3b3d] text-foreground-50" draggable>
              {it.content}
            </div>
          </div>
        </div>
      </div>
    )
  })
}

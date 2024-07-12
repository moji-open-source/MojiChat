import { ChatRoom } from "@/components/ChatRoom"
import { WindowDisplayController } from '@/components/helper/WindowDisplayController'
import { ChatList } from "@/components/list/chat"

function Chat() {
  return (
    <div className="chat flex h-screen">
      <WindowDisplayController />

      <div className="flex-shrink-0 border-r-[var(--border-color)] border-r-solid border-r-1 diable-select-text">
        <ChatList />
      </div>

      <div className="flex-grow overflow-hidden">
        <ChatRoom />
      </div>
    </div>
  )
}

export default Chat

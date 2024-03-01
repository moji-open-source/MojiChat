import { ChatRoom } from "@/components/ChatRoom"
import { ChatList } from "@/components/list/chat"

function Chat() {
  return (
    <div className="chat flex">
      <div className="flex-shrink-0">
        <ChatList />
      </div>

      <div className="flex-grow overflow-hidden">
        <ChatRoom />
      </div>
    </div>
  )
}

export default Chat
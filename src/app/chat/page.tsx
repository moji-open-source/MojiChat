import { ChatRoom } from "@/components/ChatRoom"
import { MessageList } from "@/components/MessageList"

function Chat() {
  return (
    <div className="chat flex">
      <div className="flex-shrink-0">
        <MessageList />
      </div>

      <div className="flex-grow overflow-hidden">
        <ChatRoom />
      </div>
    </div>
  )
}

export default Chat
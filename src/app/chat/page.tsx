import { ChatRoom } from "@/components/ChatRoom"
import { MessageList } from "@/components/MessageList"

function Chat() {
  return (
    <div className="chat flex">
      <MessageList />

      <div className="flex-grow">
        <ChatRoom />
      </div>
    </div>
  )
}

export default Chat
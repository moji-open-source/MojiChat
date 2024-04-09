import { ChatRoom } from "@/components/ChatRoom"
import { ChatList } from "@/components/list/chat"
import { Sidebar } from "@/components/sidebar"

function Chat() {
  return (
    <div className="chat flex">
      <Sidebar />
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
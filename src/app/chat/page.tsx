import { ChatRoom } from "@/components/ChatRoom"
import { ChatList } from "@/components/list/chat"
import { Sidebar } from "@/components/sidebar"

function Chat() {
  return (
    <div className="chat flex h-screen">
      <div className="flex-shrink-0 border-r-[var(--border-color)] border-r-solid border-r-1 h-full"
        data-tauri-drag-region>
        <Sidebar />
      </div>
      <div className="flex-shrink-0 border-r-[var(--border-color)] border-r-solid border-r-1">
        <ChatList />
      </div>
      <div className="flex-grow overflow-hidden">
        <ChatRoom />
      </div>
    </div>
  )
}

export default Chat
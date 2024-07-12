import { ChatWidget, RecentContactWidget, } from '@/components/chat'
import { WindowDisplayController } from '@/components/helper/WindowDisplayController'

function Chat() {
  return (
    <div className="chat flex h-screen">
      <WindowDisplayController />

      <div className="flex-shrink-0 border-r-[var(--border-color)] border-r-solid border-r-1 diable-select-text">
        <RecentContactWidget />
      </div>

      <div className="flex-grow overflow-hidden">
        <ChatWidget />
      </div>
    </div>
  )
}

export default Chat

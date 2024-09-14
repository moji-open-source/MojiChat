import { ChatWidget, RecentContactWidget, } from '@/components/chat'
import { WindowDisplayController } from '@/components/helper/WindowDisplayController'
import { ResizablePanelGroup, ResizableHandle, ResizablePanel } from '@/components/ui/resizable'

function Chat() {
  return (
    <div className="chat flex h-screen">
      <WindowDisplayController />

      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={20} defaultSize={30} maxSize={60}>
          <div className="flex-shrink-0 border-r-border border-r-solid border-r diable-select-text h-full">
            <RecentContactWidget />
          </div>
        </ResizablePanel>

        <ResizableHandle />

        <ResizablePanel defaultSize={70}>
          <div className="flex-grow overflow-hidden h-full">
            <ChatWidget />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default Chat

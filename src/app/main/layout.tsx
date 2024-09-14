import { Sidebar } from '@/components/sidebar'
// import { Providers } from '@/lib/providers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MoJi Chat',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="chat flex h-screen">
      <div className="flex-shrink-0 border-r-border border-r-solid border-r-1 h-full"
        data-tauri-drag-region>
        <Sidebar />
      </div>
      <div className="flex-grow overflow-hidden">
        {children}
      </div>
    </div>
  )
}

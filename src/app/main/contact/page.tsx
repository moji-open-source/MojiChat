import { ContactListWidget } from '@/components'

export default function Page() {
  return <>
    <div className="w-full h-screen diable-select-text">
      <div className="w-[320px] h-full border-r-border border-r-solid border-r-1 overflow-y-auto">
        <ContactListWidget />
      </div>
    </div>
  </>
}

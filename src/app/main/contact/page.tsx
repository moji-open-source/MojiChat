import { ContcatCallingCard } from '@/components/ContcatCallingCard'
import ContactList from './ContactList'
export default function Contact() {
  return (
    <main className="h-screen w-max flex">
      <ContactList />
      <ContcatCallingCard />
    </main>
  )
}

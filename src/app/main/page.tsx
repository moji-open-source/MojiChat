"use client"
import { useRouter } from 'next/navigation'

export default function MainPage() {
  const router = useRouter()
  router.replace("/main/chat")
  return <div></div>
}
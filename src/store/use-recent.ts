import { atom, useAtomValue } from 'jotai'

type MessageType = 'user' | 'self'

export interface Chat {
  id: string
  type: MessageType
  title: string,
  avatar: string,
  lastTime: number,
  lastMsg: string
}

export const recentAtom = atom<Chat[]>([
  {
    avatar: 'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover',
    id: '0299d0cdb99cfd49a558505c7cae2f28bd4d',
    lastMsg: 'I can\'t believe it\'s already the weekend!',
    lastTime: 1709027001075,
    title: 'Charlit',
    type: 'self'
  },
  {
    avatar: '/avatar.jpg',
    id: '5d0d5a7a70345d40519925b6a3f75c423250',
    lastMsg: '??已读不回？?',
    lastTime: 1709027001075,
    title: 'Clover You',
    type: 'self'
  }
])

export function useRecentValue() {
  return useAtomValue(recentAtom)
}

import { useSelector } from 'react-redux'
import { Store } from '.'
import { UserStore } from './user'
import { ChatStore } from '@/store/chat'

export function useUserStore() {
  return useSelector<Store, UserStore>((state) => state.user)
}

export function useChatStore() {
  return useSelector<Store, ChatStore>((state) => state.chat)
}

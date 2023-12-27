import { useSelector } from 'react-redux'
import { Store } from '.'
import { UserStore } from './user'

export function useUserStore() {
  return useSelector<Store, UserStore>((state) => state.user)
}

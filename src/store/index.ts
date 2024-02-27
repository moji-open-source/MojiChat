import { configureStore } from '@reduxjs/toolkit'
import user from './user'
import chat from './chat'

const store = configureStore({
  reducer: { user, chat },
})

export type AppDispatch = typeof store.dispatch

export type Store = ReturnType<typeof store.getState>
export default store

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface Chat {
  id: number
  type: MessageType
  title: string,
  avatar: string,
  lastTime: number,
  lastMsg: string
}

export interface ChatStore {
  /**
   * unsent messages
   */
  outbox: Record<string, string>
  chats: Chat[]
}

const initialState: ChatStore = {
  outbox: {},
  chats: [
    { avatar: 'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover', id: 10086, lastMsg: 'I can\'t believe it\'s already the weekend!', lastTime: 1709027001075, title: 'Charlit', type: 'self' },
    { avatar: '/avatar.jpg', id: 10000, lastMsg: '??已读不回？?', lastTime: 1709027001075, title: 'Clover You', type: 'self' }
  ]
}

type MessageType = 'user' | 'self'

type AppendMessagePayload = {
  type: MessageType
  id: string
  message: string
}

type PopMessagePayload = Omit<AppendMessagePayload, 'message'>

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    appendMessage: (state, action: PayloadAction<AppendMessagePayload>) => {
      const { id, message, type } = action.payload
      const mid = createMessageId(id, type)
      state.outbox[mid] = message
    },
    popMessage: (state, action: PayloadAction<PopMessagePayload>) => {
      const { id, type } = action.payload
      const mid = createMessageId(id, type)
      delete state.outbox[mid]
    }
  },
})

export function createMessageId(id: string, type: MessageType) {
  return `${type}-${id}`
}

export const { appendMessage, popMessage } = chatSlice.actions
export default chatSlice.reducer

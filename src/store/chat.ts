import { useChatStore } from "@/store/hooks";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Chat = {
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
    { avatar: '/avatar.jpg', id: 10086, lastMsg: 'Hi!', lastTime: 1709027001075, title: '公众号', type: 'self' }
  ]
}

type MessageType = "user" | "self"

type AppendMessagePayload = {
  type: MessageType
  id: string
  message: string
}

type PopMessagePayload = Omit<AppendMessagePayload, "message">

export const chatSlice = createSlice({
  name: "chat",
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
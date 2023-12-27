import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

import { EmailLoginRequest, emailLoginIpc, getUserInfoIpc } from '@/ipc/user'

export enum UserSex {
  Man = 'Man',
  Girl = 'Girl',
}

export interface UserInfo {
  userId: number
  avatar: string
  sex: UserSex
  username: string
  email: string
  createAt: string
  userCode: string
  birthday?: string
  bio?: string
  location?: string
}

export type UserStore = {
  isLogin: boolean
  userInfo?: UserInfo
  loginTime?: string
  authentication?: string
}

const store: UserStore = {
  isLogin: false,
  userInfo: undefined,
}

const STORE_NAME = 'user'

export const emailLogin = createAsyncThunk(
  `${STORE_NAME}/emailLogin`,
  async (payload: EmailLoginRequest) => {
    const jwt = await emailLoginIpc(payload)
    return jwt
  }
)

export const getUserInfo = createAsyncThunk(
  `${STORE_NAME}/getUserInfo`,
  async () => {
    const data = await getUserInfoIpc()
    return data
  }
)

export const userSlice = createSlice({
  name: STORE_NAME,
  initialState: store,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(emailLogin.fulfilled, (state, action) => {
      state.authentication = action.payload
    })

    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.loginTime = dayjs().format('YYYY-DD-MM HH:MM SS')
      state.userInfo = action.payload
      state.isLogin = true
    })
  },
})

export const {} = userSlice.actions
export default userSlice.reducer

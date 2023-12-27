import { UserInfo } from '@/store/user'
import { invoke } from '@tauri-apps/api/tauri'

export type EmailLoginRequest = {
  email: string
  psd: string
}

export async function emailLoginIpc(payload: EmailLoginRequest) {
  return invoke<string>('email_user_login', { payload })
}

export async function getUserInfoIpc() {
  return invoke<UserInfo>('get_user_info')
}

import { invoke } from '@tauri-apps/api/tauri'
export async function closeCurrentWindowIpc(label: string) {
  await invoke('close_window', { label })
}

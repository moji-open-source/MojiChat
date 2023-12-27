'use client'

import tauriEvent from '@tauri-apps/api/event'
import { useEffect } from "react"

export const ViewVisible = () => {
  useEffect(() => {
    // tauriEvent.emit('show-window')
    // setTimeout(() => tauriEvent.emit('show-window'), 1000)
  }, [])
  return <></>
}
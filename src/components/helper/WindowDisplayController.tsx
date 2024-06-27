'use client'

import { useEffect } from "react"

export function WindowDisplayController() {
  useEffect(() => {
    import('@tauri-apps/api/window').then(({ appWindow }) => {
      appWindow.show()
    })
  }, [])

  return undefined
}

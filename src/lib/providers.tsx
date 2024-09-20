'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'

function setup() {
  if (window) {
    window.addEventListener('contextmenu', (e) => {
      if (process.env.NODE_ENV === 'production')
        e.preventDefault()
    })
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  function onKeydownListener(event: KeyboardEvent) {
    if (event.metaKey) {
      if (event.key === '=' || event.key === '-')
        event.preventDefault()
    }
  }

  useEffect(() => {
    setup()
    window.addEventListener('keydown', onKeydownListener)
    return () => {
      window.removeEventListener('keydown', onKeydownListener)
    }
  }, [])

  return (
    <ThemeProvider enableSystem enableColorScheme attribute="class">
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ThemeProvider>
  )
}

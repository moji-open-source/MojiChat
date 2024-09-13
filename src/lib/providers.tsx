'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import store from '../store'
import { useEffect } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  function onKeydownListener(event: KeyboardEvent) {
    if (event.metaKey) {
      if (event.key === '=' || event.key === '-') {
        event.preventDefault()
        // document.body.style.zoom = zoom.current += event.key === '=' ? 0.1 : -0.1
      }

    }

  }

  useEffect(() => {
    window.addEventListener('keydown', onKeydownListener)
    return () => {
      window.removeEventListener('keydown', onKeydownListener)
    }
  }, [])

  return (
    <ThemeProvider enableSystem enableColorScheme attribute="class">
      <NextUIProvider>
        <Provider store={store}>
          {children}
        </Provider>
      </NextUIProvider>
    </ThemeProvider>
  )
}

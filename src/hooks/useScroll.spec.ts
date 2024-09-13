import { describe, expect, test, vi } from 'vitest'

import { useScroll } from './useScroll'

describe('useScroll', () => {
  test('should scroll to bottom', () => {
    const dom = { scrollTo: vi.fn(), scrollHeight: 2000 }

    const { scrollToBottom } = useScroll()

    scrollToBottom(dom as any as Element)

    expect(dom.scrollTo).toBeCalledWith({ top: dom.scrollHeight, behavior: 'smooth' })
  })
})

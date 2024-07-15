export const useScroll = () => {
  const scrollToBottom = (dom?: Element, behavior: ScrollBehavior = 'smooth') => {
    if (!dom) return
    const scrollHeight = dom.scrollHeight

    dom.scrollTo({ top: scrollHeight, behavior })
  }

  return { scrollToBottom }
}

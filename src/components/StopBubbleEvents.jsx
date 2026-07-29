import { useEffect } from 'react'

const INTERACTIVE = 'a, button'
const EVENTS = ['click', 'touchstart', 'touchend']

function stopBubble(event) {
  event.stopPropagation()
}

/**
 * Stops click/touch bubbling from links and buttons so parent handlers
 * (cards, overlays, mobile menus) do not receive those events.
 * Does not call preventDefault — navigation and button actions still work.
 */
export default function StopBubbleEvents() {
  useEffect(() => {
    const bound = new WeakSet()

    function bindElement(el) {
      if (bound.has(el)) return
      bound.add(el)
      for (const type of EVENTS) {
        el.addEventListener(type, stopBubble, { passive: true })
      }
    }

    function bindAll(root = document) {
      root.querySelectorAll?.(INTERACTIVE).forEach(bindElement)
    }

    bindAll()

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue
          if (node.matches?.(INTERACTIVE)) bindElement(node)
          bindAll(node)
        }
      }
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      document.querySelectorAll(INTERACTIVE).forEach((el) => {
        for (const type of EVENTS) {
          el.removeEventListener(type, stopBubble)
        }
      })
    }
  }, [])

  return null
}

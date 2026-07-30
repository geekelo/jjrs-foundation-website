import { useEffect } from 'react'

const INTERACTIVE = 'a, button'
const MOVE_THRESHOLD = 10

/**
 * Prevents accidental link/button activation while scrolling on touch devices.
 * Also stops click bubbling so parent handlers (overlays, menus) do not fire.
 */
export default function StopBubbleEvents() {
  useEffect(() => {
    const bound = new WeakSet()
    let touchTarget = null
    let startX = 0
    let startY = 0
    let scrolled = false

    function onDocumentTouchStart(event) {
      const target = event.target.closest?.(INTERACTIVE)
      if (!target) {
        touchTarget = null
        return
      }

      touchTarget = target
      startX = event.touches[0].clientX
      startY = event.touches[0].clientY
      scrolled = false
    }

    function onDocumentTouchMove(event) {
      if (!touchTarget) return

      const touch = event.touches[0]
      const dx = touch.clientX - startX
      const dy = touch.clientY - startY

      if (Math.hypot(dx, dy) > MOVE_THRESHOLD) {
        scrolled = true
      }
    }

    function onDocumentTouchEnd() {
      touchTarget = null
    }

    function onInteractiveClick(event) {
      if (scrolled) {
        event.preventDefault()
        event.stopPropagation()
        scrolled = false
        return
      }

      event.stopPropagation()
    }

    function bindElement(el) {
      if (bound.has(el)) return
      bound.add(el)
      el.addEventListener('click', onInteractiveClick)
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

    document.addEventListener('touchstart', onDocumentTouchStart, {
      passive: true,
      capture: true,
    })
    document.addEventListener('touchmove', onDocumentTouchMove, {
      passive: true,
      capture: true,
    })
    document.addEventListener('touchend', onDocumentTouchEnd, {
      passive: true,
      capture: true,
    })
    document.addEventListener('touchcancel', onDocumentTouchEnd, {
      passive: true,
      capture: true,
    })

    return () => {
      observer.disconnect()
      document.removeEventListener('touchstart', onDocumentTouchStart, true)
      document.removeEventListener('touchmove', onDocumentTouchMove, true)
      document.removeEventListener('touchend', onDocumentTouchEnd, true)
      document.removeEventListener('touchcancel', onDocumentTouchEnd, true)
      document.querySelectorAll(INTERACTIVE).forEach((el) => {
        el.removeEventListener('click', onInteractiveClick)
      })
    }
  }, [])

  return null
}

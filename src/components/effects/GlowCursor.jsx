import { useEffect, useRef, useState } from 'react'

/**
 * A soft glow that follows the pointer — desktop only. Disabled on touch
 * devices and when the user prefers reduced motion.
 */
export default function GlowCursor() {
  const ref = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)

    let rafId = 0
    const move = (e) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        }
      })
    }
    window.addEventListener('pointermove', move)
    return () => {
      window.removeEventListener('pointermove', move)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (!enabled) return null
  return <div ref={ref} className="glow-cursor" aria-hidden="true" />
}

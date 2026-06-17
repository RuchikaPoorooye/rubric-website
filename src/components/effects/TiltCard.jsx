import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

/**
 * 3D tilt card: rotates toward the pointer and shows a glow that tracks the
 * cursor (via --mx/--my CSS variables). Falls back to a static card when the
 * user prefers reduced motion.
 */
export default function TiltCard({ children, className = '', max = 8, ...rest }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)

  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 })
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 })

  const handleMove = (e) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rx.set((0.5 - py) * max * 2)
    ry.set((px - 0.5) * max * 2)
    ref.current.style.setProperty('--mx', `${px * 100}%`)
    ref.current.style.setProperty('--my', `${py * 100}%`)
  }

  const reset = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      {...rest}
    >
      <span className="tilt-glow" aria-hidden="true" />
      {children}
    </motion.div>
  )
}

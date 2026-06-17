import { motion, useReducedMotion } from 'framer-motion'

/**
 * Scroll-reveal wrapper: fades/slides children into view as they enter the
 * viewport. Honours prefers-reduced-motion (renders without movement).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  as = 'div',
  className,
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

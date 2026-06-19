import { motion, useReducedMotion } from 'framer-motion'

/** Compact hero banner for inner pages. */
export default function PageHeader({ eyebrow, title, lead }) {
  const reduce = useReducedMotion()
  return (
    <header className="page-header">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div
        className="container page-header-inner"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h1 className="page-title">{title}</h1>
        {lead && <p className="page-lead">{lead}</p>}
      </motion.div>
    </header>
  )
}

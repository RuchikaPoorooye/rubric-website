import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import RubricLogo from '../assets/logo/RubricLogo.jsx'
import ParticleField from './effects/ParticleField.jsx'
import { company } from '../data/site.js'

export default function Hero() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="hero">
      <ParticleField />
      <div className="hero-grid" aria-hidden="true" />

      <motion.div
        className="container hero-inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero-mark" variants={item}>
          <RubricLogo size={130} />
        </motion.div>

        <motion.p className="hero-eyebrow" variants={item}>
          <span className="status-dot" /> Software Quality Engineering · Est. {company.founded}
        </motion.p>

        <motion.h1 className="hero-title" variants={item}>
          Helping our customers deliver
          <span className="hero-accent"> better software, faster.</span>
        </motion.h1>

        <motion.p className="hero-sub" variants={item}>
          A South African software quality firm with {company.engineers} quality
          engineers — delivering testing, automation and specialist consulting so
          impact emerges from structure and execution.
        </motion.p>

        <motion.div className="hero-cta" variants={item}>
          <Link to="/services" className="btn btn-primary">
            Explore our services
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            Get in touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

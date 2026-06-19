import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import RubricLogo from '../assets/logo/RubricLogo.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { nav } from '../data/site.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand" aria-label="Rubric home">
          <RubricLogo size={44} />
        </Link>

        <nav className={`navbar-links ${open ? 'is-open' : ''}`}>
          {nav.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />
          <button
            type="button"
            className="navbar-burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

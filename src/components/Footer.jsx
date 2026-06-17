import { Link } from 'react-router-dom'
import RubricLogo from '../assets/logo/RubricLogo.jsx'
import { company, nav } from '../data/site.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <RubricLogo size={40} />
          <p className="footer-tagline">{company.tagline}</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <h4>Explore</h4>
          {nav.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="footer-contact">
          <h4>Find us</h4>
          <p>{company.address}</p>
          <a href={`https://${company.website}`} target="_blank" rel="noreferrer">
            {company.website}
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          &copy; {year} {company.name}. All rights reserved.
        </p>
        <p className="footer-bee">B-BBEE certified · Est. {company.founded}</p>
      </div>
    </footer>
  )
}

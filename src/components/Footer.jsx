import RubricLogo from '../assets/logo/RubricLogo.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <RubricLogo size={30} />
        <p className="footer-tagline">
          Helping our customers deliver better software, faster.
        </p>
        <p className="footer-copy">
          &copy; {year} Rubric Consulting (Pty) Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

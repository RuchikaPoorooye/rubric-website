import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section notfound">
      <div className="container center">
        <p className="section-eyebrow center">404</p>
        <h1 className="page-title">Page not found</h1>
        <p className="section-lead center">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </section>
  )
}

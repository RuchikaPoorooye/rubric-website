import RubricLogo from '../assets/logo/RubricLogo.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-mark">
          <RubricLogo size={96} withWordmark={false} />
        </div>
        <p className="hero-eyebrow">Rubric Consulting</p>
        <h1 className="hero-title">
          Helping our customers deliver
          <span className="hero-accent"> better software, faster.</span>
        </h1>
        <p className="hero-sub">
          Quality assurance, test automation and specialist technical
          consulting — built with precision and intention so impact emerges from
          structure and execution.
        </p>
        <div className="hero-cta">
          <a href="#services" className="btn btn-primary">
            Explore our services
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}

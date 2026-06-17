import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Stats from '../components/Stats.jsx'
import Departments from '../components/Departments.jsx'
import BrandStatement from '../components/BrandStatement.jsx'
import Reveal from '../components/effects/Reveal.jsx'
import TiltCard from '../components/effects/TiltCard.jsx'
import { services } from '../data/site.js'

export default function Home() {
  const preview = services.slice(0, 6)

  return (
    <>
      <Hero />

      {/* Services preview */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <p className="section-eyebrow">What we do</p>
            <h2 className="section-title">A full spectrum of software quality</h2>
            <p className="section-lead">
              From independent assessments to managed testing and specialist
              consulting — everything you need to deliver better software, faster.
            </p>
          </Reveal>

          <div className="services-grid">
            {preview.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <TiltCard className="service-card">
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="center-cta">
            <Link to="/services" className="btn btn-ghost">
              View all services →
            </Link>
          </Reveal>
        </div>
      </section>

      <Stats />
      <Departments />
      <BrandStatement />

      {/* CTA band */}
      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <h2 className="section-title center">Let’s build quality together</h2>
            <p className="section-lead center">
              Talk to Rubric about testing, automation and specialist consulting
              for your next project.
            </p>
            <div className="hero-cta center">
              <Link to="/contact" className="btn btn-primary">
                Get in touch
              </Link>
              <Link to="/about" className="btn btn-ghost">
                About Rubric
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

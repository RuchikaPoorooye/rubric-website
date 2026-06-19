import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/effects/Reveal.jsx'
import TiltCard from '../components/effects/TiltCard.jsx'
import { services } from '../data/site.js'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="What we do"
        lead="A full spectrum of quality assurance and technical services to help you deliver better software, faster."
      />

      <section className="section">
        <div className="container">
          <div className="services-grid services-grid--detail">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.07}>
                <TiltCard className="service-card service-card--detail">
                  <span className="service-index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="center-cta">
            <Link to="/contact" className="btn btn-primary">
              Discuss your project
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

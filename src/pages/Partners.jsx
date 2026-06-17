import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/effects/Reveal.jsx'
import TiltCard from '../components/effects/TiltCard.jsx'
import { atlassian } from '../data/site.js'

export default function Partners() {
  return (
    <>
      <PageHeader
        eyebrow="Our partners"
        title={atlassian.status}
        lead={atlassian.intro}
      />

      <section className="section">
        <div className="container">
          <div className="split-grid">
            <Reveal className="panel">
              <h3 className="panel-title">How we partner with you</h3>
              <p>{atlassian.offering}</p>
            </Reveal>
            <Reveal className="panel panel-accent" delay={0.08}>
              <h3 className="panel-title">Why Atlassian with Rubric</h3>
              <ul className="check-list">
                <li>Consulting, implementation &amp; administration</li>
                <li>Training &amp; enablement for your teams</li>
                <li>Licensing management &amp; ongoing support</li>
                <li>Advisory or hands-on, embedded in your team</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <p className="section-eyebrow">Product coverage</p>
            <h2 className="section-title">The full Atlassian suite</h2>
          </Reveal>
          <div className="products-grid">
            {atlassian.products.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 0.06}>
                <TiltCard className="product-card">
                  <h3>{p.name}</h3>
                  <p>{p.use}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

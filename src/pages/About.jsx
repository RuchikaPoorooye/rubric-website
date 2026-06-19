import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/effects/Reveal.jsx'
import { company, vision, mission, values, peopleStatement } from '../data/site.js'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="The connection between structure and execution"
        lead={`A privately held South African software quality firm, established in ${company.founded} and headquartered in ${company.headquarters}.`}
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="section-lead">
              Rubric Consulting employs {company.engineers} Software Quality
              Engineers and primarily serves major corporations across{' '}
              {company.sectors.join(', ').toLowerCase()}. We deliver tailored
              quality assurance solutions that improve how our clients build and
              ship software.
            </p>
          </Reveal>

          <div className="split-grid">
            <Reveal className="panel">
              <h3 className="panel-title">Our vision</h3>
              <p>{vision}</p>
            </Reveal>
            <Reveal className="panel" delay={0.08}>
              <h3 className="panel-title">Our mission</h3>
              <p>{mission}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <p className="section-eyebrow">What we stand for</p>
            <h2 className="section-title">Our values</h2>
          </Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className="value-card">
                <span className="value-index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="people-statement">
            <p className="section-eyebrow center">Our people</p>
            <blockquote className="statement">{peopleStatement}</blockquote>
          </Reveal>
        </div>
      </section>
    </>
  )
}

import Reveal from './effects/Reveal.jsx'
import TiltCard from './effects/TiltCard.jsx'
import { departments } from '../data/site.js'

export default function Departments() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Department architecture</p>
          <h2 className="section-title">One symbol. One unified brand.</h2>
          <p className="section-lead">
            Each department carries its own impact colour while sharing the same
            structure — reinforcing that impact emerges from execution.
          </p>
        </Reveal>

        <div className="departments-grid">
          {departments.map((d, i) => (
            <Reveal key={d.code} delay={i * 0.07}>
              <TiltCard className="department-card" style={{ '--dept': d.color }}>
                <span className="department-bar" />
                <h3>
                  <span className="department-mark">rubric</span>
                  <span className="department-code">{d.code}</span>
                </h3>
                <p>{d.tagline}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import CountUp from './effects/CountUp.jsx'
import Reveal from './effects/Reveal.jsx'
import { stats } from '../data/site.js'

export default function Stats() {
  return (
    <section className="section section-stats">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow center">Measurable impact</p>
          <h2 className="section-title center">Built on a track record</h2>
        </Reveal>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="stat-card">
              <div className="stat-value">
                {s.plain ? (
                  s.value
                ) : (
                  <CountUp value={s.value} suffix={s.suffix || ''} />
                )}
              </div>
              <div className="stat-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import CountUp from './effects/CountUp.jsx'
import Reveal from './effects/Reveal.jsx'

const stats = [
  { value: 15, suffix: '+', label: 'Years delivering quality' },
  { value: 9, suffix: '', label: 'Specialist service lines' },
  { value: 5, suffix: '', label: 'Brand departments' },
  { value: 100, suffix: '%', label: 'Focused on your outcomes' },
]

export default function Stats() {
  return (
    <section className="section section-stats">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow center">Measurable impact</p>
          <h2 className="section-title center">Impact in numbers</h2>
        </Reveal>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="stat-card">
              <div className="stat-value">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

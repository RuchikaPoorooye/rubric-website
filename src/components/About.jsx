const principles = [
  {
    title: 'Architectural',
    body: 'Built with precision and intention in everything we do.',
  },
  {
    title: 'Ecosystem-driven',
    body: 'Designed for interconnected growth and collaboration.',
  },
  {
    title: 'People-centered',
    body: 'We enable people to drive lasting change.',
  },
  {
    title: 'Open & adaptive',
    body: 'No enclosure — always evolving with our customers.',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-eyebrow">About us</p>
        <h2 className="section-title">
          The connection between structure and execution
        </h2>
        <p className="section-lead">
          Rubric Consulting focuses on quality assurance and testing services,
          with technical specialists providing support across test automation,
          mobile applications, performance and security. We help teams deliver
          measurable impact across the software lifecycle.
        </p>

        <div className="principles-grid">
          {principles.map((p) => (
            <div key={p.title} className="principle-card">
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    title: 'IT QA & Testing Assessments',
    body: 'Independent assessment of your QA maturity, processes and tooling.',
  },
  {
    title: 'QA & Test Process Consulting',
    body: 'Practical consulting to strengthen quality assurance and test processes.',
  },
  {
    title: 'Specialist Technical Consulting',
    body: 'Expertise across automation, mobile, performance and security.',
  },
  {
    title: 'Staff Augmentation',
    body: 'Skilled QA and engineering specialists to scale your teams.',
  },
  {
    title: 'Managed Testing Services',
    body: 'End-to-end testing delivered and managed on your behalf.',
  },
  {
    title: 'Mauritius Based Outsourcing',
    body: 'Cost-effective, near-shore delivery from our Mauritius teams.',
  },
  {
    title: 'Authorised Software Support',
    body: 'Authorised support to keep your platforms reliable and current.',
  },
  {
    title: 'Research & Development',
    body: 'Exploring new approaches, tooling and accelerators for quality.',
  },
  {
    title: 'Training',
    body: 'Empowering teams with the skills to test and build with confidence.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <p className="section-eyebrow">Our services</p>
        <h2 className="section-title">What we do</h2>
        <p className="section-lead">
          A full spectrum of quality assurance and technical services to help
          you deliver better software, faster.
        </p>

        <div className="services-grid">
          {services.map((s) => (
            <article key={s.title} className="service-card">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

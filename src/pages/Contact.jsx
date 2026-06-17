import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/effects/Reveal.jsx'
import { company } from '../data/site.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Let’s build quality together"
        lead="Talk to Rubric Consulting about quality assurance, test automation and specialist technical consulting for your next project."
      />

      <section className="section">
        <div className="container contact-inner">
          <Reveal>
            <ul className="contact-list">
              <li>
                <span className="contact-label">Company</span>
                {company.name}
              </li>
              <li>
                <span className="contact-label">Head office</span>
                {company.address}
              </li>
              <li>
                <span className="contact-label">Website</span>
                <a href={`https://${company.website}`} target="_blank" rel="noreferrer">
                  {company.website}
                </a>
              </li>
              <li>
                <span className="contact-label">Established</span>
                {company.founded} · B-BBEE certified
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            {submitted ? (
              <p className="form-success">
                Thanks! Your message has been captured. This demo form isn’t wired
                to a backend yet.
              </p>
            ) : (
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <label>
                  Name
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@company.com" required />
                </label>
                <label>
                  Subject
                  <input type="text" name="subject" placeholder="How can we help?" required />
                </label>
                <label>
                  Message
                  <textarea name="message" rows="4" placeholder="Tell us more…" required />
                </label>
                <button type="submit" className="btn btn-primary">
                  Send message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}

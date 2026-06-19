import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/effects/Reveal.jsx'
import { peopleStatement } from '../data/site.js'

const ALLOWED_EXT = ['.pdf', '.doc', '.docx']
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]
const MAX_BYTES = 5 * 1024 * 1024 // 5 MB

export default function Careers() {
  const [submitted, setSubmitted] = useState(false)
  const [cvName, setCvName] = useState('')
  const [cvError, setCvError] = useState('')

  function handleCv(e) {
    const file = e.target.files && e.target.files[0]
    if (!file) {
      setCvName('')
      setCvError('')
      return
    }
    const ext = file.name.slice(file.name.lastIndexOf('.')).toLowerCase()
    const typeOk = ALLOWED_TYPES.includes(file.type) || ALLOWED_EXT.includes(ext)
    if (!typeOk) {
      setCvError('Please upload a PDF, DOC or DOCX file.')
      setCvName('')
      e.target.value = ''
      return
    }
    if (file.size > MAX_BYTES) {
      setCvError('That file is too large — the maximum size is 5 MB.')
      setCvName('')
      e.target.value = ''
      return
    }
    setCvError('')
    setCvName(file.name)
  }

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Join the best software quality company on the planet"
        lead="We hire passionate professionals with initiative and a dedication to continuous improvement in software quality."
      />

      <section className="section">
        <div className="container careers-inner">
          <Reveal className="careers-intro">
            <blockquote className="statement">{peopleStatement}</blockquote>
            <ul className="check-list">
              <li>Work with {`180+`} quality engineers on enterprise software</li>
              <li>Grow across QA, automation, performance and security</li>
              <li>Be part of an innovative, client-centric culture</li>
            </ul>
          </Reveal>

          <Reveal className="careers-form-wrap" delay={0.08}>
            <h3 className="panel-title">Apply now</h3>
            {submitted ? (
              <p className="form-success">
                Thanks for your interest! This demo form isn’t wired to a backend
                yet — we’ll connect it to Rubric’s recruitment inbox next.
              </p>
            ) : (
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault()
                  if (cvError || !cvName) {
                    setCvError('Please attach your CV (PDF, DOC or DOCX).')
                    return
                  }
                  setSubmitted(true)
                }}
              >
                <label>
                  Position of interest
                  <input type="text" name="position" placeholder="e.g. Automation Engineer" required />
                </label>
                <div className="form-row">
                  <label>
                    First name
                    <input type="text" name="firstName" required />
                  </label>
                  <label>
                    Surname
                    <input type="text" name="surname" required />
                  </label>
                </div>
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@email.com" required />
                </label>
                <label className="file-field">
                  CV / Résumé — PDF, DOC or DOCX (max 5 MB)
                  <input
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleCv}
                    required
                  />
                </label>
                {cvError && <p className="field-error">{cvError}</p>}
                {cvName && !cvError && (
                  <p className="field-note">Attached: {cvName}</p>
                )}
                <label>
                  Qualifications / message
                  <textarea name="message" rows="4" placeholder="Tell us about yourself" />
                </label>
                <button type="submit" className="btn btn-primary">
                  Submit application
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}

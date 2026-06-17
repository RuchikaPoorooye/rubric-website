export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-inner">
        <div>
          <p className="section-eyebrow">Contact us</p>
          <h2 className="section-title">Let&rsquo;s build quality together</h2>
          <p className="section-lead">
            Talk to Rubric Consulting about quality assurance, test automation
            and specialist technical consulting for your next project.
          </p>
          <ul className="contact-list">
            <li>
              <span className="contact-label">Company</span>
              Rubric Consulting (Pty) Ltd
            </li>
            <li>
              <span className="contact-label">Website</span>
              <a href="https://rubric.co.za" target="_blank" rel="noreferrer">
                rubric.co.za
              </a>
            </li>
          </ul>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Thanks! This demo form is not yet wired to a backend.')
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
            Message
            <textarea name="message" rows="4" placeholder="How can we help?" required />
          </label>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

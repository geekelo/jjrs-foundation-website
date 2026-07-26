import { useState } from 'react'
import { IconMail } from './Icons'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="newsletter" id="newsletter" aria-labelledby="newsletter-heading">
      <div className="container">
        <div className="newsletter__card">
          <div className="newsletter__intro">
            <span className="newsletter__icon" aria-hidden="true">
              <IconMail size={20} />
            </span>
            <div>
              <h2 id="newsletter-heading">Stay Connected</h2>
              <p>Get devotionals, event updates, and stories of impact in your inbox.</p>
            </div>
          </div>

          {submitted ? (
            <p className="newsletter__success" role="status">
              Thank you for subscribing. We&apos;ll be in touch soon.
            </p>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

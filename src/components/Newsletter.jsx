import { IconWhatsapp } from './Icons'
import './Newsletter.css'

const WHATSAPP_URL =
  "https://wa.me/2349068491313?text=Hi%2C%20I%27ll%20like%20to%20know%20the%20next%20big%20thing%20happening%20on%20JJRSF"

export default function Newsletter() {
  return (
    <section className="newsletter" id="whatsapp" aria-labelledby="whatsapp-heading">
      <div className="container">
        <div className="newsletter__card">
          <div className="newsletter__intro">
            <span className="newsletter__icon" aria-hidden="true">
              <IconWhatsapp size={20} />
            </span>
            <div>
              <h2 id="whatsapp-heading">Stay Connected</h2>
              <p>
                Chat with us on WhatsApp for devotionals, event updates, and the
                next big thing happening at JJRSF.
              </p>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            className="btn btn-primary newsletter__cta"
            target="_blank"
            rel="noreferrer"
          >
            <IconWhatsapp size={16} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

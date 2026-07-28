import { IconBell } from './Icons'
import './PrayerBanner.css'

export default function PrayerBanner() {
  return (
    <section className="prayer" id="pray" aria-labelledby="prayer-heading">
      <div className="container">
        <div className="prayer__banner">
          <div className="prayer__left">
            <span className="prayer__icon" aria-hidden="true">
              <IconBell size={20} />
            </span>
            <div>
              <p className="prayer__label">Daily Prayer Time</p>
              <h2 id="prayer-heading">2:30 – 3:00 pm GMT+1</h2>
            </div>
          </div>
          <p className="prayer__copy">
            Join believers around the world each day as we seek God together in
            unity, faith, and love.
          </p>
          <a
            href="https://tinyurl.com/jjrsfstudio"
            className="btn btn-primary prayer__cta"
            target="_blank"
            rel="noreferrer"
          >
            Connect to Studio
          </a>
        </div>
      </div>
    </section>
  )
}

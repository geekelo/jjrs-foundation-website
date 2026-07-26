import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import {
  IconFacebook,
  IconYoutube,
  IconInstagram,
  IconMail,
  IconMapPin,
  IconPhone,
  IconLink,
} from './Icons'
import './Footer.css'

const quickLinks = [
  { label: 'About Us', to: '/get-involved#about-jjrsf' },
  { label: 'Events', to: '/#events' },
  { label: 'Get Involved', to: '/get-involved' },
  { label: 'Give / Donate', to: '/#donate' },
  { label: 'Careers', to: '/careers' },
  { label: 'Sitemap', to: '/sitemap' },
]

const resources = [
  { label: 'Blog', to: '/#library' },
  { label: '360 Devotional', to: '/#devotion' },
  { label: 'Sermons', to: '/#media' },
  { label: 'JJRSF e-Library', to: '/#library' },
  { label: 'Christian Learning Academy', to: '/#cla' },
]

const socials = [
  { label: 'Facebook', href: '#', Icon: IconFacebook },
  { label: 'YouTube', href: '#', Icon: IconYoutube },
  { label: 'Instagram', href: '#', Icon: IconInstagram },
  { label: 'Email', href: 'mailto:info@jjrsfoundation.org', Icon: IconMail },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img
              src={logo}
              alt="Jesus Jireh Rapha Support Foundation"
              width="52"
              height="52"
            />
            <span>
              <strong>JJRS Foundation</strong>
              <small>Prayer. Love. Partner.</small>
            </span>
          </Link>
          <p>
            We are driven to ensure that people fulfill their God-given purpose
            by pulling unbelievers out of the pit of sin which is unbelief in
            Jesus.
          </p>
          <ul className="footer__socials" aria-label="Social media">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} aria-label={label}>
                  <Icon size={15} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul className="footer__links">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Resources</h3>
          <ul className="footer__links">
            {resources.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact Us</h3>
          <ul className="footer__contact">
            <li>
              <IconMapPin size={16} />
              <span>Lagos, Nigeria</span>
            </li>
            <li>
              <IconPhone size={16} />
              <a href="tel:+2348000000000">+234 800 000 0000</a>
            </li>
            <li>
              <IconMail size={16} />
              <a href="mailto:info@jjrsfoundation.org">info@jjrsfoundation.org</a>
            </li>
            <li>
              <IconLink size={16} />
              <a href="#">www.jjrsfoundation.org</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} JJRS Foundation. All rights reserved.</p>
          <p>
            <a href="#privacy">Privacy Policy</a>
            <span aria-hidden="true"> | </span>
            <a href="#terms">Terms &amp; Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

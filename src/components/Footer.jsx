import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { IconMapPin, IconPhone, IconMail, IconLink } from './Icons'
import {
  footerQuickLinks,
  footerResources,
  footerBrand,
  contactInfo,
} from '../data/navigation'
import { socialLinks } from '../data/socials'
import { icons } from '../data/icons'
import './Footer.css'

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
              <strong>{footerBrand.name}</strong>
              <small>{footerBrand.tagline}</small>
            </span>
          </Link>
          <p>{footerBrand.blurb}</p>
          <ul className="footer__socials" aria-label="Social media">
            {socialLinks.map(({ label, href, icon }) => {
              const Icon = icons[icon]
              return (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    {...(href.startsWith('http')
                      ? { target: '_blank', rel: 'noreferrer' }
                      : {})}
                  >
                    <Icon size={15} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul className="footer__links">
            {footerQuickLinks.map((link) => (
              <li key={link.label}>
                {link.to.startsWith('http') ? (
                  <a href={link.to} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.to}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Resources</h3>
          <ul className="footer__links">
            {footerResources.map((link) => (
              <li key={link.label}>
                {link.to.startsWith('http') ? (
                  <a href={link.to} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.to}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact Us</h3>
          <ul className="footer__contact">
            <li>
              <IconMapPin size={16} />
              <span>{contactInfo.address}</span>
            </li>
            <li>
              <IconPhone size={16} />
              <a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer">
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <IconMail size={16} />
              <a href={contactInfo.emailHref}>{contactInfo.email}</a>
            </li>
            <li>
              <IconLink size={16} />
              <a href={contactInfo.websiteHref} target="_blank" rel="noreferrer">
                {contactInfo.website}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} {footerBrand.name}. All rights reserved.</p>
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

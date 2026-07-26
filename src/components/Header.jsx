import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { IconHeart, IconChevron, IconMenu, IconClose } from './Icons'
import './Header.css'

const suiteItems = [
  { label: 'JJRSF Brochure', to: '/#brochure' },
  { label: 'Events', to: '/#events' },
  { label: 'JJRSF TV & Radio', to: '/#media' },
  { label: 'JJRSF e-Library', to: '/#library' },
  { label: 'CLA (Christian Learning Academy)', to: '/#cla' },
  { label: '360 Devotional', to: '/#devotion' },
  { label: 'Prayer Schedule', to: '/#prayer-schedule' },
  { label: 'JJRS Photo Album', to: '/#album' },
]

const navItems = [
  { label: 'About', to: '/get-involved#about-jjrsf' },
  { label: 'Sitemap', to: '/sitemap' },
  { label: 'Team', to: '/careers' },
  {
    label: 'Suite',
    to: '/#suite',
    children: suiteItems,
  },
  { label: 'Initiatives', to: '/get-involved#initiatives-heading' },
  { label: 'Testimonies', to: '/#testimonies' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="brand" aria-label="JJRS Foundation home" onClick={closeMenu}>
          <img
            src={logo}
            alt="Jesus Jireh Rapha Support Foundation"
            className="brand__logo"
            width="56"
            height="56"
          />
          <span className="brand__text">
            <span className="brand__name">JJRS Foundation</span>
            <span className="brand__tagline">Prayer. Love. Partner.</span>
          </span>
        </Link>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li
                key={item.label}
                className={`nav__item ${item.children ? 'nav__item--has-dropdown' : ''}`}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav__link ${isActive ? 'nav__link--active' : ''}`
                  }
                  onClick={item.children ? undefined : closeMenu}
                >
                  {item.label}
                  {item.children ? <IconChevron /> : null}
                </NavLink>
                {item.children ? (
                  <ul className="nav__dropdown">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link to={child.to} onClick={closeMenu}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <Link
            to="/#donate"
            className="btn btn-primary header__donate header__donate--mobile"
            onClick={closeMenu}
          >
            <IconHeart size={15} />
            Give / Donate
          </Link>
        </nav>

        <Link to="/#donate" className="btn btn-primary header__donate header__donate--desktop">
          <IconHeart size={15} />
          Give / Donate
        </Link>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </header>
  )
}

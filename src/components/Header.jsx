import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { IconHeart, IconChevron, IconMenu, IconClose } from './Icons'
import './Header.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/get-involved#about-jjrsf' },
  { label: 'Events', to: '/#events' },
  {
    label: 'Media',
    to: '/#media',
    children: [
      { label: 'JJRS TV & Radio', to: '/#media' },
      { label: 'Photo Album', to: '/#media' },
      { label: 'Sermons', to: '/#media' },
    ],
  },
  {
    label: 'Resources',
    to: '/#resources',
    children: [
      { label: 'e-Library', to: '/#resources' },
      { label: 'Blog', to: '/#resources' },
      { label: 'Devotionals', to: '/#resources' },
    ],
  },
  {
    label: 'Get Involved',
    to: '/get-involved',
    children: [
      { label: 'Initiatives', to: '/get-involved#initiatives-heading' },
      { label: 'Social Outlets', to: '/get-involved#connect' },
      { label: 'Careers', to: '/careers' },
    ],
  },
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
                  end={item.to === '/'}
                  onClick={closeMenu}
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

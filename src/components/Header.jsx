import { useState } from 'react'
import logo from '../assets/logo.png'
import { IconHeart, IconChevron, IconMenu, IconClose } from './Icons'
import './Header.css'

const navItems = [
  { label: 'Home', href: '#', active: true },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  {
    label: 'Media',
    href: '#media',
    children: ['JJRS TV & Radio', 'Photo Album', 'Sermons'],
  },
  {
    label: 'Resources',
    href: '#resources',
    children: ['e-Library', 'Blog', 'Devotionals'],
  },
  {
    label: 'Get Involved',
    href: '#involved',
    children: ['Volunteer', 'Partner', 'Pray With Us'],
  },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="brand" aria-label="JJRS Foundation home">
          <img
            src={logo}
            alt="Jesus Jireh Rapha Support Foundation"
            className="brand__logo"
            width="56"
            height="56"
          />
          <span className="brand__text">
            <span className="brand__name">JJRS Foundation</span>
            <span className="brand__tagline">Grace. Faith. Love.</span>
          </span>
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li
                key={item.label}
                className={`nav__item ${item.children ? 'nav__item--has-dropdown' : ''} ${item.active ? 'nav__item--active' : ''}`}
              >
                <a href={item.href} className="nav__link">
                  {item.label}
                  {item.children ? <IconChevron /> : null}
                </a>
                {item.children ? (
                  <ul className="nav__dropdown">
                    {item.children.map((child) => (
                      <li key={child}>
                        <a href={item.href}>{child}</a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <a href="#donate" className="btn btn-primary header__donate header__donate--mobile">
            <IconHeart size={15} />
            Give / Donate
          </a>
        </nav>

        <a href="#donate" className="btn btn-primary header__donate header__donate--desktop">
          <IconHeart size={15} />
          Give / Donate
        </a>

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

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { IconHeart, IconChevron, IconMenu, IconClose } from './Icons'
import { navItems, footerBrand } from '../data/navigation'
import './Header.css'

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
            <span className="brand__name">{footerBrand.name}</span>
            <span className="brand__tagline">{footerBrand.tagline}</span>
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
                        {child.to.startsWith('http') ? (
                          <a
                            href={child.to}
                            target="_blank"
                            rel="noreferrer"
                            onClick={closeMenu}
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link to={child.to} onClick={closeMenu}>
                            {child.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <Link
            to="/give"
            className="btn btn-primary header__donate header__donate--mobile"
            onClick={closeMenu}
          >
            <IconHeart size={15} />
            GIVE/PARTNER
          </Link>
        </nav>

        <Link to="/give" className="btn btn-primary header__donate header__donate--desktop">
          <IconHeart size={15} />
          GIVE/PARTNER
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

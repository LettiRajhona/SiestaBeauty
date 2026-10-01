import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import siestaLogo from '../assets/SIESTA BEAUTY.png'

const menuItems = [
  { label: 'FŐOLDAL', to: '/' },
  { label: 'RÓLAM', to: '/rolam' },
  { label: 'KEZELÉSEK', to: '/kezelesek' },
  { label: 'THALGO', to: '/thalgo' },
  { label: 'ÁRAK', to: '/arak' },
  { label: 'KAPCSOLAT', to: '/kapcsolat' },
  { label: 'IDŐPONTFOGLALÁS', to: '/idopontfoglalas' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="headbar">
      <div className="headbar-content">
        <Link
          className="brand"
          to="/"
          aria-label="Siesta Beauty kozmetika – főoldal"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="brand-logo">
            <img src={siestaLogo} alt="" />
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Menü megnyitása"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`navigation ${isMenuOpen ? 'navigation-open' : ''}`}
        >
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header

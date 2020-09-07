import React, { useState } from 'react'

// Components
import Search from './Search'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return(
    <header className="header">
      <button onClick={() => setMenuOpen(!menuOpen)} className={`header__menu ${menuOpen ? 'header__menu--close' : ''}`}>
        <div className="header__icon"></div>
      </button>
      <h1 className="header__logo">applepie</h1>
      <Search />
    </header>
  )
}

export default Header

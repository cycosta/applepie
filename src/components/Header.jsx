import React, { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return(
    <header className="header">
      <button onClick={() => setMenuOpen(!menuOpen)} className={`header__menu ${menuOpen ? 'header__menu--close' : ''}`}>
        <div className="header__icon"></div>
      </button>
      <h1 className="header__logo">applepie</h1>
    </header>
  )
}

export default Header

import React from 'react'

// Components
import Search from './Search'

function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h2 className="hero__caption">Find your next meal here</h2>
        <Search />
      </div>
    </div>
  )
}

export default Hero

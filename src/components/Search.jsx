import React from 'react'

function Search() {
  return(
    <form className="search">
      <input className="search__input" type="search" />
      <button className="search__button">
        <div className="search__icon"></div>
      </button>
    </form>
  )
}

export default Search

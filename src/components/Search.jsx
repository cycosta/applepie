import React from 'react'

function Search() {
  return(
    <form className="search">
      <label className="search__toggle">
        <div className="search__button">
          <div className="search__icon search__button--toggle"></div>
        </div>
        <button className="search__button search__button--submit">
          <div className="search__icon"></div>
        </button>
      </label>
    </form>
  )
}

export default Search

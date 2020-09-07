import React from 'react'
import PropTypes from 'prop-types'

// Copmonents
import Card from './Card'

function List({ recipes }) {
  return (
    <ul className="list">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <li className="list__noresult">No recipes to display.</li>
      )}
    </ul>
  )
}

List.propTypes = {
  recipes: PropTypes.array
}

export default List

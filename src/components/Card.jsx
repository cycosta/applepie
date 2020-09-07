import React from 'react'
import PropTypes from 'prop-types'

function Card({ recipe }) {
  const { id, title } = recipe
  const imageUrl = `https://spoonacular.com/recipeImages/${id}-636x393.jpg`

  return (
    <li className="card">
      <figure className="card__thumb">
        <img className="card__image" src={imageUrl} alt={title} />
        <figcaption className="card__caption">
          <h2 className="card__title">{title}</h2>
          <a href={id} className="card__button">View recipe</a>
        </figcaption>
      </figure>
    </li>
  )
}

Card.propTypes = {
  recipe: PropTypes.object,
  id: PropTypes.number,
  title: PropTypes.string
}

export default Card

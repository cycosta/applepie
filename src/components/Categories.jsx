import React from 'react'
import PropTypes from 'prop-types'

// Swiper
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

function Categories({ categories, filter, setFilter, setTitle }) {
  SwiperCore.use([Navigation]);

  function handleCategoryChange(type, label) {
    setFilter(type)
    setTitle(label)
  }

  return (
    <div className="categories">
      <Swiper
        slidesPerView={3}
        breakpoints={{
          768: {
            slidesPerView: 7
          },
        }}
        navigation={{
          prevEl: '.categories__button--prev',
          nextEl: '.categories__button--next'
        }}
        loop
      >
        {categories.map(({ id, type, image, alt, label }) => (
          <SwiperSlide key={id} className="categories__item">
            <button
              className={`categories__link ${type === filter ? 'categories__link--active' : ''}`}
              onClick={() => handleCategoryChange(type, label)}
            >
              <figure className="categories__figure">
                <img className="categories__image" src={image} alt={alt} />
                <figcaption className="categories__label">{label}</figcaption>
              </figure>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="categories__button categories__button--prev"></div>
      <div className="categories__button categories__button--next"></div>
    </div>
  )
}

Categories.propTypes = {
  categories: PropTypes.array,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  setTitle: PropTypes.func
}

export default Categories

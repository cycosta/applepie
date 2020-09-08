import React, { useState, useEffect } from 'react'

import { getRecipes } from './services/api'

// Data
import { categories } from './services/data'

// Copmonents
import Hero from './components/Hero'
import Categories from './components/Categories'
import Title from './components/Title'
import List from './components/List';

function Home() {
  const [recipes, setRecipes] = useState([])

  const [filter, setFilter] = useState('main course')

  const [title, setTitle] = useState('Main Course')

  useEffect(() => {
    getRecipes(filter).then((data) => setRecipes(data))
  }, [filter])

  return (
    <>
      <Hero />
      <Categories categories={categories} filter={filter} setFilter={setFilter} setTitle={setTitle} />
      <Title categories={categories} title={title} />
      <List recipes={recipes} />
    </>
  );
}

export default Home

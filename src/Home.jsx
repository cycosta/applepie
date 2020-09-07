import React, { useState, useEffect } from 'react'

import { getRecipes } from './services/api'

// Copmonents
import List from './components/List';

function Home() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes('type=breakfast').then((data) => setRecipes(data))
  }, [])

  return (
    <List recipes={recipes} />
  );
}

export default Home

const apiKey = process.env.REACT_APP_FOOD_API_KEY

const headers = {
  'Content-Type': 'application/json',
}

// Search Recipes
export function getRecipes(params) {
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?number=12&${params}&apiKey=${apiKey}`

  return fetch(apiUrl, { headers })
    .then(response => response.json())
    .catch((error) => console.error(error))
}

const apiKey = process.env.REACT_APP_FOOD_API_KEY

const headers = {
  'Content-Type': 'application/json',
}

// Search Recipes
export function getRecipes(type) {
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?number=12&type=${type}&apiKey=${apiKey}`

  return fetch(apiUrl, { headers })
    .then(response => response.json())
    .then(data => {
      const { results } = data

      return results
    })
    .catch((error) => console.error(error))
}

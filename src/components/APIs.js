const urlFood = 'www.themealdb.com/api/json/v1/1/search.php?s=';
const urlDrink = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=';

async function fetchFood() {
  const response = await fetch(urlFood);
  const foodResponse = await response.json();

  return foodResponse;
}

async function fetchDrink() {
  const response = await fetch(urlDrink);
  const foodResponse = await response.json();

  return foodResponse;
}

export { fetchFood, fetchDrink };

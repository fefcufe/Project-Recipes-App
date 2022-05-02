import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { fetchDrink, fetchFood } from '../components/APIs';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setButton] = useState(true);

  const [food, setFood] = useState([]);
  async function getFood(param) {
    const foodResponse = await fetchFood(param);
    setFood(foodResponse);
  }

  const [drink, setDrink] = useState([]);
  async function getDrink(param) {
    const drinkResponse = await fetchDrink(param);
    setDrink(drinkResponse);
  }

  const [recipeDetails, setRecipeDetails] = useState({});

  const getDetailsById = async (currentLocation) => {
    // retirado de https://stackoverflow.com/questions/30607419/return-only-numbers-from-string
    const id = currentLocation.replace(/\D/g, '');

    if (currentLocation.includes('foods')) {
      const foodDetailsUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const foodDetails = await fetchFood(foodDetailsUrl);
      return setRecipeDetails(foodDetails.meals[0]);
    }
    const drinkDetailsUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const drinkDetails = await fetchDrink(drinkDetailsUrl);
    return setRecipeDetails(drinkDetails.drinks[0]);
  };

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    isButtonDisabled,
    setButton,
    food,
    setFood,
    drink,
    setDrink,
    getFood,
    getDrink,
    getDetailsById,
    recipeDetails,
  };

  return (
    <RecipesContext.Provider
      value={ contextValue }
    >
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default RecipesProvider;

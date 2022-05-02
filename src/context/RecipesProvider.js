import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchDrink, fetchFood } from '../components/APIs';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setButton] = useState(true);
  const history = useHistory();

  const [food, setFood] = useState([]);
  async function getFood(param) {
    const foodResponse = await fetchFood(param);
    if (foodResponse.meals.length === 1) {
      const id = foodResponse.meals[0].idMeal;
      history.push(`/foods/${id}`);
    }
    setFood(foodResponse);
  }

  const [drink, setDrink] = useState([]);
  async function getDrink(param) {
    const drinkResponse = await fetchDrink(param);
    if (drinkResponse.drinks.length === 1) {
      const id = drinkResponse.drinks[0].idDrink;
      history.push(`/drinks/${id}`);
    }
    setDrink(drinkResponse);
  }

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

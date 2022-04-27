import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { fetchDrink, fetchFood } from '../components/APIs';

function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setButton] = useState(true);

  const [food, setFood] = useState([]);
  async function getFood() {
    const foodResponse = await fetchFood();
    setFood(foodResponse);
  }

  const [drink, setDrink] = useState([]);
  async function getDrink() {
    const drinkResponse = await fetchDrink();
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

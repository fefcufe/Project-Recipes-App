import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { fetchDrink, fetchFood } from '../components/APIs';

function RecipesProvider({ children }) {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    food,
    setFood,
    drink,
    setDrink,
    getFood,
    getDrink,
  };

  const [food,setFood] = useState([]);
  async function getFood() {
    const foodResponse = await fetchFood();
    setFood(foodResponse);
  }

  const [drink,setDrink] = useState([]);
  async function getDrink() {
    const drinkResponse = await fetchDrink();
    setDrink(drinkResponse);
  }

  return (
    <RecipesContext.Provider value={ contextValue }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default RecipesProvider;

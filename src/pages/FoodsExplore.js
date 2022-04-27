import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

function FoodsExplore({ history }) {
  const [randomSupriseFoods, setRandomSupriseFoods] = useState(false);
  const fetchAPIReturn = async () => {
    const fetchAPI = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const jsonAPI = await fetchAPI.json();
    const { meals } = jsonAPI;
    return meals[0].idMeal;
  };

  useEffect(() => {
    const requestAPI = async () => {
      const results = await fetchAPIReturn();
      setRandomSupriseFoods(results);
      console.log(results);
    };
    requestAPI();
  }, []);
  return (
    <>
      <HeaderWithoutSearch />
      <h1 data-testid="page-title">Explore Foods</h1>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/foods/ingredients') }
      >
        By Ingredient
      </button>
      <button
        data-testid="explore-by-nationality"
        type="button"
        onClick={ () => history.push('/explore/foods/nationalities') }
      >
        By Nationality
      </button>
      <button
        data-testid="explore-surprise"
        type="button"
        onClick={ () => history.push(`/foods/${randomSupriseFoods}`) }
      >
        Surprise me!
      </button>
    </>
  );
}

FoodsExplore.propTypes = {
  history: PropTypes.node,
  push: PropTypes.func,
}.isRequired;

export default FoodsExplore;

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function FoodExploreIngredients() {
  const history = useHistory();
  const [Ingredients, setIngredients] = useState([]);
  const limit = 12;

  const fetchAPIReturn = async () => {
    const fetchAPI = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const jsonAPI = await fetchAPI.json();
    return jsonAPI.meals;
  };

  useEffect(() => {
    const requestAPI = async () => {
      const results = await fetchAPIReturn();
      setIngredients(results);
    };
    requestAPI();
  }, [setIngredients]);

  return (
    <>
      <Header />
      <h1 data-testid="page-title">Explore Ingredients</h1>
      { Ingredients[0] && Ingredients
        .slice(0, limit)
        .map(({ strIngredient }, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${index}-ingredient-card` }
            onClick={ () => history.push('/foods') }
            // precisa do requisito 17
          >
            <img
              src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
              alt="Card"
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{ strIngredient }</p>
          </button>
        )) }
      <Footer />
    </>
  );
}
FoodExploreIngredients.propTypes = {
  history: PropTypes.node,
  push: PropTypes.func.isRequired,
}.isRequired;
export default FoodExploreIngredients;

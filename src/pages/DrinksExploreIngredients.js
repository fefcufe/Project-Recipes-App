import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

function DrinksExploreIngredients() {
  const { getDrink } = useContext(RecipesContext);
  const history = useHistory();
  const [Ingredients, setIngredients] = useState([]);
  const limit = 12;

  const fetchAPIReturn = async () => {
    const fetchAPI = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const jsonAPI = await fetchAPI.json();
    return jsonAPI.drinks;
  };

  useEffect(() => {
    const requestAPI = async () => {
      const results = await fetchAPIReturn();
      setIngredients(results);
    };
    requestAPI();
  }, [setIngredients]);

  const urlGenerator = (id) => {
    const corrigida = id.replace(' ', '_');
    return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${corrigida}`;
  };

  return (
    <>
      <Header />
      <h1 data-testid="page-title">Explore Ingredients</h1>
      { Ingredients[0] && Ingredients
        .slice(0, limit)
        .map(({ strIngredient1 }, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${index}-ingredient-card` }
            onClick={ () => {
              getDrink(urlGenerator(strIngredient1));
              history.push('/drinks');
            } }
            // precisa do requisito 17
          >
            <img
              src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
              alt="Card"
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{ strIngredient1 }</p>
          </button>
        )) }
      <Footer />
    </>
  );
}

DrinksExploreIngredients.propTypes = {
  history: PropTypes.node,
  push: PropTypes.func.isRequired,
}.isRequired;
export default DrinksExploreIngredients;

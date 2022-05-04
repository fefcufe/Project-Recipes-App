import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';

function Recommended({ path }) {
  const { recommended } = useContext(RecipesContext);
  console.log(recommended);
  const limite = 6;

  if (path === 'foods') {
    const { drinks } = recommended;
    return (drinks && drinks.slice(0, limite).map((drink, index) => (
      <span
        className="recommended-card"
        key={ index }
      >
        <img
          alt="recommended-img"
          src={ drink.strDrinkThumb }
        />

        <p>
          { drink.strCategory }
        </p>

        <h1 data-testid={ `${index}-recomendation-title` }>
          { drink.strDrink }
        </h1>
      </span>
    )));
  }
  const { meals } = recommended;
  return (meals && meals.slice(0, limite).map((meal, index) => (
    <span
      className="recommended-card"
      key={ index }
    >
      <img
        alt="recommended-img"
        src={ meal.strMealThumb }
      />

      <p>
        { meal.strCategory}
      </p>

      <h1 data-testid={ `${index}-recomendation-title` }>
        { meal.strMeal }
      </h1>
    </span>
  )));
}

Recommended.propTypes = {
  path: PropTypes.string,
}.isRequired;

export default Recommended;

import React from 'react';
import PropTypes from 'prop-types';

function Cards({ meal, index }) {
  const { strMeal, strMealThumb } = meal;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <h2 data-testid={ `${index}-card-name` }>{ strMeal }</h2>
      <img
        data-testid={ `${index}-card-img` }
        src={ strMealThumb }
        alt="Card receita"
        className="CardImg"
      />
    </div>
  );
}

Cards.propTypes = {
  meal: PropTypes.node,
  strMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
}.isRequired;

export default Cards;

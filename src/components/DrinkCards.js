import React from 'react';
import PropTypes from 'prop-types';

function DrinkCards({ drink, index }) {
  console.log(drink);
  const { strDrink, strDrinkThumb } = drink;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <h2 data-testid={ `${index}-card-name` }>{ strDrink }</h2>
      <img
        data-testid={ `${index}-card-img` }
        src={ strDrinkThumb }
        alt="Card receita"
        className="CardImg"
      />
    </div>
  );
}

DrinkCards.propTypes = {
  meal: PropTypes.node,
  strDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
}.isRequired;

export default DrinkCards;

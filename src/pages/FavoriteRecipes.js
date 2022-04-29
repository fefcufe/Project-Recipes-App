import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import { favoriteRecipes } from '../new';

function FavoriteRecipes() {
  return (
    <>
      <Header />
      <h1 data-testid="page-title">Favorite Recipes</h1>
      {/* Talvez criar um componente */}
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drinks</button>

      { favoriteRecipes // localStorage.getItem('favoriteRecipes', JSON.stringify({ favoriteRecipes }))
        .map((item, index) => (
          <div key={ index }>
            <img src={ item.image } alt="" data-testid={ `${index}-horizontal-image` } />
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              { (item.type === 'food')
                ? `${item.nationality} - ${item.category}`
                : item.alcoholicOrNot}
            </p>
            <p data-testid={ `${index}-horizontal-name` }>{item.name}</p>
            <button
              type="button"
              data-testid={ `${index}-horizontal-share-btn` }
            >
              <img src={ shareIcon } alt="" />
            </button>
            <button
              type="button"
              data-testid={ `${index}-horizontal-favorite-btn` }
            >
              <img src={ blackHeartIcon } alt="" />
            </button>
          </div>
        ))}
    </>
  );
}
FavoriteRecipes.propTypes = {
  history: PropTypes.node,
}.isRequired;

export default FavoriteRecipes;

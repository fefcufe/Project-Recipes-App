import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';

function FavoriteRecipes() {
  return (
    <>
      <Header />
      <h1 data-testid="page-title">Favorite Recipes</h1>
    </>
  );
}
FavoriteRecipes.propTypes = {
  history: PropTypes.node,
}.isRequired;

export default FavoriteRecipes;

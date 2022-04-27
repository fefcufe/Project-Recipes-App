import PropTypes from 'prop-types';
import React from 'react';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

function FavoriteRecipes() {
  return (
    <>
      <HeaderWithoutSearch />
      <h1 data-testid="page-title">Favorite Recipes</h1>
    </>
  );
}
FavoriteRecipes.propTypes = {
  history: PropTypes.node,
}.isRequired;

export default FavoriteRecipes;

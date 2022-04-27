import React from 'react';
import Footer from '../components/Footer';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

function FoodExploreIngredients() {
  return (
    <>
      <HeaderWithoutSearch />
      <h1 data-testid="page-title">Explore Ingredients</h1>
      <Footer />
    </>
  );
}

export default FoodExploreIngredients;

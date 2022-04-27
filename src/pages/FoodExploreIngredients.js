import React from 'react';
import Footer from '../components/Footer';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

function FoodExploreIngredients() {
  const index = 0; // lint / temporario
  return (
    <>
      <HeaderWithoutSearch />
      <h1 data-testid="page-title">Explore Ingredients</h1>
      <div>
        <h2 data-testid={ `${index}-ingredient-card` }> Ingrediente </h2>
        <img src="" alt="" data-testid={ `${index}-card-img` } />
        <p data-testid={ `${index}-card-name` }>Nome</p>
      </div>
      <Footer />
    </>
  );
}

export default FoodExploreIngredients;

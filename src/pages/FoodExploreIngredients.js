import React from 'react';
import Header from '../components/Header';

function FoodExploreIngredients() {
  const index = 0; // lint / temporario
  return (
    <>
      <Header />
      <h1 data-testid="page-title">Explore Ingredients</h1>
      <div>
        <h2 data-testid={ `${index}-ingredient-card` }> Ingrediente </h2>
        <img src="" alt="" data-testid={ `${index}-card-img` } />
        <p data-testid={ `${index}-card-name` }>Nome</p>
      </div>

    </>
  );
}

export default FoodExploreIngredients;

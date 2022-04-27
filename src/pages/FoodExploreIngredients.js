import React from 'react';
<<<<<<< HEAD
import Footer from '../components/Footer';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';
=======
import Header from '../components/Header';
>>>>>>> pre-main-group-16

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
      <Footer />
    </>
  );
}

export default FoodExploreIngredients;

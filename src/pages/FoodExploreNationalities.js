import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function FoodExploreNationalities() {
  const nacionalidade = []; // por conta do lint / temporario
  return (
    <>
      <Header />
      <h1 data-testid="page-title">Explore Nationalities</h1>
      <select data-testid="explore-by-nationality-dropdown">
        <option data-testid={ `${nacionalidade}-option` } aria-label="nacionality" />
      </select>
      <Footer />
    </>
  );
}

export default FoodExploreNationalities;

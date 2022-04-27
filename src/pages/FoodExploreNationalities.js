import React from 'react';
<<<<<<< HEAD
import Footer from '../components/Footer';
import HeaderWithSearch from '../components/HeaderWithSearch';
=======
import Header from '../components/Header';
>>>>>>> pre-main-group-16

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

import React from 'react';
import HeaderWithSearch from '../components/HeaderWithSearch';

function FoodExploreNationalities() {
  const nacionalidade = []; // por conta do lint / temporario
  return (
    <>
      <HeaderWithSearch />
      <h1 data-testid="page-title">Explore Nationalities</h1>
      <select data-testid="explore-by-nationality-dropdown">
        <option data-testid={ `${nacionalidade}-option` } aria-label="nacionality" />
      </select>
    </>
  );
}

export default FoodExploreNationalities;

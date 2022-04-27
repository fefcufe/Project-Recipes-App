import React from 'react';
import Footer from '../components/Footer';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

function FoodExplore() {
  return (
    <>
      <HeaderWithoutSearch />
      <h1 data-testid="page-title">Explore Foods</h1>
      <Footer />
    </>
  );
}

export default FoodExplore;

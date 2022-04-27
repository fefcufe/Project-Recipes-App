import React from 'react';
import Footer from '../components/Footer';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

function DrinksExplore() {
  return (
    <>
      <HeaderWithoutSearch />
      <h1 data-testid="page-title">Explore Drinks</h1>
      <Footer />
    </>
  );
}

export default DrinksExplore;

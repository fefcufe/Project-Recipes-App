import React from 'react';
import HeaderWithSearch from '../components/HeaderWithSearch';
import Footer from '../components/Footer';

function Drinks() {
  return (
    <>
      <HeaderWithSearch />
      <h1 data-testid="page-title">Drinks</h1>
      <Footer />
    </>
  );
}

export default Drinks;

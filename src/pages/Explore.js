import React from 'react';
import Footer from '../components/Footer';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

function Explore() {
  return (
    <>
      <HeaderWithoutSearch />
      <h1 data-testid="page-title">Explore</h1>
      <Footer />
    </>
  );
}

export default Explore;

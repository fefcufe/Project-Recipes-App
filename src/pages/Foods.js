import React from 'react';
import Footer from '../components/Footer';
import HeaderWithSearch from '../components/HeaderWithSearch';

function Foods(props) {
  return (
    <>
      <HeaderWithSearch { ...props } />
      <h1 data-testid="page-title">Foods</h1>
      <Footer />
    </>

  );
}

export default Foods;

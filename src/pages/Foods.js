import React from 'react';
import HeaderWithSearch from '../components/HeaderWithSearch';

function Foods(props) {
  return (
    <>
      <HeaderWithSearch { ...props } />
      <h1 data-testid="page-title">Foods</h1>
    </>

  );
}

export default Foods;

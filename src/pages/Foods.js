import React from 'react';
import Header from '../components/Header';

function Foods(props) {
  return (
    <>
      <Header { ...props } />
      <h1 data-testid="page-title">Foods</h1>
    </>

  );
}

export default Foods;

import PropTypes from 'prop-types';
import React from 'react';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

function Explore({ history }) {
  return (
    <>
      <HeaderWithoutSearch />
      <h1 data-testid="page-title">Explore</h1>
      <button
        data-testid="explore-foods"
        type="button"
        onClick={ () => history.push('/explore/foods') }
      >
        Explore Foods
      </button>
      <button
        data-testid="explore-drinks"
        type="button"
        onClick={ () => history.push('/explore/drinks') }
      >
        Explore Drinks
      </button>
    </>
  );
}

Explore.propTypes = {
  history: PropTypes.node,
  push: PropTypes.func,
}.isRequired;

export default Explore;

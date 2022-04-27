import PropTypes from 'prop-types';
import React from 'react';
<<<<<<< HEAD
import Footer from '../components/Footer';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';
=======
import Header from '../components/Header';
>>>>>>> pre-main-group-16

function Explore({ history }) {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
//
Explore.propTypes = {
  history: PropTypes.node,
  push: PropTypes.func,
}.isRequired;

export default Explore;

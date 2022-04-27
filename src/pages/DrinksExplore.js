import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';
=======
import Header from '../components/Header';
>>>>>>> pre-main-group-16

function DrinksExplore({ history }) {
  const [randomSupriseDrinks, setRandomSupriseDrinks] = useState(false);
  const fetchAPIReturn = async () => {
    const fetchAPI = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const jsonAPI = await fetchAPI.json();
    const { drinks } = jsonAPI;
    return drinks[0].idDrink;
  };

  useEffect(() => {
    const requestAPI = async () => {
      const results = await fetchAPIReturn();
      setRandomSupriseDrinks(results);
      console.log(results);
    };
    requestAPI();
  }, []);
  return (
    <>
      <Header />
      <h1 data-testid="page-title">Explore Drinks</h1>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
      >
        By Ingredient
      </button>
      <button
        data-testid="explore-surprise"
        type="button"
        onClick={ () => history.push(`/drinks/${randomSupriseDrinks}`) }
      >
        Surprise me!
      </button>
      <Footer />
    </>
  );
}
DrinksExplore.propTypes = {
  history: PropTypes.node,
  push: PropTypes.func,
}.isRequired;
export default DrinksExplore;

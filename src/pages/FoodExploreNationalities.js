import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function FoodExploreNationalities() {
  const [nationalities, setNationalities] = useState([]);

  const fetchAPIReturn = async () => {
    const fetchAPI = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const jsonAPI = await fetchAPI.json();
    return jsonAPI.meals;
  };

  useEffect(() => {
    const requestAPI = async () => {
      const results = await fetchAPIReturn();
      setNationalities(results);
    };
    requestAPI();
  }, [setNationalities]);
  return (
    <>
      <Header />
      <h1 data-testid="page-title">Explore Nationalities</h1>
      <select data-testid="explore-by-nationality-dropdown">
        { nationalities[0] && Object
          .values(nationalities)
          .map(({ strArea }) => (
            <option
              data-testid={ `${strArea}-option` }
              aria-label="nacionality"
              key={ strArea }
            >
              { strArea }
            </option>
          ))}
      </select>
      <Footer />
    </>
  );
}

export default FoodExploreNationalities;

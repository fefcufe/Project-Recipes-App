import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import mealIcon from '../images/mealIcon.svg';

function FoodExploreNationalities() {
  const [nationalities, setNationalities] = useState([]);
  const [nationalitiesFood, setNationalitiesFood] = useState([]);

  const [nation, setNation] = useState('American');
  const url1 = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const url2 = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nation}`;

  const fetchAPIReturn = async (url) => {
    const fetchAPI = await fetch(url);
    const jsonAPI = await fetchAPI.json();
    return jsonAPI.meals;
  };

  useEffect(() => {
    const requestAPI = async () => {
      const results = await fetchAPIReturn(url1);
      setNationalities(results);
      const cardResults = ['0', '1', '2', '3', ' 4', '5', '6', '7', '8', '9', '10', '11'];
      setNationalitiesFood(cardResults);
    };
    requestAPI();
  }, [setNationalities]);
  const limit = 12;

  const requestAPI2 = async (e) => {
    const cardResults = await fetchAPIReturn(url2);
    setNationalitiesFood(cardResults);
    setNation(e);
  };

  return (
    <>
      <Header />
      <h1 data-testid="page-title">Explore Nationalities</h1>
      <select
        data-testid="explore-by-nationality-dropdown"
        onClick={ (e) => requestAPI2(e.target.value) }
      >
        { nationalities[0] && Object
          .values(nationalities)
          .map(({ strArea }) => (
            <option
              data-testid={ `${strArea}-option` }
              aria-label="nacionality"
              key={ strArea }
              name={ strArea }
            >
              { strArea }
            </option>
          ))}
      </select>
      {nationalitiesFood && nationalitiesFood
        .slice(0, limit)
        .map((food, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ index }>
            <img
              data-testid={ `${index}-card-img` }
              src={ food.strMealThumb
                ? food.strMealThumb
                : mealIcon }
              alt=""
            />
            <p data-testid={ `${index}-card-name` }>
              { food.strMeal }
            </p>
          </div>
        ))}
      <Footer />
    </>
  );
}

export default FoodExploreNationalities;

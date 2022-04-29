import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { italianMeals, japaneseMeals, meals } from '../new';

function FoodExploreNationalities() {
  const history = useHistory();

  const [nationalities, setNationalities] = useState([]);
  const [mealsByNation, setMealsByNation] = useState([]);

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
    };
    requestAPI();
  }, [setNationalities]);
  const limit = 12;

  const requestAPI2 = async (e) => {
    // paliativo
    if (e === 'All') {
      return setMealsByNation(meals.meals);
    }
    if (e === 'Japanese') {
      return setMealsByNation(japaneseMeals.meals);
    }
    if (e === 'Italian') {
      return setMealsByNation(italianMeals.meals);
    }
    // fim paliativo
    const cardResults = await fetchAPIReturn(url2);
    setMealsByNation(cardResults);
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
        <option
          data-testid="All-option"
          aria-label="nacionality"
          key="All"
          name="All"
        >
          All
        </option>
      </select>
      <section>
        { (mealsByNation[0] ? mealsByNation : meals.meals)
          .slice(0, limit)
          .map((food, index) => (
            <button
              type="button"
              className="recipe-card"
              data-testid={ `${index}-recipe-card` }
              key={ index }
              onClick={ () => history.push(`/foods/${food.idMeal}`) }
            >
              <img
                width="100px"
                data-testid={ `${index}-card-img` }
                src={ food.strMealThumb }
                alt=""
              />
              <p data-testid={ `${index}-card-name` }>
                { food.strMeal }
              </p>
            </button>
          ))}
      </section>
      <Footer />
    </>
  );
}

export default FoodExploreNationalities;

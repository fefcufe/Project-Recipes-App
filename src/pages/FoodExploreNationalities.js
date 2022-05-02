import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { meals } from '../new';

function FoodExploreNationalities() {
  const history = useHistory();

  const [nationalities, setNationalities] = useState([]);
  const [mealsByNation, setMealsByNation] = useState([]);

  const url1 = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

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
    //  meals.meals é temporário

    if (e === 'All') {
      return setMealsByNation(meals.meals);
      // Qual é a API que retorna todas as comidas?
      // requisito 17?
    }

    const url2 = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${e}`;
    const cardResults = await fetchAPIReturn(url2);
    setMealsByNation(cardResults);
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
        { (mealsByNation[0] ? mealsByNation : meals.meals) // meals.meals é temporário
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

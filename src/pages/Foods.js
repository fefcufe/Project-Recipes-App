import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import FoodCards from '../components/FoodCards';

const limite = 12;

function Foods(props) {
  const { getFood, food } = useContext(RecipesContext);
  // const { history } = props;

  useEffect(() => {
    getFood('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { meals } = food;

  return (
    <>
      <Header { ...props } />
      <h1 data-testid="page-title">Foods</h1>
      <div className="cardsContainer">
        {meals && meals.slice(0, limite).map((meal, index) => (
          <FoodCards meal={ meal } key={ meal.idMeal } index={ index } />
        ))}

      </div>
      <Footer />
    </>

  );
}

Foods.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default Foods;

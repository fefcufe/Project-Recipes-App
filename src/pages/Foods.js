import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';
import Cards from '../components/Cards';

const limite = 12;

function Foods(props) {
  const { getFood, food } = useContext(RecipesContext);
  // const { history } = props;

  useEffect(() => {
    getFood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { meals } = food;

  return (
    <>
      <Header { ...props } />
      <h1 data-testid="page-title">Foods</h1>
      <div className="cardsContainer">
        {meals && meals.slice(0, limite).map((meal, index) => (
          <Cards meal={ meal } key={ index } index={ index } />
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

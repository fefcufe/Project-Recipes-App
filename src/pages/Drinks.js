import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import DrinkCards from '../components/DrinkCards';

const limite = 12;

function Drinks(props) {
  const { drink, getDrink } = useContext(RecipesContext);
  const { drinks } = drink;

  useEffect(() => {
    getDrink('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header { ...props } />
      <h1 data-testid="page-title">Drinks</h1>
      <div className="cardsContainer">
        {drinks && drinks.slice(0, limite).map((liquor, index) => (
          <DrinkCards drink={ liquor } key={ liquor.idDrink } index={ index } />
        ))}

      </div>
      <Footer />
    </>
  );
}

export default Drinks;

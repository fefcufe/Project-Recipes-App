import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

const limite = 12;

function Foods() {
  const { getFood, food } = useContext(RecipesContext);

  useEffect(() => {
    getFood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getFood]);

  console.log(food);
  return (
    <>
      <Header />
      <h1 data-testid="page-title">Foods</h1>
      <div>
        { food.slice(0, limite).map((meal) => {
          const { strMealThumb: image, strMeal: name, idMeal: id } = meal;
          return (

            <>
              <ul>{name}</ul>
              <ul>{id}</ul>
              <ul>{image}</ul>
              <ul>{meal.name}</ul>
            </>

          );
        })}

      </div>
      <Footer />
    </>

  );
}

export default Foods;

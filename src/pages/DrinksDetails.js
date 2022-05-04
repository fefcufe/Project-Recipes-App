import React, { useContext, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import RecipesContext from '../context/RecipesContext';

function DrinksDetails() {
  const { getDetailsById, recipeDetails,
    getRecommendation, recommended } = useContext(RecipesContext);
  // retirado de https://stackoverflow.com/questions/35583334/react-router-get-full-current-path-name
  useEffect(() => {
    const currentLocation = (window.location.pathname);
    getDetailsById(currentLocation);
    getRecommendation('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  }, [getDetailsById, getRecommendation]);

  const renderDrinkIngredients = () => {
    const endIndex = 47;
    const startIndex = 17;
    const startMeasurement = 15;
    const ingredients = Object.values(recipeDetails)
      .slice(startIndex, endIndex)
      .filter((item) => item !== null
    && !(item.includes('.jpg')));

    return ingredients.map((item, index) => {
      if (item !== null && index < startMeasurement) {
        return (
          <li
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ index }
          >
            {`${item} - ${recipeDetails[`strMeasure${index + 1}`]}`}
          </li>
        );
      }
      return null;
    });
  };

  const renderDrinkRecommendations = () => {
    const limite = 6;
    const { meals } = recommended;
    return (meals && meals.slice(0, limite).map((meal, index) => (
      <Carousel width="100vw" className="carousel" key={ index }>
        <Carousel.Item
          data-testid={ `${index}-recomendation-card` }
          className="recommended-card"
        >
          <img
            alt="recommended-img"
            src={ meal.strMealThumb }
            width="100px"
            height="100px"
          />
          <Carousel.Caption>
            <p>
              { meal.strCategory }
            </p>

            <h1 data-testid={ `${index}-recomendation-title` }>
              { meal.strMeal }
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )));
  };

  return (
    <>
      <img
        data-testid="recipe-photo"
        alt="recipe-img"
        src={ recipeDetails.strDrinkThumb }
      />
      <div>
        <h1 data-testid="recipe-title">
          { recipeDetails.strDrink }
        </h1>
        <button
          type="button"
          data-testid="share-btn"
        >
          share icon
        </button>

        <button
          type="button"
          data-testid="favorite-btn"
        >
          favorite icon
        </button>
      </div>
      <p data-testid="recipe-category">
        { `Recipe category:
        ${recipeDetails.strAlcoholic}` }
      </p>

      <div className="ingredients-container">
        <ul>
          { renderDrinkIngredients() }
        </ul>
      </div>

      <div className="instructions-container">
        <h3> Instructions: </h3>
        <p data-testid="instructions">
          { recipeDetails.strInstructions }
        </p>
      </div>

      <div className="recommended-container">
        { renderDrinkRecommendations() }
      </div>

      <button
        data-testid="start-recipe-btn"
        type="button"
      >
        Start Recipe
      </button>
    </>
  );
}

export default DrinksDetails;

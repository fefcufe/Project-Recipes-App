import React, { useContext, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import RecipesContext from '../context/RecipesContext';

function FoodsDetails() {
  const { getDetailsById, recipeDetails,
    getRecommendation, recommended } = useContext(RecipesContext);

  // retirado de https://stackoverflow.com/questions/35583334/react-router-get-full-current-path-name
  useEffect(() => {
    const currentLocation = (window.location.pathname);
    getDetailsById(currentLocation);
    getRecommendation('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  }, [getDetailsById, getRecommendation]);

  const renderFoodIngredients = () => {
    const endIndex = 49;
    const startIndex = 9;
    const startMeasurement = 20;
    const ingredients = Object.values(recipeDetails).slice(startIndex, endIndex);
    // console.log(ingredients);
    return ingredients.map((item, index, array) => {
      if (item !== '' && index < startMeasurement) {
        return (
          <li
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ index }
          >
            {`${item} - ${array[index + startMeasurement]}`}
          </li>
        );
      }
      return null;
    });
  };

  const renderFoodRecommendations = () => {
    const limite = 6;
    const { drinks } = recommended;
    return (drinks && drinks.slice(0, limite).map((drink, index) => (
      <Carousel width="100vw" className="carousel" key={ index }>
        <Carousel.Item
          data-testid={ `${index}-recomendation-card` }
          className="recommended-card"
        >
          <img
            alt="recommended-img"
            src={ drink.strDrinkThumb }
            width="100px"
            height="100px"
          />
          <Carousel.Caption>
            <p>
              { drink.strCategory }
            </p>

            <h1 data-testid={ `${index}-recomendation-title` }>
              { drink.strDrink }
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
        src={ recipeDetails.strMealThumb }
      />
      <div>
        <h1 data-testid="recipe-title">
          { recipeDetails.strMeal }
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
        ${recipeDetails.strCategory}` }
      </p>

      <div className="ingredients-container">
        <ul>
          { renderFoodIngredients() }
        </ul>
      </div>

      <div className="instructions-container">
        <h3> Instructions: </h3>
        <p data-testid="instructions">
          { recipeDetails.strInstructions }
        </p>
      </div>
      {/* referencia: https://www.hostinger.com.br/tutoriais/o-que-e-iframe?ppc_campaign=google_performance_max&gclid=Cj0KCQjwpcOTBhCZARIsAEAYLuX3FL3afxfWsxk47QRyzzjW8nAjA8TNj9TH_vGj2R2Y75YgzhiY3V4aAiyhEALw_wcB */}
      <div className="video-container">
        <iframe
          title="recipe-video"
          data-testid="video"
          src={ recipeDetails.strYoutube }
          width="680"
          height="480"
          allowFullScreen
        />
      </div>

      <div className="recommended-container">
        { renderFoodRecommendations() }
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

export default FoodsDetails;

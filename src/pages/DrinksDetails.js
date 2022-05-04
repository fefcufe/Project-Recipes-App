import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';

function DrinksDetails() {
  const { getDetailsById, recipeDetails } = useContext(RecipesContext);
  const [modifyBottom, setModifyBottom] = useState(false);
  const history = useHistory();
  const [copied, setCopied] = useState(false);

  const { id } = useParams();

  const verifyStorage2 = () => {
    const progressRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));

    if (progressRecipe) {
      const isProgressMeals = Object.keys(progressRecipe.cocktails)
        .some((key) => key === id);

      if (isProgressMeals) {
        setModifyBottom(true);
      }
    }
  };

  // retirado de https://stackoverflow.com/questions/35583334/react-router-get-full-current-path-name
  useEffect(() => {
    const currentLocation = (window.location.pathname);
    getDetailsById(currentLocation);
    verifyStorage2();
  }, []);

  return (
    <>
      <img
        data-testid="recipe-photo"
        alt="recipe-img"
        src={ recipeDetails.strDrinkThumb }
      />
      <div>
        <h1 data-testid="recipe-title">
          {recipeDetails.strDrink}
        </h1>

        <div>
          { copied && <span>Link copied!</span> }
          <button
            type="button"
            data-testid="share-btn"
            onClick={ () => {
              navigator.clipboard.writeText(`http://localhost:3000/drinks/${id}`);
              setCopied(true);
            } }
          >
            <img src={ shareIcon } alt="compartilhar" />
          </button>

          <button type="button" data-testid="favorite-btn">
            Favoritar
          </button>
        </div>

      </div>
      <p data-testid="recipe-category">
        {`Recipe category:
        ${recipeDetails.strAlcoholic}`}
      </p>

      <div className="ingredients-container">
        <ul>
          <li
            data-testid="0-ingredient-name-and-measure"
          >
            Ingredients
          </li>
        </ul>
      </div>

      <div className="instructions-container">
        <h3> Instructions: </h3>
        <p data-testid="instructions">
          {recipeDetails.strInstructions}
        </p>
      </div>

      <div className="recommended-container">
        <div data-testid="0-recomendation-card" />
      </div>
      <button
        data-testid="start-recipe-btn"
        type="button"
        className="startRecipeBtn"
        onClick={ () => history.push(`/drinks/${id}/in-progress`) }
      >
        { modifyBottom ? 'Continue Recipe' : 'Start Recipe'}
      </button>

    </>
  );
}

export default DrinksDetails;

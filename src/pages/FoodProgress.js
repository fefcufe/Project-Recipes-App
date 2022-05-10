import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { handleButtonFavorite } from '../utils/handleFavoritesRecipes';

const copy = require('clipboard-copy');

const urlImage = (isFavorite) => {
  if (isFavorite) {
    return blackHeartIcon;
  }
  return whiteHeartIcon;
};

function FoodProgress() {
  const history = useHistory();
  const [isAllChecked, setIsAllChecked] = useState(true);
  const [copiedIt, setCopiedIt] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { getDetailsById, recipeDetails } = useContext(RecipesContext);

  const { id } = useParams();

  const reloadPage = () => {
    const storage = JSON.parse(localStorage.getItem('favoriteRecipes'));

    if (storage) {
      const existFavoriteRecipe = storage.some((recipe) => recipe.id === id);
      setIsFavorite(existFavoriteRecipe);
    }
  };

  // retirado de https://stackoverflow.com/questions/35583334/react-router-get-full-current-path-name
  useEffect(() => {
    reloadPage();
    const currentLocation = (window.location.pathname);
    getDetailsById(currentLocation);
  }, []);

  const copyIt = (idMeal) => {
    const limitTimeToRemove = 2000;
    setCopiedIt(true);
    copy(`http://localhost:3000/foods/${idMeal}`);
    setTimeout(() => { setCopiedIt(false); }, limitTimeToRemove);
  };

  const checkedUpdtate = ({ target }) => {
    if (target.parentNode.className === 'checked') {
      target.parentNode.classList.add('noChecked');
      target.parentNode.classList.remove('checked');
      target.parentNode.style = 'text-decoration: none';
    } else {
      target.parentNode.classList.add('checked');
      target.parentNode.classList.remove('noChecked');
      target.parentNode.style = 'text-decoration: line-through';
      setIsAllChecked(target.parentNode.parentNode.parentNode.innerHTML
        .includes('noChecked'));
    }
  };

  const renderFoodIngredients = () => {
    const endIndex = 47;
    const startIndex = 17;
    const startMeasurement = 15;
    const ingredients = Object.values(recipeDetails)
      .slice(startIndex, endIndex)
      .filter((item) => item !== null
    && !(item.includes('.jpg')));

    return ingredients.map((item, index) => {
      if (item !== null && index < startMeasurement
        && item !== ''
        && recipeDetails[`strMeasure${index + 1}`] !== null) {
        return (
          <li
            data-testid={ `${index}-ingredient-step` }
            key={ index }
          >
            <label
              htmlFor={ `checkbox-ingredient-${index}` }
              className="noChecked"
            >
              <input
                onClick={ (e) => checkedUpdtate(e) }
                name={ `checkbox-ingredient-${index}` }
                id={ `checkbox-ingredient-${index}` }
                type="checkbox"
              />
              {`${item} - ${recipeDetails[`strMeasure${index + 1}`]}`}
            </label>
          </li>
        );
      }
      return '';
    });
  };

  return (
    <>
      <img
        data-testid="recipe-photo"
        alt="recipe-img"
        src={ recipeDetails.strFoodThumb }
      />
      <div>
        <h1 data-testid="recipe-title">
          { recipeDetails.strFood }
        </h1>
        <button
          type="button"
          onClick={ () => copyIt(recipeDetails.idMeal) }
        >
          <img
            data-testid="share-btn"
            src={ shareIcon }
            alt="share recipe"
          />
        </button>
        <button
          type="button"
          onClick={ () => {
            handleButtonFavorite(setIsFavorite, isFavorite, recipeDetails);
          } }
        >
          <img
            data-testid="favorite-btn"
            src={ urlImage(isFavorite) }
            alt="favorite recipe"
          />
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

      <button
        data-testid="finish-recipe-btn"
        type="button"
        onClick={ () => history.push('/done-recipes') }
        disabled={ isAllChecked }
      >
        Finish Recipes
      </button>
      { copiedIt && <p>Link copied!</p> }
    </>
  );
}

export default FoodProgress;

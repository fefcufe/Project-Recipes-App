import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function DrinkProgress() {
  const history = useHistory();
  const [copiedIt, setCopiedIt] = useState(false);
  const { getDetailsById, recipeDetails } = useContext(RecipesContext);
  // retirado de https://stackoverflow.com/questions/35583334/react-router-get-full-current-path-name
  useEffect(() => {
    const currentLocation = (window.location.pathname);
    getDetailsById(currentLocation);
  }, [getDetailsById]);

  const unLikedItem = ({ target }) => {
    const parentDiv = target.parentNode.parentNode;

    parentDiv.remove();
    const get = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const updatedData = get.filter(
      (item) => !parentDiv.innerText.includes(item.name),
    );
    localStorage.setItem('favoriteRecipes',
      JSON.stringify(updatedData));
  };

  const copyIt = (id) => {
    const limitTimeToRemove = 2000;
    setCopiedIt(true);
    copy(`http://localhost:3000/drinks/${id}`);
    setTimeout(() => { setCopiedIt(false); }, limitTimeToRemove);
  };

  const checkedUpdtate = ({ target }) => {
    if (target.className === 'checked') {
      console.log(target.parentNode.childNodes);
      target.className = 'noChecked';
      return;
    }
    target.className = 'checked';
  };
  const renderDrinkIngredients = () => {
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
              onClick={ (e) => checkedUpdtate(e) }
              aria-hidden="true" // lint https://stackoverflow.com/a/64858019
            >
              <input
                // onClick={ (e) => checkedUpdtate(e) }
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
        src={ recipeDetails.strDrinkThumb }
      />
      <div>
        <h1 data-testid="recipe-title">
          { recipeDetails.strDrink }
        </h1>
        <button
          type="button"
          onClick={ () => copyIt(recipeDetails.idDrink) }
        >
          <img
            data-testid="share-btn"
            src={ shareIcon }
            alt="share recipe"
          />
        </button>
        <button
          type="button"
          onClick={ (e) => unLikedItem(e) }
        >
          <img
            data-testid="favorite-btn"
            src={ blackHeartIcon }
            alt="favorite recipe"
          />
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

      <button
        data-testid="finish-recipe-btn"
        type="button"
        onClick={ () => history.push('/done-recipes') }
      >
        Finish Recipes
      </button>
      { copiedIt && <p>Link copied!</p> }
    </>
  );
}

export default DrinkProgress;

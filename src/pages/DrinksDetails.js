import React from 'react';

function DrinksDetails() {
  return (
    <>
      <img
        data-testid="recipe-photo"
        alt="recipe-img"
      />
      <div>
        <h1 data-testid="recipe-title"> Title </h1>
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
      <p data-testid="recipe-category"> Recipe category</p>

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
        <h3> Instructions </h3>
        <p data-testid="instructions"> Instructions here </p>
      </div>

      <div className="recommended-container">
        <div data-testid="0-recomendation-card" />
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

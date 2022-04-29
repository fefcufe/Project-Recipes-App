import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';

const S = 's=';
const F = 'f=';

const searchByNameOrFLetter = (nameOrLetter) => (
  `www.themealdb.com/api/json/v1/1/search.php?${nameOrLetter}`
);
const searchByIngredient = (ingredient) => (
  `www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
);

function SearchBar() {
  const { getFood, getDrink } = useContext(RecipesContext);
  const [selectedRadio, setSelectedRadio] = useState('ingredient'); // by name = ?s=~name~ // // first letter = ?f=~letra~ // // by id = ?=i~number~ // // ingredient i=~string~
  const [inputValue, setInputValue] = useState('');
  const areYouFoodPage = useHistory().location.pathname.includes('foods');

  const URLGenerator = (param) => {
    if (selectedRadio === 'ingredient') {
      return searchByIngredient(param);
    }
    if (selectedRadio === 'name') {
      return searchByNameOrFLetter(S.concat(param));
    }
    if (selectedRadio === 'firstLetter') {
      return searchByNameOrFLetter(F.concat(param));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Recipe"
        data-testid="search-input"
        onChange={ ({ target }) => setInputValue(target.value) }
      />
      <label htmlFor="ingredient-search-radio">
        Ingredient
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient-search-radio"
          name="search-radio"
          onChange={ () => setSelectedRadio('ingredient') }
        />
      </label>
      <label htmlFor="name-search-radio">
        Name
        <input
          type="radio"
          data-testid="name-search-radio"
          id="name-search-radio"
          name="search-radio"
          onChange={ () => setSelectedRadio('name') }
        />
      </label>
      <label htmlFor="first-letter-search-radio">
        First Letter
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter-search-radio"
          name="search-radio"
          onChange={ () => setSelectedRadio('firstLetter') }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={
          areYouFoodPage
            ? () => getFood(URLGenerator(inputValue))
            : () => getDrink(URLGenerator(inputValue))
        }
      >
        Search
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  history: PropTypes.node,
  push: PropTypes.func,
}.isRequired;

export default SearchBar;

import React from 'react';
import PropTypes from 'prop-types';

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Recipe"
      />
      <label htmlFor="ingredient-search-radio">
        Ingredient
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient-search-radio"
          name="search-radio"
        />
      </label>
      <label htmlFor="name-search-radio">
        Name
        <input
          type="radio"
          data-testid="name-search-radio"
          id="name-search-radio"
          name="search-radio"

        />
      </label>
      <label htmlFor="first-letter-search-radio">
        First Letter
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter-search-radio"
          name="search-radio"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
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

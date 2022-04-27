import PropTypes from 'prop-types';
import React from 'react';

function SearchBar() {
  return (
    <label htmlFor="search-input">
      Search
      <input data-testid="search-input" id="search-input" />
    </label>
  );
}
SearchBar.propTypes = {
  history: PropTypes.node,
  push: PropTypes.func,
}.isRequired;

export default SearchBar;

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ history }) {
  const [showBar, setShowBar] = useState(false);
  return (
    <div>
      <header>
        <button type="button" onClick={ () => history.push('/profile') }>
          <img
            src={ profileIcon }
            alt="Profile Icon"
            data-testid="profile-top-btn"
          />
        </button>
        <h1 data-testid="page-title">`Este é o titulo  strMeal`</h1>
        <button
          type="button"
          onClick={ () => (setShowBar(!showBar)) }
        >
          {/* tem que ficar dentro duma condicional para nao aparecer em certas paginas */}
          <img
            src={ searchIcon }
            alt="Search Icon"
            data-testid="search-top-btn"

          />
        </button>
      </header>
      {showBar && <SearchBar />}
    </div>
  );
}

Header.propTypes = {
  history: PropTypes.node,
  push: PropTypes.func.isRequired,
}.isRequired;

export default Header;

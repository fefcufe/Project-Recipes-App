import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header() {
  const history = useHistory();

  const [showBar, setShowBar] = useState(false);
  const pathNames = ['/drinks', '/foods', '/explore/foods/nationalities'];
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
        {/* tem que ficar dentro duma condicional para nao aparecer em certas paginas */}
        { (history.location.pathname && pathNames
          .some((path) => history.location.pathname === path))
        && (
          <button
            type="button"
            onClick={ () => (setShowBar(!showBar)) }
          >
            <img
              src={ searchIcon }
              alt="Search Icon"
              data-testid="search-top-btn"

            />
          </button>)}
      </header>
      {showBar && <SearchBar />}
    </div>
  );
}

Header.propTypes = {
  history: PropTypes.node,
  location: PropTypes.node.isRequired,
  pathname: PropTypes.node.isRequired,
  push: PropTypes.func.isRequired,
}.isRequired;

export default Header;

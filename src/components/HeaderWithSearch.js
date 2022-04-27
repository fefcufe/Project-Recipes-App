import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SearchBar from './SearchBar';

function HeaderWithSearch({ history }) {
  const [showOrHideSearchBar, setShowOrHideSearchBar] = useState(false);

  return (
    <header>
      <button type="button" onClick={ () => history.push('/profile') }>
        <img
          src="../images/profileIcon.svg"
          alt="Profile Icon"
          data-testid="profile-top-btn"
        />
      </button>
      <button
        type="button"
        onClick={ () => (showOrHideSearchBar
          ? setShowOrHideSearchBar(false)
          : setShowOrHideSearchBar(true)) }
      >
        <img
          src="../images/searchIcon.svg"
          alt="Search Icon"
          data-testid="search-top-btn"

        />
      </button>
      { showOrHideSearchBar && <SearchBar />}
    </header>
  );
}

HeaderWithSearch.propTypes = {
  history: PropTypes.node,
  push: PropTypes.func.isRequired,
}.isRequired;

export default HeaderWithSearch;

import PropTypes from 'prop-types';
import React from 'react';

function Header({ history }) {
  return (
    <header>
      <button type="button" onClick={ () => history.push('/profile') }>
        <img
          src="src/images/profileIcon.svg"
          alt="Profile Icon"
          data-testid="profile-top-btn"
        />
      </button>
    </header>
  );
}

Header.propTypes = {
  history: PropTypes.node,
  push: PropTypes.func.isRequired,
}.isRequired;

export default Header;

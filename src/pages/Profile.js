import PropTypes from 'prop-types';
import React from 'react';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

function Profile({ history }) {
  return (
    <>
      <HeaderWithoutSearch />
      <h1 data-testid="page-title">Profile</h1>
      <div>
        <p data-testid="profile-email"> email </p>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('done-recipes') }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => history.push('/') }
        >
          Logout
        </button>
      </div>

    </>
  );
}
Profile.propTypes = {
  history: PropTypes.node,
  push: PropTypes.func,
}.isRequired;
export default Profile;

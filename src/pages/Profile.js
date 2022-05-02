import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile({ history }) {
  const handleClick = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <>
      <Header />
      <h1 data-testid="page-title">Profile</h1>
      <div>
        <p data-testid="profile-email">
          {localStorage.getItem('user')}
        </p>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => handleClick() }
        >
          Logout
        </button>
        <br />
        <br />
        <Footer />
      </div>

    </>
  );
}
Profile.propTypes = {
  history: PropTypes.node,
  push: PropTypes.func,
}.isRequired;
export default Profile;

import React from 'react';
import PropTypes from 'prop-types';

function Login({ history }) {
  // const handleClick = () => {
  //   const { email, setEmail, password, setPassword } = contextValue;
  //   const validEmail
  // }
  /* const { contextValue } = useContext(RecipesContext); */
  return (
    <div>
      <label htmlFor="email-input">
        <input type="text" data-testid="email-input" id="email-input" />
      </label>
      <label htmlFor="password-input">
        <input
          data-testid="password-input"
          type="password"
          id="password-input"
          // value={ contextValue.email }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        // disabled={ disabled }
        onClick={ () => history.push('/foods') }
      >
        Enter
      </button>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.node,
  push: PropTypes.func,
}.isRequired;

export default Login;

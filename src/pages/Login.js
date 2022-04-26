import React from 'react';

function Login() {
  // const handleClick = () => {
  //
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
          // value={ contextValue.email }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        // disabled={ disabled }
        // onClick={ handleCLick }
      >
        Enter
      </button>
    </div>
  );
}

export default Login;

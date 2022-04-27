import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setButton] = useState(true);

  /* const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    isButtonDisabled,
    setButton,
  }; */

  return (
    <RecipesContext.Provider
      value={
        { email,
          setEmail,
          password,
          setPassword,
          isButtonDisabled,
          setButton }
      }
    >
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default RecipesProvider;

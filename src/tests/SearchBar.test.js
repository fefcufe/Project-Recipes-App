import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando a barra de busca', () => {
  test('Tem os data-testids tanto da barra de busca quanto de todos os radio-buttons',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/foods');

      userEvent.click(screen.getByTestId('search-top-btn'));

      expect(screen.getByTestId('search-input')).toBeInTheDocument();
      expect(screen.getByTestId('ingredient-search-radio')).toBeInTheDocument();
      expect(screen.getByTestId('name-search-radio')).toBeInTheDocument();
      expect(screen.getByTestId('first-letter-search-radio')).toBeInTheDocument();
      expect(screen.getByTestId('exec-search-btn')).toBeInTheDocument();
    });
});

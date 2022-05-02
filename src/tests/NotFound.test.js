import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa NotFound', () => {
  test('Se tem texto Not Found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/notfound');

    const notFound = screen.getByText(/Not Found/i);
    expect(notFound).toBeInTheDocument();
  });
});

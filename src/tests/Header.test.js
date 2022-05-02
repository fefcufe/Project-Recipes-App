import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa a Página de Header', () => {
  test('Se tem header na tela de login', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');
    expect(screen.queryByTestId('profile-top-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('page-title')).not.toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });

  test('Se tem header na tela de principal de receitas de comidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    expect(screen.queryByTestId('profile-top-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('page-title')).toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).toBeInTheDocument();
  });

  test('Se tem o header na tela de principal de receitas de bebidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks');
    expect(screen.queryByTestId('profile-top-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('page-title')).toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).toBeInTheDocument();
  });

  test('Se não tem header na tela de detalhes de receitas de comida', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods/52771');
    expect(screen.queryByTestId('profile-top-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('page-title')).not.toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });

  test('Se não tem header na tela de detalhes de uma receitas de bebida', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks/178319');
    expect(screen.queryByTestId('profile-top-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('page-title')).not.toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });

  test('Se não tem header na tela de receitas/bebidas em progresso de comida', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods/52771/in-progress');
    expect(screen.queryByTestId('profile-top-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('page-title')).not.toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();

    history.push('/drinks/178319/in-progress');
    expect(screen.queryByTestId('profile-top-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('page-title')).not.toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela de explorar', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explore');
    expect(screen.queryByTestId('profile-top-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('page-title')).toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela de explorar comidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explore/foods');
    expect(screen.queryByTestId('profile-top-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('page-title')).toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela de explorar bebidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explore/drinks');
    expect(screen.queryByTestId('profile-top-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('page-title')).toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela de explorar comidas por ingrediente',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/explore/foods/ingredients');
      expect(screen.queryByTestId('profile-top-btn')).toBeInTheDocument();
      expect(screen.queryByTestId('page-title')).toBeInTheDocument();
      expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
    });

  test('O header tem os ícones corretos na tela de explorar bebidas por ingrediente',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/explore/drinks/ingredients');
      expect(screen.queryByTestId('profile-top-btn')).toBeInTheDocument();
      expect(screen.queryByTestId('page-title')).toBeInTheDocument();
      expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
    });

  test('O header tem os ícones corretos na tela de explorar comidas por nacionalidade',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/explore/foods/nationalities');
      expect(screen.queryByTestId('profile-top-btn')).toBeInTheDocument();
      expect(screen.queryByTestId('page-title')).toBeInTheDocument();
      expect(screen.queryByTestId('search-top-btn')).toBeInTheDocument();
    });

  test('O header tem os ícones corretos na tela de perfil', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');
    expect(screen.queryByTestId('profile-top-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('page-title')).toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela de receitas feitas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/done-recipes');
    expect(screen.queryByTestId('profile-top-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('page-title')).toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela de receitas favoritas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorite-recipes');
    expect(screen.queryByTestId('profile-top-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('page-title')).toBeInTheDocument();
    expect(screen.queryByTestId('search-top-btn')).not.toBeInTheDocument();
  });
  test('Se o input do search aparece e desaperece ao ser clicado', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');

    const searchBtn = screen.getByTestId('search-top-btn');
    expect(searchBtn).toBeInTheDocument();

    userEvent.click(searchBtn);
    const inputSearch = screen.getByTestId('search-input');
    expect(inputSearch).toBeInTheDocument();

    userEvent.click(searchBtn);
    expect(inputSearch).not.toBeInTheDocument();
  });
  test('A mudança de tela ocorre corretamente', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');

    expect(screen.getByTestId('page-title')).toHaveValue('Foods');

    userEvent.click(screen.getByTestId('profile-top-btn'));

    expect(screen.getByTestId('page-title')).toHaveValue('Profile');
    history.push('/foods');
    userEvent.click(screen.queryByTestId('btn-profile'));
    expect(history.location.pathname).toEqual('/profile');
    history.push('/profile');
  });
});

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa a Página de Login', () => {
  test('Se tem os data-testids email-input, password-input e login-submit-btn', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const email = screen.getByTestId('email-input');
    expect(email).toBeInTheDocument();

    const password = screen.getByTestId('password-input');
    expect(password).toBeInTheDocument();

    const LoginBtn = screen.getByTestId('login-submit-btn');
    expect(LoginBtn).toBeInTheDocument();
  });
  test('Se é possível escrever o email', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const email = screen.getByTestId('email-input');

    userEvent.type(email, 'grupo16@mail.com');
    expect(email.value).toBe('grupo16@mail.com');
  });
  test('Se é  possível escrever a senha', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const password = screen.getByTestId('password-input');
    userEvent.type(password, '1234567');
    expect(password.value).toBe('1234567');
  });
  test('Se o botão deve estar desativado se o email for inválido', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    expect(screen.getByTestId('login-submit-btn')).toBeDisabled();

    userEvent.type(screen.getByTestId('email-input'), 'email@mail');
    userEvent.type(screen.getByTestId('password-input'), '1234567');

    userEvent.type(screen.getByTestId('email-input'), '@mail.com');
    userEvent.type(screen.getByTestId('password-input'), '1234567');

    expect(screen.getByTestId('login-submit-btn')).toBeDisabled();
  });

  test('Se o botão deve estar desativado se a senha deve tiver 6 caracteres ou menos',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/');

      expect(screen.getByTestId('login-submit-btn')).toBeDisabled();
      userEvent.type(screen.getByTestId('email-input'), 'email@mail.com');
      userEvent.type(screen.getByTestId('password-input'), '123456');

      expect(screen.getByTestId('login-submit-btn')).toBeDisabled();
    });

  test('Se o botão deve estar ativado se o email e a senha forem válidos', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    expect(screen.getByTestId('login-submit-btn')).toBeDisabled();

    userEvent.type(screen.getByTestId('email-input'), 'email@mail.com');
    userEvent.type(screen.getByTestId('password-input'), '1234567');

    expect(screen.getByTestId('login-submit-btn')).not.toBeDisabled();
  });
});

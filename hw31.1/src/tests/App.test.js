// tests/App.test.js



import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('сторінка має заголовок "Список завдань"', () => {
  render(<App />);
  const headingElement = screen.getByText(/Список завдань/i);
  expect(headingElement).toBeInTheDocument();
});

// tests/AddTodo.test.js

// tests/AddTodo.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from '../components/AddTodo';
import { Provider } from 'react-redux';
import store from '../store';

test('поле введення дозволяє вводити цифри та букви', () => {
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );
  const inputElement = screen.getByPlaceholderText(/Нове завдання/i);
  fireEvent.change(inputElement, { target: { value: 'Test123' } });
  expect(inputElement.value).toBe('Test123');
});



test('отримуємо помилку при додаванні порожнього завдання', () => {
   render(
     <Provider store={store}>
       <AddTodo />
     </Provider>
   );
   const addButton = screen.getByText(/Додати/i);
   fireEvent.click(addButton);
   const errorMessage = screen.getByText(/Введіть завдання/i);
   expect(errorMessage).toBeInTheDocument();
 });
 
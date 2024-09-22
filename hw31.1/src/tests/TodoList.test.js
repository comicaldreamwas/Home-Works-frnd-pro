
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store';

test('додавання нового завдання до списку', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const inputElement = screen.getByPlaceholderText(/Нове завдання/i);
  const addButton = screen.getByText(/Додати/i);

  fireEvent.change(inputElement, { target: { value: 'Тестове завдання' } });
  fireEvent.click(addButton);

  const newTodo = screen.getByText(/Тестове завдання/i);
  expect(newTodo).toBeInTheDocument();
});


test('позначення завдання як виконане після натискання', () => {
   render(
     <Provider store={store}>
       <App />
     </Provider>
   );
 
   const inputElement = screen.getByPlaceholderText(/Нове завдання/i);
   const addButton = screen.getByText(/Додати/i);
 
   fireEvent.change(inputElement, { target: { value: 'Тестове завдання' } });
   fireEvent.click(addButton);
 
   const todoItem = screen.getByText(/Тестове завдання/i);
 
   
   expect(todoItem).not.toHaveStyle('text-decoration: line-through');
 
   
   fireEvent.click(todoItem);
 
   
   expect(todoItem).toHaveStyle('text-decoration: line-through');
 });
 

// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';
function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Список завдань</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;

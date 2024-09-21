// components/TodoList.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodosRequest, clearTodosRequest } from '../actions/todoActions';
import TodoItem from './TodoItem';


const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(loadTodosRequest());
  }, [dispatch]);

  const handleClearTodos = () => {
    dispatch(clearTodosRequest());
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      {todos.length > 0 && <button onClick={handleClearTodos}>Очистити всі завдання</button>}
    </div>
  );
};

export default TodoList;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, markComplete, editTodo } from '../store/actions';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            onClick={() => dispatch(markComplete(todo.id))}
          >
            {todo.task}
          </span>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Видалити</button>
          <button
            onClick={() => {
              const newTask = prompt('Редагувати завдання:', todo.task);
              if (newTask) dispatch(editTodo(todo.id, newTask));
            }}
          >
            Редагувати
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;



import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteTodoRequest,
  toggleTodoRequest,
  editTodoRequest,
} from '../actions/todoActions';


const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleToggle = () => {
    dispatch(toggleTodoRequest(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodoRequest(todo.id));
  };

  const handleEdit = () => {
    if (text.trim()) {
      dispatch(editTodoRequest({ ...todo, text }));
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleEdit}>Зберегти</button>
        </>
      ) : (
        <>
          <span
            onClick={handleToggle}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Редагувати</button>
        </>
      )}
      <button onClick={handleDelete}>Видалити</button>
    </li>
  );
};

export default TodoItem;

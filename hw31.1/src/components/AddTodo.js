

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoRequest } from '../actions/todoActions';


const AddTodo = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodoRequest({ text, completed: false }));
      setText('');
      setError('');
    } else {
      setError('Введіть завдання');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Нове завдання"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Додати</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AddTodo;

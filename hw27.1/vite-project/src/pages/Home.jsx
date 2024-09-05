
import React, { useState } from 'react';

function Home() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    if (todo.trim()) {
      setTodoList([...todoList, todo]);
      setTodo('');
    }
  };

  return (
    <div>
      <h1>TODO List</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todoList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;



import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
} from '@mui/material';
import { Delete } from '@mui/icons-material';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
      setText('');
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Список завдань
      </Typography>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <TextField
          label="Нове завдання"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddTodo} style={{ marginLeft: '10px' }}>
          Додати
        </Button>
      </div>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} dense>
            <Checkbox
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
              onChange={() => handleToggleTodo(todo.id)}
            />
            <ListItemText
              primary={todo.text}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            />
            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTodo(todo.id)}>
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Todo;

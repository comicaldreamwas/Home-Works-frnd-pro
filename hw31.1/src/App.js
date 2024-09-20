import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './store/actions';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './styles.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos()); 
  }, [dispatch]);

  return (
    <div className="App">
      <h1>TODO додаток</h1>
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;

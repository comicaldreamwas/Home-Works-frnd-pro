import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.css';

function App() {
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

import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const todosCount = useSelector((state) => state.todos.length); 

  return <footer>Загальна кількість завдань: {todosCount}</footer>;
};

export default Footer;

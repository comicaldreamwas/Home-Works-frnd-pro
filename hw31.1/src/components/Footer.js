import React from 'react';
import { useDispatch } from 'react-redux';
import { clearTodos } from '../store/actions';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer>
      <button onClick={() => dispatch(clearTodos())}>Очистити всі завдання</button>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/actions';

function App() {

  const count = useSelector(state => state.count);
 
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;

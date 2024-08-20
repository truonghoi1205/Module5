import React from 'react';
import useIncrement from '../useIncrement';

function Counter1() {
  const [count, increase] = useIncrement(1);

  return (
    <div>
      <h2>Counter1: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default Counter1;
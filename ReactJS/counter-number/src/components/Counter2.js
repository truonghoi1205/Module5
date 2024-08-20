import React from 'react';
import useIncrement from '../useIncrement';

function Counter2() {
  const [count, increase] = useIncrement(2);

  return (
    <div>
      <h2>Counter2: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default Counter2;
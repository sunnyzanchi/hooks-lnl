import React, { useState } from 'react';

const Counter = () => {
  // `useState` returns a "tuple" (just an array in JS)
  // Technically, you could do:
  //
  // const state = useState(123);
  // state[0] // 123
  // state[1] // function
  //
  // but it would be really unergonomic to use, and not very explicit
  //
  // This sets up state in this function
  // Essentially, it's the same as doing
  //
  // state = {
  //  count: 0
  // }
  //
  // in a class component
  // and it automatically gives you a function to easily update it
  //
  // This also makes it easier to have multiple discrete pieces of state,
  // because they're all their own variables and they have their own functions
  // associated with them to update their state.
  const [count, setCount] = useState(0);

  // setCount has two signatures:
  // 1) passing a callback lets you use the existing state to
  // determine the new state
  // 2) passing a value just sets the state to the new value
  const decrement = () => setCount(c => c - 1);
  const increment = () => setCount(c => c + 1);
  const reset = () => setCount(0);

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      {/* You use the state just how you normally would */}
      <p>{count}</p>
    </div>
  );
};

export default Counter;

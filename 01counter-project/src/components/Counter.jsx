import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(
      counter == 20 ? setCounter == 20 : (preCounter) => preCounter + 1
    );
  };

  const removeValue = () => {
    setCounter(counter == 0 ? setCounter == 0 : (preCounter) => preCounter - 1);
  };
  return (
    <>
      <h1>Counter Project!</h1>
      <h3>{counter}</h3>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
    </>
  );
};

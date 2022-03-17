import React, { useState } from "react";

export default function Counter() {
  //siempre debemos utilizar los hooks en el top del componente
  // const state = useState(123);
  // console.log(state);

  // const rgb = [9, 578, 456];
  // console.log(rgb[1]);

  // const [red, green, blue] = [9, 578, 456];
  // console.log(green);

  const [count, setCount] = useState(0);

  const increase = () => {
    console.log("sumando");
    setCount(count + 1);
  };

  const decrease = () => {
    console.log("restando");
    setCount(count - 1);
  };

  const reset = () => {
    console.log("reset");
    setCount(0);
  };

  const addFive = () => {
    console.log("sumando 5");
    setCount(count + 5);
  };

  return (
    <div className='counter-container'>
      <h1>Contador:</h1>
      <h2>{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={addFive}>cinco</button>
    </div>
  );
}

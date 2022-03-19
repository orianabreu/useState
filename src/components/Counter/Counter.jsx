import React, { useState } from "react";
import Button from "../Button/Button";

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
      {/*agrego clase btn (estilos base del comp Button) y 
      clase con estilos propios para cada butón*/}
      <Button onClick={increase} className="btn increase">+</Button>
      <Button onClick={decrease} className="btn decrease">-</Button>
      <Button onClick={reset} className="btn reset">reset</Button>
      <Button onClick={addFive} className="btn five">cinco</Button>
    </div>
  );
}

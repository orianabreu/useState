import React, { useState } from "react";

export default function Form() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    //debugger
    console.log(event);
    setInputValue(event.target.value);
  };

  return (
    <form>
      <h3>Hola {inputValue}</h3>
      <label htmlFor='nombre'>Nombre: </label>
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        id='nombre'
        placeholder='escribe aquí tu nombre'
      />
      <input type='text' />
    </form>
  );
}

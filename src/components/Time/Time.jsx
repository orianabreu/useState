import React, { useState } from "react";
import Button from "../Button/Button";

export default function Time({ texto }) {
  const [localTime, setLocalTime] = useState("Time");

  const date = new Date();
  const año = date.getFullYear();
  const hora = date.toLocaleTimeString();
  console.log(date);
  console.log(año);
  console.log(hora);

  const changeTime = () => {
    //debugger
    setLocalTime(hora);
  };

  return (
    <div>
      <h1>{texto}</h1>

      <h2>{localTime}</h2>
      <Button onClick={changeTime} className="btn getTime">get time</Button>
    </div>
  );
}

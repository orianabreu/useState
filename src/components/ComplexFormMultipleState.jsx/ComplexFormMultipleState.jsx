import React, { useState } from "react";
import Button from "../Button/Button";

export default function ComplexFormMultipleState() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`enviando datos: ${name}, ${lastName}, ${email}`);
      setName("");
      setLastName("");
      setEmail("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Introduce tus datos:</h3>
      <p>Hola {name} {lastName}</p>
      <p>{email}</p>
      <input
        type='text'
        placeholder='nombre'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='apellido'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type='text'
        placeholder='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button className="btn registro">registrarse</Button>
    </form>
  );
}

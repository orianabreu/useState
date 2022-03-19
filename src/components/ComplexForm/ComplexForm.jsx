import React, { useState } from "react";

export default function ComplexForm() {
  //la función del state debe devolver el mismo tipo de dato que le estamos pasando como
  //valor inicial. String -> string. Objeto -> objeto........
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);

    // const name = e.target.name;
    // const value = e.target.value;

    const { name, value } = e.target;

    setUser((valorPrevio) => ({
      //valorPrevio es el objeto user
        ...valorPrevio,
        [name]: value,
        //console.log(prevValue);
        // if (name === "firstName") {
        //     return {
        //         firstName: value,
        //         lastName: prevValue.lastName,
        //         email: prevValue.email,
        //     }
        // } else if (name === "lastName") {
        //     return {
        //         firstName: prevValue.firstName,
        //         lastName: value,
        //         email: prevValue.email,
        //     }
        // } else if (name === "email") {
        //     return {
        //         firstName: prevValue.firstName,
        //         lastName: prevValue.lastName,
        //         email: value,
        //     }
        // } 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`enviando datos: ${firstName}, ${lastName}, ${email}`);
  };

  const { firstName, lastName, email } = user; //destructuring de user

  return (
    <div>
      <p>Complex Form:</p>
      <form onSubmit={handleSubmit}>
        <h3>Introduce tus datos:</h3>
        <p>
          Hola {firstName} {lastName}
        </p>
        <p>{email}</p>
        <input
          type='text'
          placeholder='nombre'
          value={firstName}
          name='firstName'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='apellido'
          value={lastName}
          name='lastName'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='email'
          value={email}
          name='email'
          onChange={handleChange}
        />
        <button>registrarse</button>
      </form>
    </div>
  );
}

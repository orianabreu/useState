import React, { useState } from "react";

export default function Names() {
  const [name, setName] = useState("Alfredo");
  const [shown, setShown] = useState(false);

  const changeName = () => {
    if (name === "Alfredo") {
      setName("Sergio");
    } else if (name === "Sergio") {
      setName("Alfredo");
    }
  };

  const styles = {
    color: name === "Alfredo" ? "blue" : "green",
  };

  return (
    <div className='names-container'>
      {shown ? (
        <>
          <h3 style={styles}>Hola, me llamo {name}</h3>
          <button onClick={changeName}>cambiar nombre</button>
          <div>
            <button onClick={() => setShown(!shown)}>mostrar componente</button>
          </div>
        </>
      ) : (
        <div>
          <button onClick={() => setShown(!shown)}>mostrar componente</button>
        </div>
      )}
    </div>
  );
}

import React from "react";

export default function Button(props) {
  return (
    <>
      {/*usamos props.children para poder renderizar contenido dinámico dentro 
      de la etiqueta cada vez que llamamos al componente en otras árreas de la app.
      Hacemos spread de props para poder incluir atributos/eventos dentro del componente*/}
      <button {...props}>{props.children}</button>
    </>
  );
}

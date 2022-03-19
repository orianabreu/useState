const usuario = {
    nombre: "Oriana", //par clave(propiedad) - valor / key-value
}

usuario.apellido = "Abreu"; // dot notation
//usuario.2apellido = "" error no puedo empezar las propiedades de un obj con numeros

usuario["direccion"] = "Madrid"; // bracket notation
usuario["2apellido"] = "Vilacha"; // me permite añadir números delante de las propiedades
usuario["numero de la suerte"] = 8;

console.log(usuario);
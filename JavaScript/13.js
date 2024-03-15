/*
Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales.
*/

let palabra = prompt("Ingrese una palabra");

function sinVocales(palabra) {
  let regex = /[aeiouáéíóú]/gi;
  let nuevaPalabra = palabra.replace(regex, "-");
  console.log(nuevaPalabra);
}

sinVocales(palabra);

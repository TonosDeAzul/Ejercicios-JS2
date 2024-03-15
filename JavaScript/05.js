/*
Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado en la consola.
*/

let palabra = prompt("Ingrese la palabra");

function silabas(palabra) {
  const contar_silabas = /([aeiouáéíóú])(?:[aeiouyáéíóú]?)(?![aeiouáéíóú])/gi;
  let cantidadSilabas = palabra.match(contar_silabas);
  console.log(cantidadSilabas.length);
}

silabas(palabra);

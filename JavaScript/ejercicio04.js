/*
Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
cortas menores de 5 caracteres).
*/

let palabra = prompt("Ingrese una palabra");

function calcularLongitudPalabra(palabra) {
  palabra.length < 5
    ? console.log(`La palabra es corta`)
    : console.log(`La palabra es larga`);
}

calcularLongitudPalabra(palabra);

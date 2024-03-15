/*
Crea una función que tome un número como argumento y devuelva la cadena si el
numero es par o impar.
*/

let num = parseInt(prompt("Ingrese un número"));

function numParOImpar(num) {
  num % 2 != 0
    ? console.log(`El número ${num} es impar`)
    : console.log(`El número ${num} es par`);
}

numParOImpar(num);

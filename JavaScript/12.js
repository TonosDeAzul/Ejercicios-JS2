/*
Implemente una función que sume dos números y devuelva su suma en binario, el número binario devuelto debe ser una cadena.
*/

let num = parseInt(prompt("Ingrese un número"));

function decimalBinario(num) {
  let residuo;
  let numBinary = [];

  if (num === 0) {
    console.log("0");
  } else {
    while (num > 0) {
      residuo = num % 2;
      numBinary.push(residuo);
      num = Math.floor(num / 2);
    }
    console.log(numBinary.reverse().join(""));
  }
}

decimalBinario(num);

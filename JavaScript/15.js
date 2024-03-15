/*
Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si este numero es par o impar.
*/

(function imparOPar() {
  let num = Math.floor(Math.random() * (11 - 1) + 1);
  num % 2 != 0 ? console.log(`${num} es impar`) : console.log(`${num} es par`);
})();

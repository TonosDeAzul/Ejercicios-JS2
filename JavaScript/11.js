/*
Obtén una serie de número y devuelve la suma de todos los números positivos, si no tenemos números positivos la sume debe devolver 0.
*/

let nums = [1, 2, 3, -4, 5, 6, -7];

function sumaNumsPositivos(serie) {
  let sum = 0;
  for (let i = 0; i < serie.length; i++) {
    if (serie[i] < 0) {
      continue;
    } else {
      sum += serie[i];
    }
  }
  console.log(`La suma de los números es: ${sum}`);
}

sumaNumsPositivos(nums);

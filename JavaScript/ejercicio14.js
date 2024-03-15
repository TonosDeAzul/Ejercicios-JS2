/*
Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.
*/

let nums = [1, 2, 3, -4, 5, 6, -7];

function inversoAditivo(numeros) {
  let newNums = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
      numeros[i] = numeros[i] * -1;
      newNums.push(numeros[i]);
    } else {
      numeros[i] = numeros[i] * -1;
      newNums.push(numeros[i]);
    }
  }

  console.log(newNums);
}

inversoAditivo(nums);

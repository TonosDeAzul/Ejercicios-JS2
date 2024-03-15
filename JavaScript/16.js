/*
Crea una función que convierta números del 0 al 5 en su representación textual, por ejemplo: “cero”, “uno”, “dos”, “tres” etc.
*/

let nums = [0, 1, 2, 3, 4, 5];

function numsTextual(numeros) {
  let newNums = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 0) {
      newNums.push("cero");
    }
    if (numeros[i] === 1) {
      newNums.push("uno");
    }
    if (numeros[i] === 2) {
      newNums.push("dos");
    }
    if (numeros[i] === 3) {
      newNums.push("tres");
    }
    if (numeros[i] === 4) {
      newNums.push("cuatro");
    }
    if (numeros[i] === 5) {
      newNums.push("cinco");
    }
  }
  console.log(newNums);
}

numsTextual(nums);

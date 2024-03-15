/*
Crea una función de nos devuelva el elemento mayor de un arreglo de números.
*/

let nums = [10, 23, 47, 44];

function numMayor(num) {
  let mayor = num[0];
  for (let i = 1; i < num.length; i++) {
    if (mayor < num[i]) {
      mayor = num[i];
    }
  }
  console.log(`El número mayor es ${mayor}`);
}

numMayor(nums);

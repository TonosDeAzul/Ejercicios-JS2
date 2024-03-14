/*
Crea una función que reciba dos números como parámetros y devuelva el mayor de
ellos.
*/

let num1 = parseFloat(prompt("Ingrese el primer número"));
let num2 = parseFloat(prompt("Ingrese el segundo número"));

function numMayor(num1, num2){
    if(num1 < num2){
        console.log(`El número ${num2} es el mayor`);
    } else{
        console.log(`El número ${num1} es el mayor`);
    }
}

numMayor(num1, num2);
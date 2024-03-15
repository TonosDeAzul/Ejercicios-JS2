/*
Crea una función que tome una cadena como parámetro y devuelva la cadena en orden inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’.
*/

let palabra = prompt("Ingrese una palabra");

function invertirCadena(cadena){
    let almacenCadena = "";
    for(let i = 0; i < cadena.length; i++){
        almacenCadena += cadena[cadena.length - (i + 1)];
    }
    console.log(almacenCadena);
}

invertirCadena(palabra);
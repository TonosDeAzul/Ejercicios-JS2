/*
Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se aceptan números, la función debe devolver true si el pin es valido y false si no es válido.
*/

let contrasena = prompt("Ingrese su PIN (solo números)");

function verificar(pin){
    let regex = /^[\d]{4,6}$/;
    console.log(regex.test(pin));
}

verificar(contrasena);
/*
Genera un patrón de asteriscos en forma de pirámide.
*/

let altura = parseInt(prompt("Ingrese la altura para la pirámide"));

function piramide(altura) {
  let piramide = "";
  for (let i = 1; i <= altura; i++) {
    console.log(`${(piramide += "*")}`);
  }
}

piramide(altura);

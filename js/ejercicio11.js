let kilometrostex = prompt("Ingrese numero de kilometros recorridos: ");
let kilometros = Number(kilometrostex);

let litrostex = prompt("Ingrese cantidad de litros consumidos: ");
let litros = Number(litrostex);

let consumo = (litros / kilometros); 

console.log(`El consumo de combustible por kilometro es: ${consumo} l/km`);
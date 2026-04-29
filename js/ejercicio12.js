// --- EJERCICIO 12 ---
// Importamos la herramienta para leer desde la terminal
const readline = require('readline');

// Configuramos la "interfaz" de entrada y salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definimos la función flecha para la lógica
const verificarParidad = (numero) => {
    const num = parseInt(numero); // Convertimos el texto a número
    if (num % 2 === 0) {
        console.log(`El número ${num} es PAR.`);
    } else {
        console.log(`El número ${num} es IMPAR.`);
    }
};

// Pedimos el dato al usuario
rl.question('Por favor, ingresá un número: ', (respuesta) => {
    // Llamamos a nuestra función con lo que el usuario escribió
    verificarParidad(respuesta);

    // Cerramos la interfaz para que el programa termine
    rl.close();
});
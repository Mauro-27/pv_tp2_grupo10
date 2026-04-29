// --- EJERCICIO 18 ---
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Definición de la función flecha según el enunciado
const calcularMayor = (numero1, numero2) => {
    // Convertimos los textos a números reales
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    // Validamos que sean números válidos
    if (isNaN(n1) || isNaN(n2)) {
        console.log("Error: Uno de los valores ingresados no es un número válido.");
    } else if (n1 > n2) {
        console.log(`El primer número (${n1}) es mayor que el segundo (${n2}).`);
    } else if (n2 > n1) {
        console.log(`El segundo número (${n2}) es mayor que el primero (${n1}).`);
    } else {
        console.log(`Ambos números son iguales: ${n1} y ${n2}.`);
    }
};

// Proceso para solicitar los datos al usuario
rl.question('Ingresá el primer número: ', (res1) => {
    rl.question('Ingresá el segundo número: ', (res2) => {
        
        // Llamamos a la función con los datos ingresados
        calcularMayor(res1, res2);

        // Cerramos la interfaz
        rl.close();
    });
});
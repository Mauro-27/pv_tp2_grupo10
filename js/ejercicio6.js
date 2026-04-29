// --- EJERCICIO 6 ---
// 1. Creamos el array con las edades
const edades = [18, 22, 28, 30, 15, 42, 12, 35];

// 2. Definimos la función flecha para procesar las edades
const procesarEdades = (listaDeEdades) => {
    let sumaTotal = 0;

    console.log("--- Lista de Edades ---");

    // Recorremos el array
    listaDeEdades.forEach((edad, index) => {
        console.log(`Edad ${index + 1}: ${edad} años`);
        sumaTotal += edad; // Vamos sumando cada edad al total
    });

    // Calculamos el promedio
    const promedio = sumaTotal / listaDeEdades.length;

    console.log("-----------------------");
    console.log(`La suma total es: ${sumaTotal}`);
    console.log(`El promedio de las edades es: ${promedio}`);
};

// 3. Ejecutamos la función pasándole nuestro array
procesarEdades(edades);
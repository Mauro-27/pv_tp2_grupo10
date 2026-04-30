// --- EJERCICIO 2 ---
// Definimos la función flecha para los impares
const mostrarImpares = (cantidad) => {
    let contador = 0;
    let numero = 1;

    console.log(`--- Listado de los primeros ${cantidad} números impares ---`);

    while (contador < cantidad) {
        // Mostramos el resultado 
        console.log(`Número impar encontrado: ${numero}`);
        
        // Saltamos al siguiente impar (sumando 2)
        numero += 2;
        contador++;
    }
};

// Ejecutamos la función
mostrarImpares(10);

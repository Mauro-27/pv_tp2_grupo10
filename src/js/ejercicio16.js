const numInicial = parseInt(prompt("Ingrese el numero inicial;"));
const numFinal = parseInt(prompt("Ingrese el numero final;"));
if (numInicial >= numFinal) {
    document.write("Error: El número inicial debe ser menor o igual que el final.");
}
else{
    let suma = 0;
    for (let i = numInicial; i <= numFinal; i++) {
    suma += i;
    }
    document.write("numeros ingresados: "+numInicial+" y "+numFinal);
    document.write("  resultado de la suma: "+suma);
}
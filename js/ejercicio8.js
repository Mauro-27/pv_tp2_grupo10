const notas = [2,6,4,7,3,5,6,10,7,9];
console.log("------------   NOTAS   ------------");
for(let i=0;i<notas.length;i++){
    console.log("Nota n°"+(i+1)+": "+notas[i]);
}

let contadorA = 0;
console.log("------------   APROBADOS   ------------");
for(let i=0;i<notas.length;i++){
    if(notas[i]>=6){
        console.log("Nota n°"+(i+1)+": "+notas[i]);
        contadorA+=1
    }
}

console.log("------------   DESAPROBADOS   ------------");
for(let i=0;i<notas.length;i++){
    if(notas[i]<6){
        console.log("Nota n°"+(i+1)+": "+notas[i]);
    }
}

console.log("------------   ESTADISTICAS   ------------");
let promedio = 0;
for(let i=0;i<notas.length;i++){
    promedio = promedio+notas[i]
}
promedio = promedio / notas.length;
console.log("Promedio es: "+promedio);
console.log("Cantidad de aprobados: "+contadorA);
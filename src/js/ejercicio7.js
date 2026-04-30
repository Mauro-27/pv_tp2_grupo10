// ejercicio 7 Gabriel Chauque

const nombres = ["Martin","Jesus","Rex","Gabriel","Daniel","Alex"];
let masLargo = "";
for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
    if (nombres[i].length > masLargo.length){
        masLargo = nombres[i];
    }
}

console.log(`El nombre mas largo es: ${masLargo}`);
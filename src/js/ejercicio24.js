import { actualizarSeleccion } from "../services/serviceEjercicio24.js";

document.addEventListener('DOMContentLoaded', () => {

    const botonesRadio = document.querySelectorAll('input[name="lenguaje"]');
    const parrafoReflejo = document.querySelector('#textoReflejado');

    botonesRadio.forEach( boton => {
        
        boton.addEventListener('change', (evento) => {
            
            const valorElegido = evento.target.value;

            actualizarSeleccion(valorElegido, parrafoReflejo);
            
        });
        
    });

});
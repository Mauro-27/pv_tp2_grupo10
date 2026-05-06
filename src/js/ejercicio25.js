import { obtenerColorAleatorio } from '../services/serviceEjercicio25.js';

const boton = document.getElementById('btnCambiarColor');

boton.addEventListener('click', () => {
    const nuevoColor = obtenerColorAleatorio();
    
    // Cambiamos el color de fondo de toda la página
    document.body.style.backgroundColor = nuevoColor;
    
    // Mensaje en consola 
    console.log(`%c Nuevo color aplicado: ${nuevoColor}`, `color: ${nuevoColor}; font-weight: bold;`);
});
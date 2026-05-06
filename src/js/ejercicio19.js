import { cambiarTexto } from "../services/serviceEjercicio19.js";

const parrafo = document.getElementById('texto-principal');
const boton = document.getElementById('btn');

boton.addEventListener('click', () => {
    cambiarTexto(parrafo, "¡Se cambio el texto con exito!");
});
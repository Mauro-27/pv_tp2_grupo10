import { actualizarTexto } from '../services/serviceEjercicio22.js';

const input = document.querySelector('#texto');
const parrafo = document.querySelector('#resultado');

input.addEventListener('input', () => {
    actualizarTexto(input, parrafo);
});
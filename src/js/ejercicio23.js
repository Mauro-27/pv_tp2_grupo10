import { procesarEntrada } from '../services/serviceEjercicio23.js';

const input = document.querySelector('#campoTexto');
const visor = document.querySelector('#visor');
const reflejo = document.querySelector('#resultado');

input.addEventListener('input', () => {
    procesarEntrada(input, visor, reflejo);
});
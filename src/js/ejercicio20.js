import { mostrarDatos } from "../services/serviceRochaErika.js";

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const libreta = document.querySelector("#libreta");
const boton = document.querySelector("#btnEnviar");

boton.addEventListener("click", () => {
    mostrarDatos(nombre.value, apellido.value, libreta.value);
});
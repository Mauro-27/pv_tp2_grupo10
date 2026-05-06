import { mostrarDatos } from "../services/serviceEjercicio20.js";

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const libreta = document.querySelector("#libreta");
const boton = document.querySelector("#btnEnviar");

boton.addEventListener("click", () => {

    const resultado = document.querySelector("#resultado");

    resultado.innerHTML = mostrarDatos(
        nombre.value,
        apellido.value,
        libreta.value
    );

});
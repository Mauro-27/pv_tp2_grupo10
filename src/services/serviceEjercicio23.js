
export const procesarEntrada = (input, contenedor, parrafo) => {
    const valor = input.value;

    parrafo.textContent = valor;

    if (valor.length > 20) {
        contenedor.style.backgroundColor = "#F50A49";
        contenedor.style.color = "white";
    } else {
        contenedor.style.backgroundColor = "transparent";
        contenedor.style.color = "#222";
    }
};
export const actualizarSeleccion = (valorSeleccionado, parrafoDestino) => {
    
    
    parrafoDestino.textContent = `Seleccionaste: ${valorSeleccionado}`;
    parrafoDestino.style.opacity = '1';

    console.log(`El usuario ha seleccionado la opción: ${valorSeleccionado}`);
    
};
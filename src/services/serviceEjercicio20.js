export const mostrarDatos = (nombre, apellido, libreta) => {
    return `
        <h3>Los datos ingresados son:</h3>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Apellido:</b> ${apellido}</p>
        <p><b>Libreta Universitaria:</b> ${libreta}</p>
    `;
};

import { sincronizarCapital } from "../services/serviceEjercicio21.js";

document.addEventListener('DOMContentLoaded', () => {

    const selecPaises = document.querySelector('#paises');
    const selecCapitales = document.querySelector('#capitales');
   
    selecPaises.addEventListener('change', () => {
        sincronizarCapital(selecPaises, selecCapitales);
    });

});
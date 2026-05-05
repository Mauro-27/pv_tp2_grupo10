export const sincronizarCapital = (selecPaises, selecCapitales) => {
    const valorPais = selecPaises.value;

    selecCapitales.value = valorPais;

    const textoPais = selecPaises.options[selecPaises.selectedIndex].text;
    const textoCapital = selecCapitales.options[selecCapitales.selectedIndex].text;

    console.log(`Selección actual -> País: ${textoPais} | Capital: ${textoCapital}`);
};
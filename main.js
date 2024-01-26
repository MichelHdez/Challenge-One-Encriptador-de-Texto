const ingresarTexto = document.getElementById('ingresarTexto');
const botonEncriptar = document.getElementById('botonEncriptar');
const botonDesencriptar = document.getElementById('botonDesencriptar');
const botonCopiar = document.getElementById('botonCopiar');
const mensajeFinal = document.getElementById('mensajeFinal');
const munheco = document.getElementById('munheco');
const mensajeInfo = document.getElementById('mensajeInfo');
const right = document.getElementById('right');

let vocales = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

const reemplazar = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    munheco.classList.add('oculto');
    ingresarTexto.value = '';
    mensajeInfo.style.display = 'none';
    botonCopiar.style.display = 'block';
    right.classList.add('ajustar');
    mensajeFinal.classList.add('ajustar');
};

const reset = () => {
    mensajeFinal.innerHTML = '';
    munheco.classList.remove('oculto');
    mensajeInfo.style.display = 'block';
    botonCopiar.style.display = 'none';
    right.classList.remove('ajustar');
    mensajeFinal.classList.remove('ajustar');
    ingresarTexto.focus();
};

botonEncriptar.addEventListener('click', () => {
    const texto = ingresarTexto.value.toLowerCase();
    if (texto != '') {
        function encriptar(newText) {
            for (let i = 0; i < vocales.length; i++) {
                if (newText.includes(vocales[i][0])) {
                    newText = newText.replaceAll(vocales[i][0], vocales[i][1]);
                }
            }
            return newText;
        }
    } else {
        alert('Ingrese un texto a encriptar');
        reset();
    }
    reemplazar(encriptar(texto));
});

botonDesencriptar.addEventListener('click', () => {
    const texto = ingresarTexto.value.toLowerCase();
    if (texto != '') {
        function desencriptar(newText) {
            for (let i = 0; i < vocales.length; i++) {
                if (newText.includes(vocales[i][1])) {
                    newText = newText.replaceAll(vocales[i][1], vocales[i][0]);
                }
            }
            return newText;
        }
        reemplazar(desencriptar(texto));
    } else {
        alert('Ingrese un texto a desencriptar');
        reset();
    }
});

botonCopiar.addEventListener('click', () => {
    let texto = mensajeFinal;
    /*Funciona pero no es compatible con dispositivos móviles
    navigator.clipboard.writeText(texto.value);*/
    texto.select();
    document.execCommand('copy');
    alert('El texto ha sido copiado');
    reset();
});
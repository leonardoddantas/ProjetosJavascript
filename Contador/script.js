const numeroHTML = document.querySelector('#numero');
const btnDiminuir = document.querySelector('#diminuir');
const btnResetar = document.querySelector('#resetar');
const btnAumentar = document.querySelector('#aumentar');

function Aumentar() {
    numeroHTML.textContent = parseInt(numeroHTML.textContent) + 1;
}

function Diminuir() {
    numeroHTML.textContent = parseInt(numeroHTML.textContent) - 1;
}

btnAumentar.addEventListener('click', Aumentar);
btnDiminuir.addEventListener('click', Diminuir);
btnResetar.addEventListener('click', () => numeroHTML.textContent = 0);
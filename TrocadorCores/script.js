function gerarCor() {

    const caracteres = '0123456789ABCDEF';
    let cor = '#';
    let i;

    for(i = 0; i < 6; i++) {
        cor += caracteres[Math.floor(Math.random() * 16)];
    }

    return cor;
}

const containerHTML = document.querySelector('.container');
const buttonHTML = document.querySelector('#btnGerarCor');
const spanHTML = document.querySelector('#codigoCor');

buttonHTML.addEventListener('click', () => {
    const corGerada = gerarCor();
    containerHTML.style.backgroundColor = corGerada;
    spanHTML.innerText = corGerada;
});

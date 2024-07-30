const dec = document.querySelector('#boton2');
const inc = document.querySelector('#boton1');
const num = document.querySelector('.numero');

let number = 0

dec.addEventListener('click', () => {
    number--;
    mostrarNum();
    num.classList.add('animacion2');
    setTimeout(() => num.classList.remove('animacion2'), 100);
});

inc.addEventListener('click', () => {
    number++;
    mostrarNum();
    num.classList.add('animacion');
    setTimeout(() => num.classList.remove('animacion'), 100);
});

function mostrarNum(){
    corDoTexto(number);
    num.innerHTML = `${number}`;
}

function corDoTexto(number){
    if (number > 0){
        num.classList.remove('negativo')
        num.classList.add('positivo')
    } else if (number < 0){
        num.classList.remove('positivo')
        num.classList.add('negativo')
    } else {
        num.classList.remove('positivo')
        num.classList.remove('negativo')
    }
}

mostrarNum();
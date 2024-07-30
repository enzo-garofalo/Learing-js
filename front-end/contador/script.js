const dec = document.querySelector('#boton2');
const inc = document.querySelector('#boton1');
const num = document.querySelector('#numero');

let number = 0

dec.addEventListener('click', () => {
    number--;
    mostrarNum();
});

inc.addEventListener('click', () => {
    number++;
    mostrarNum();
});

function mostrarNum(){
    num.innerHTML = `${number}`;
}

mostrarNum();
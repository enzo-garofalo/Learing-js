const botao = document.getElementById('botao');

botao.addEventListener('click', () => {
    alert('Eita mundo bão!!');
});

//-------------------------------------------------//

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = event.target.elements.nome.value;
    alert(`Olá, ${nome}!`);
});

//-------------------------------------------------//

const input = document.getElementById('input');

input.addEventListener('keydown', (event) =>{
    console.log(`Tecla Pressionada: ${event.key}`)
});

//-------------------------------------------------//

const campo = document.getElementById('meuCampo');

campo.addEventListener('focus', (event) =>{
    console.log('O campo ganhou foco');
});

campo.addEventListener('blur', (event) =>{
    console.log('O campo perdeu foco');
});
//Crie uma variável contendo uma frase.
//Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
const frase = 'Vai corinthians!!';
console.log(`A frase tem ${frase.length} caracteres!`);
console.log(frase.toUpperCase());
console.log('-----------------------------------------');

//Declare duas variáveis, uma inicializada com valor null 
//e outra que não recebe atribuição (resultando em undefined). 
//Exiba os valores no console.
let nulo = null;
let vazio;
console.log(nulo);
console.log(vazio);
console.log('-----------------------------------------');

// Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes 
// tipos de dados (number, string, boolean)
// em uma única string e exiba o resultado no console.
let nome = 'Enzo'
let idade = 20
let vivo = true

combinacao = `${nome} de ${idade} anos está `
if(vivo){
    combinacao += `VIVO!`
}else{
    combinacao += `MORTO!`
}
console.log(combinacao);
console.log('-----------------------------------------');

//Crie uma variável numérica e uma string. 
//Faça a conversão da variável numérica para string e da string para número. 
//Exiba os tipos de dados resultantes no console.
let numero = String(5)
let texto = Number('5')
console.log(`Número para string:`, numero);
console.log(`String para número:`, texto);
console.log('-----------------------------------------');
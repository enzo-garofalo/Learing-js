console.log(fatorial(10));
let nome = 'Enzo'
exibeNome(nome);


function exibeNome(nome){
console.log(`Olá, ${nome}!`);
}


function fatorial(num){
    if (num === 1){
        return 1;
    }else{
        return num * fatorial(num-1);
    }
}
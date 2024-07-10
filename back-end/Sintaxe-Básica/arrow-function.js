// Forma moderna de declarar variável
const reprovou = (notaFinal, faltas) =>{
    if(notaFinal < 7 && faltas > 4){
        return true;
    }else{
        return false;
    }
}

const exibeNome = (nome) => nome;

console.log(reprovou(5,6));
console.log(reprovou(7,6));
console.log(exibeNome('Enzo'));
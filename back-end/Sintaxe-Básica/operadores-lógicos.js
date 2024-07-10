const notaFinal = 6;
const faltas = 5;
const advertencias = 0

if(notaFinal < 7 && faltas > 4){
    console.log('Aluno Reprovado!');
}else{
    console.log('O aluno não foi reprovado por falta');
}

if(faltas <= 2 && !advertencias){
    console.log('Aluno Recebeu Bonûs!');
}else{
    console.log('O aluno não Recebeu Bonûs...');
}

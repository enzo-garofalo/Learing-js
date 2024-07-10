const aprovado = true;

if(aprovado === true){
    console.log('Aprovado');
}
// Ele é dado como verdadeiro independente do tipo
if('0'== 0){
    // Output:
    console.log('Passou na comparação');
}else{
    console.log('não passou na comparação');
}

// Ele verifica se os valores são iguais e do mesmo tipo
if('0'=== 0){
    console.log('Passou na comparação');
}else{
    // Output:
    console.log('não passou na comparação');
}
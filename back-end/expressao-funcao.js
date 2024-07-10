const reprovou = function(notaFinal, faltas){
    if(notaFinal < 7 && faltas > 4){
        return true;
    }else{
        return false;
    }
}

console.log(reprovou(5,6));
console.log(reprovou(7,6));
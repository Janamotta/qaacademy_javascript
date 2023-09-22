const { func } = require("assert-plus");

function somar(){
    const a = 10;
    const b = 20;
    const resultado = a+b;
    console.log(resultado);
}

    somar()

    function subtrair(){
        const a = 60;
        const b = 20;
        const resultado = a-b;
        console.log(resultado);
    }
    
        subtrair()

    
function    subtracaoComParametro(a,b){
    const soma = a-b
    console.log(soma)
}

    subtracaoComParametro(15,25)


function    somaComRetorno(a,b,i){
    const   somatoria = a+b+i;
    return  somatoria;
}

console.log(somaComRetorno(10,20,30))


function    subtracaoComRetorno(a,b,i){
    const   subtrair = a-b-i;
    return  subtrair;
}

console.log(subtracaoComRetorno(10,20,30))];

// Cire um método que retorne a multiplicação de 2 valores e imprima o retorno
function mult(a,b){
    const mult = a*b;
    return  mult;
    console.log(mult(52*10));
}

// Crie um método que retorne uma frase e imprima o retorno
function    imprimirFrase(frase){
    return frase;
}
console.log(imprimirFrase("o amor é lindo"));

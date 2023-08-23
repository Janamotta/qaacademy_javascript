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

console.log(subtracaoComRetorno(10,20,30))
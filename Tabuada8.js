// 2 - calcular e exibir a tabuada de um número entre 1 e 10
let num1 = 8;
//8 é o número da tabuada que eu quero mostrar é a variável 
let i = 0;

while(i <= 10){
    let mult = num1 * i;
    console.log(`${num1}X${i} = ${mult}`);
    i++;
}
/*
    8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
    e escreve-los em ordem crescente.
*/


let primeiroValor = 1;
let segundoValor = 2;



function ordenar(primeiroValor, segundoValor) {
    if (primeiroValor !== segundoValor) {
        let maior;
        let menor;

        if(primeiroValor > segundoValor){
            maior = primeiroValor;
            menor = segundoValor
        } else{
            maior = segundoValor;
            menor = primeiroValor;
        }

        console.log(`Em ordem crescente, os valores são apresentados assim : [${menor}, ${maior}]`)
    } else {
        console.log("Valores iguais não serão aceitos!")
    }
}

ordenar(primeiroValor, segundoValor);
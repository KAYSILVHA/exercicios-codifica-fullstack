/*
    Utilizar somente while do exercício 14 ao 16
    
    14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
    a média aritmética desses números.
*/


function calcularMediaDecimal(numeros) {
    let soma = 0;
    let quantidade = 0;
    let indice = 0;

    while (indice < numeros.length) {
        let numero = numeros[indice];
        soma += numero;
        quantidade++;
        indice++;
    }

    if (quantidade > 0) {
        let media = soma / quantidade;
        console.log("A média aritmética dos números é: " + media.toFixed(2));
    } else {
        console.log("Nenhum número foi fornecido para calcular a média.");
    }
}

let numeros = [10.5, 8.3, 15.2, 12.7];
calcularMediaDecimal(numeros);
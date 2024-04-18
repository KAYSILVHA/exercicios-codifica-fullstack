/*
    Utilizar somente while do exercício 14 ao 16

    16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
    Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/


function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    let divisor = 2;
    while (divisor <= Math.sqrt(numero)) {
        if (numero % divisor === 0) {
            return false;
        }
        divisor++;
    }

    return true;
}

function imprimir50PrimosMaiorQue100() {
    let quantidadePrimos = 0;
    let numeroAtual = 101;

    while (quantidadePrimos < 50) {
        if (ehPrimo(numeroAtual)) {
            console.log(numeroAtual);
            quantidadePrimos++;
        }
        numeroAtual++;
    }
}

imprimir50PrimosMaiorQue100();
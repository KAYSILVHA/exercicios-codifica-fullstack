/*
    11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
    cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
    ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
    NEGATIVO.
*/

function verificarParOuImpar(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];

        if (numero > 0) {
            if (numero % 2 === 0) {
                console.log(numero + " é PAR.");
            } else {
                console.log(numero + " é ÍMPAR.");
            }
        } else if (numero < 0) {
            console.log("Valor negativo encontrado. Encerrando o programa.");
            break;
        } else {
            console.log("Valor nulo encontrado. Encerrando o programa.");
            break;
        }
    }
}

let numeros = [5, 10, -15, 20, 25, 0, 35, 40, 45, 50];
verificarParOuImpar(numeros);
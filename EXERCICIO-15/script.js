/*
    Utilizar somente while do exercício 14 ao 16

    15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
    que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
    respectivos.
*/


function calcularMediaPonderada(numeros, pesos) {
    let somaProdutos = 0;
    let somaPesos = 0;
    let indice = 0;

    while (indice < numeros.length) {
        let numero = numeros[indice];
        let peso = pesos[indice];
        somaProdutos += numero * peso;
        somaPesos += peso;
        indice++;
    }

    if (somaPesos > 0) {
        let mediaPonderada = somaProdutos / somaPesos;
        console.log("A média ponderada dos números é: " + mediaPonderada.toFixed(2));
    } else {
        console.log("Nenhum número e peso foram fornecidos para calcular a média ponderada.");
    }
}

let numeros = [10.5, 8.3, 15.2, 12.7];
let pesos = [1, 2, 3, 4];
calcularMediaPonderada(numeros, pesos);
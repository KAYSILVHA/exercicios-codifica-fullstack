/*
    9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
    do mesmo, conforme a tabela.
*/


let codigoOrigem = 1;


function regiao(codigoOrigem) {
    switch (true) {
        case codigoOrigem == 1:
            console.log("Sul");
            break;

        case codigoOrigem == 2:
            console.log("Norte");
            break;

        case codigoOrigem == 3:
            console.log("Leste");
            break;

        case codigoOrigem == 4:
            console.log("Oeste");
            break;

        case codigoOrigem == 5 || codigoOrigem == 6:
            console.log("Nordeste");
            break;

        case codigoOrigem == 7 || codigoOrigem == 8 || codigoOrigem == 9:
            console.log("Sudeste");
            break;

        case codigoOrigem >= 10 && codigoOrigem <= 20:
            console.log("Centro-Oeste");
            break;
        case codigoOrigem >= 25 && codigoOrigem <= 50:
            console.log("Nordeste");
            break;

        default:
            console.log("Produto inválido");
            return;

    }
}

regiao(codigoOrigem);
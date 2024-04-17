/*
    2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
    votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
    em relação ao total de eleitores.
*/


let quantidadeDeEleitores = 200;
let quantidadeDeVotosBrancos = 10;
let quantidadeDeVotosNulos = 20;
let quantidadeDeVotosValidos = 160;

function calcularPercentual(quantidadeDeEleitores, quantidadeDeVotosBrancos, quantidadeDeVotosNulos, quantidadeDeVotosValidos) {
    let totalVotos = quantidadeDeVotosBrancos + quantidadeDeVotosNulos + quantidadeDeVotosValidos;
    
    let percBrancos = (quantidadeDeVotosBrancos / quantidadeDeEleitores) * 100;
    let percNulos = (quantidadeDeVotosNulos / quantidadeDeEleitores) * 100;
    let percValidos = (quantidadeDeVotosValidos / quantidadeDeEleitores) * 100;

    console.log("Percentual de votos brancos: " + percBrancos.toFixed(2) + "%");
    console.log("Percentual de votos nulos: " + percNulos.toFixed(2) + "%");
    console.log("Percentual de votos válidos: " + percValidos.toFixed(2) + "%");
}

calcularPercentual(quantidadeDeEleitores, quantidadeDeVotosBrancos, quantidadeDeVotosNulos, quantidadeDeVotosValidos);
/*
    4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
    calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
    aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
    aprovação).
*/


let primeiraNota = 7;
let segundaNota = 2;

function realizarOperacoes(primeiraNota, segundaNota) {

    let media = (primeiraNota + segundaNota) / 2
    console.log("Média: " + media);

    if (media >= 6) {
        console.log("Parabéns! Você foi aprovado(a)!");
    }
}

realizarOperacoes(primeiraNota, segundaNota);
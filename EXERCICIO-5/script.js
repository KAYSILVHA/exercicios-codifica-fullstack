/*
    5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
    média calculada seja menor que 6,0
*/


let primeiraNota = 7;
let segundaNota = 2;

function realizarOperacoes(primeiraNota, segundaNota) {

    let media = (primeiraNota + segundaNota) / 2
    console.log("Média: " + media);

    if (media >= 6) {
        console.log("Parabéns! Você foi aprovado(a)!");
    } else {
        console.log("Infelizmente você reprovou! Estude mais");
    }


}

realizarOperacoes(primeiraNota, segundaNota);
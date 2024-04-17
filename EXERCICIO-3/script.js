/*
    3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
        ● Some 25 ao primeiro inteiro;
        ● Triplique o valor do segundo inteiro;
        ● Modifique o valor do terceiro inteiro para 12% do valor original;
        ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
        dos primeiros três inteiros.
*/



let primeiro = 10;
let segundo = 10;
let terceiro = 10;
let quarto;

function realizarOperacoes(primeiro, segundo, terceiro, quarto) {
    
    primeiro += 25;
    segundo *= 3;
    terceiro = (terceiro * 12)/100;
    quarto = primeiro+ segundo+terceiro

    console.log("Primeiro: " + primeiro);
    console.log("Segundo: " + segundo);
    console.log("Terceiro: " + terceiro);
    console.log("Quarto: " + quarto);
    
}

realizarOperacoes(primeiro, segundo, terceiro, quarto);
/*
    7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
    forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
    compradas, calcule e escreva o valor total da compra.
*/


let quantidadeDeMacas = 15;

function valorMacas(quantidadeDeMacas) {
    if (quantidadeDeMacas < 12) {
        console.log("Valor das Maçãs: R$ " + (quantidadeDeMacas * 0.3).toFixed(2));
    } else if( quantidadeDeMacas >= 12){
        console.log("Valor das Maçãs: R$ " + (quantidadeDeMacas * 0.25).toFixed(2))
    }
}

valorMacas(quantidadeDeMacas);
/*
    13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
    calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
    1 x N = N
    2 x N = 2N
    3 x N = 3N
*/


function mostrarTabuada(listaNumeros) {
    for (let i = 0; i < listaNumeros.length; i++) {
        let numero = listaNumeros[i];

        console.log("Tabuada de " + numero + ":");
        for (let j = 1; j <= numero; j++) {
            console.log(j + " x " + numero + " = " + (j * numero));
        }
        console.log("--------------------------");
    }
}

let numeros = [5, 8, 12, 17, 20];
mostrarTabuada(numeros);
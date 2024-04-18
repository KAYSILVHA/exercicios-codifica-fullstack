/*
    12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
    divididos por 11, dão resto igual a 5.
*/


function encontrarNumerosRestoCinco() {
    for (let numero = 1000; numero <= 1999; numero++) {
        if (numero % 11 === 5) {
            console.log(numero + " dividido por 11 tem resto igual a 5.");
        }
    }
}

encontrarNumerosRestoCinco();
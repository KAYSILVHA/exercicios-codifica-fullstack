/*
 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.
*/

function solicitarTemperatura() {
    function celsiusToFahrenheit(tempCelsius) {
        return (tempCelsius * 9/5) + 32;
    }
    let inputCelsius = prompt("Digite a temperatura em graus Celsius:");

    if (inputCelsius !== null && inputCelsius !== "") {
        let temperaturaCelsius = Number(inputCelsius);
        if (!isNaN(temperaturaCelsius)) {
            let temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
            alert("Temperatura em Fahrenheit: " + temperaturaFahrenheit + "°F");
        } else {
            alert("Por favor, digite um número válido.");
        }
    } else {
        alert("Nenhuma entrada fornecida.");
    }
}

solicitarTemperatura();
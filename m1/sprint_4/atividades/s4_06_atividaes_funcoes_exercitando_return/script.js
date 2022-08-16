//Exercício 1

function somarNotas (nota1, nota2, nota3, nota4) {
    return nota1 + nota2 + nota3 + nota4
}

function media (somarNotas) {
   return somarNotas/4 
}

let somaDasNotas = somarNotas(8,7,8,7)

console.log(somaDasNotas)
console.log(`Média do aluno é: ${media(somaDasNotas)}`)

//Exercício 2

function convertToCelsius(currentType, currentValue) {
    if (currentType == 'Fahrenheit') {
        return (currentValue - 32) / 1.8
        //De Fahrenheit para Celsius 
    }
    if (currentType == 'Kelvin') {
        return currentValue - 273
        //De Kelvin para Celsius 
    }  
}

console.log(convertToCelsius('Kelvin', 273))


function convertToFahrenheit(currentType2, currentValue2) {
    if (currentType2 == 'Celsius') {
        return currentValue2 * 1,8 + 32
        //De Celsius para Fahrenheit
    }
    if(currentType2 == 'Kelvin') {
        return (currentValue2 - 273) * 1,8 + 32
        //De Kelvin para Fahrenheit
    }
}

console.log(convertToFahrenheit('Celsius', 100)) //O valor não está batendo, preciso descobiri porqu só essa function não funcionou 



function convertToKelvin(currentType3, currentValue3) {
    if (currentType3 == 'Fahrenheit') {
        return (currentValue3 - 32) * 5/9 + 273
        //De Fahrenheit para Kelvin
    }
    if (currentType3 == 'Celsius') {
        return currentValue3 + 273
        //De Celsius para Fahrenheit
    }
}

console.log(convertToKelvin('Celsius', 30))










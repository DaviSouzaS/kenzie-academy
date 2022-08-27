//🧠 Exercício 1 - Mostrando números pares de um array

function numerosPares (listaNumerica) {

    let str = ''
    let arrayPares = []
    for (let i = 0; i <= listaNumerica.length - 1 ; i++) {
        str = listaNumerica[i]

        if (str % 2 == 0) {
            arrayPares.push(str)
        }
    }
    return arrayPares
}
const arr = [5, 4, 7, 30, 16, 89] 
console.log(numerosPares(arr))

//🧠 Exercício 2 - Somando números de um array

function somaNumeros (listaNumbers) {
    let conversão = 0
    let soma = 0
    for (let i = 0; i <= listaNumbers.length - 1; i++) {
        
        
        if (typeof(listaNumbers[i]) == typeof('')) {
            conversão = parseInt(listaNumbers[i])
            listaNumbers[i]=conversão
        }
        soma += listaNumbers[i]

    }

    return soma
}


let arrayNumeros = [1, '4', 9, 18]
console.log(somaNumeros(arrayNumeros))
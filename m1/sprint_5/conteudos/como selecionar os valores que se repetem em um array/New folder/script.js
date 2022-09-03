function encontrarNum (listaDeNumeros, ValorNumerico) {

    let contador = 0
    
    for (let i = 0; i < listaDeNumeros.length; i++) {

        //console.log(listaDeNumeros[i])

        if(listaDeNumeros[i] == ValorNumerico) {
            contador++
        }
    }

return contador
}

let numeros = [1,2,3,4,5,6,7,8,9,1,1,7,2,2,2,2,1,1]
let num = 1

console.log(encontrarNum(numeros, num))

//Essa forma também funciona bem parecida

//A diferença é que ao invés de um array vazio, é uma variavel = 0

//e na condicional ele é somado 
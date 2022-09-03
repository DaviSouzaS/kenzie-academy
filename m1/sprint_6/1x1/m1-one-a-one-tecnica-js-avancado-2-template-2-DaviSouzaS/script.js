//Criar uma função que recebe  uma lista e um numero dessa lista 

//A função deve contar quantas vezes o numero aparece na lista

//Se a quantidade de vezes que o número aparecer for impar, deve retornar uma mensagem

//Se a quantidade de vezes for par, deve retornar outra mensagem

function verificaParOuImpar(lista, numLista) {

    let contador = []

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == numLista) {
            contador.push(lista[i])
        }

    }

    if (contador.length % 2 == 0) {
        return "A quantidade de vezes que o valor aparece é par"
    }

    return "A quantidade de vezes que o valor aparece é impar";


}

let exLista = [1, 5, 3, 4, 7, 4, 15, 20, 4]
let exNum = 4
console.log(verificaParOuImpar(exLista, exNum))
function encontrarNum (listaDeNumeros, ValorNumerico) {

    let contador = []
    
    for (let i = 0; i < listaDeNumeros.length; i++) {
        
        //console.log(listaDeNumeros[i])

        if(listaDeNumeros[i] == ValorNumerico) {
            contador.push(listaDeNumeros[i])
            
        }
    }

return contador.length
}

let numeros = [1,2,3,4,5,6,7,8,9,1,1,7,2,2,2,2]
let num = 1

console.log(encontrarNum(numeros, num))

//Para selecionar os números que se repetem em uma lista e informar a quantidade de vezes em que eles aparecem, é necessário fazer:

//adicionar um array vazio

//Percorrer a lista de números

//Fazer uma condicional que diz: se o item da lista, for igual ao valor numercio, push nos numeros da lista iguais ao valor numerico

//depois, fora do for e da condicional, retornar o array.length

//Assim será obtido o numero de vezes que o valor numerico inserido, se repete na lista.
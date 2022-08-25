//ARRAYS NUMÉRICOS

//Exercício 1 
function Exercicio1 (lista) {
        
    let contadorNegativos = []
     
    for (let i = 0;i <= lista.length; i++ ) {
     
    let numerosNegativos = lista[i]
     
    if (numerosNegativos < 0) {

    contadorNegativos.push(numerosNegativos)
    }
 }     
    console.log(contadorNegativos.length) //Quantidade de negativos na array 
     return contadorNegativos
}

let arrayEx1 = [10,-5,-3,2,4,20,-3,-9,10,10]
console.log(Exercicio1(arrayEx1))



//Exercício 2 
function Exercicio2 (somaNegativos) {

    let negativosSomados = []
    let resultado = 0

    for (let i = 0;i <= somaNegativos.length; i++) {

        let numerosNegativos = somaNegativos[i]
    
        if (numerosNegativos < 0) {

            negativosSomados.push(numerosNegativos)
        }
    }   
      console.log(negativosSomados)
    for (let j = 0; j < negativosSomados.length; j++) {
        resultado += negativosSomados[j] 
    }       

    return resultado
}

let arraySomaNeg = [-15,-10,-5,10,-20,30,-6,10,-4]

console.log (Exercicio2(arraySomaNeg)) 



//Exercício 3 
function Exercicio3 (num) {   
    let arrayPar = []
    for (let i = 0; i <= num; i+=2 ) {
        arrayPar.push(i)
    }
    return arrayPar
}
console.log(Exercicio3(20))



//Exercício 4 
function Exercicio4 (arrayNormal) {   

   let arrayAlt = []

   for (let i = 0;i <= arrayNormal.length; i++ ) {

    let numerosNegativos = arrayNormal[i]

    if (numerosNegativos < 0) {
        arrayAlt.push(numerosNegativos)
    }
   }
        return arrayAlt
}
arrayaleatorio = [-10,-4,-3,-1,-5,6,7,8,9,-10,-11,-7,60,11]
console.log(Exercicio4(arrayaleatorio))



//Exercício 5
function Exercicio5 (arraySomaTudo) {
    let resultado = 0

    for (let i = 0; i < arraySomaTudo.length; i++) {
        resultado += arraySomaTudo[i]  

        if (resultado > arraySomaTudo.length) {
        return true

    }      
    else {
        return false
    }
        } 
}
let arraySomaGeral = [1, -2, 1, 2]
console.log(Exercicio5(arraySomaGeral))



//Exercício 6 

function Exercicio6 (arrayRecebe5) {

    let arrayMais5 = arrayRecebe5
    let resultado = []
    
    
    for (let i = 0; i < arrayMais5.length; i++) {
        let soma5 = arrayMais5[i] + 5

        resultado.push(soma5)
        
    }
    return resultado
   
}
let arrayQualquer = [1,5,3,6,10]
console.log(Exercicio6(arrayQualquer))



//Exercicio 7 

function Exercicio7 (arrayMedia) {

    let resultado = 0
    let arrayVazio = []
    

    for (let i = 0; i  < arrayMedia.length; i++) {
        resultado += arrayMedia[i]
        
    } 

let media = resultado/arrayMedia.length-1

    for (let i = 0; i < arrayMedia.length; i++ ) {
        if(arrayMedia[i] > media) {
        arrayVazio.push(arrayMedia[i])
        
        }
    }
return arrayVazio
}

let array00 = [20, 1, 10 ,5 , 7, 10, 5, 9]

console.log(Exercicio7(array00))



//ARRAYS DE STRINGS E STRINGS 

//Exercício 1

const letraA = 'Faça a pessoa que você gosta se sentir especial ao invés de só mais uma'

function exercicio1b (stringA) {

    let contador = 0

    for (let i = 0; i < stringA.length; i++ ) {

        if (stringA[i] == 'a' || stringA[i] == 'A' ) {
            contador++
        }

    }
    return contador
}

console.log(exercicio1b(letraA))



//Exercício 2 

function exercicio2a (arrayString) {

    let resultado = 0
    
    for (let i = 0; i < arrayString.length; i++) {

        resultado += arrayString[i].length
    }
    
    return resultado
}

let frutas = ['abacaxi','maçã','mamão','limão']

console.log(exercicio2a(frutas))



//Exercício 3

function exercicio3a (stringImpar) {
    let arrayPalavras  = [] 
    let strVazia = ''
    let arrayPalavras2 = []
    for (let i = 0; i < stringImpar.length; i++) {

        if ( stringImpar[i] == ' ') {

            arrayPalavras.push(strVazia)
            strVazia = ''
        } 

        else {
            strVazia += stringImpar[i]
        }
    }
    for (let i = 0; i < arrayPalavras.length; i++) {
        if (arrayPalavras[i].length % 2 != 0) {
            arrayPalavras2.push(arrayPalavras[i])
        }
         
    }

    return arrayPalavras2
}
console.log(exercicio3a('função que recebe uma string Rua A AA  '))



//Exercício 4 

function Exercicio4a (stringZero) {
    let str = ''
    for (let i = 0; i < stringZero.length; i++) {

    if (stringZero[i] == 'o' || stringZero[i] == 'O' ) {
        str += '0'
    }
    else {
        str += stringZero[i]
    }
   }

   return str
}

let qualquer = 'Onivoro'
console.log(Exercicio4a(qualquer))

//Exercício 5 

function exercicio5a (stringP) {
    let str = ''
    for (let i = 0; i < stringP.length; i++) {

        if (stringP[i] == 'p') {
            str += 'P'
        }
        else {
           str += stringP[i] 
        }
        
    }
    return str
}

let frasesP = 'O papa não gosta de paralelepipedos, pipas, pangares, pinguins, piano e puddles'
console.log(exercicio5a(frasesP))
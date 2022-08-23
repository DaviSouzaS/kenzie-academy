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


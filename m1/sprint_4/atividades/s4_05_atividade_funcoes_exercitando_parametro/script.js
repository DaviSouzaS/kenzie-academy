//Exercício 1

function soma (valor1, valor2) {
    return valor1 + valor2
}

console.log (soma (15,876)) //891



//Exercício 2

function identificadorValor (tipo) {
    return typeof(tipo)
}

console.log (identificadorValor (10))

console.log ('O valor (' + 10 + ') é do tipo (' + typeof(10) + ')')



//Exercício 3 

function somarNotas (nota1, nota2, nota3, nota4) {
    let numero = 1
    
    if (typeof(nota1) != typeof(numero) || typeof(nota2) != typeof(numero) || typeof(nota3) != typeof(numero) || typeof(nota4) != typeof(numero)) {
        console.log('O campo só pode receber números')
    } 
    else {
            return nota1 + nota2 + nota3 + nota4
    }

}

console.log(somarNotas(8, 6, 9, 3))




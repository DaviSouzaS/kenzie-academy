//Exercício 1 
let idade =  parseInt(window.prompt('Digite sua idade'))
let avaliarIdade = idade > 18 && idade < 25

if (avaliarIdade) {
    window.alert("A idade está entre 18 e 25")
}

else {
    window.alert("A idade não está entre 18 e 25")
}

//Exercício 2 

let carroNome = 'Chevrolet' 
let carroAno = 2019 
let filtarCarro = carroNome ==='Chevrolet' && carroAno === 2019

if (filtarCarro) {
    console.log('Carro encontrado')
}
else {
    console.log('Carro não encontrado')
}

//Exercício 3 

let botaoMenu = false
let avaliarClick = !botaoMenu

if (avaliarClick) {
    console.log('Abrir menu')
}
else {
    console.log('Fechar menu')
}
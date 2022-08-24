console.log('------------------EXEMPLO 1-------------------')
let states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia'
]
for (let i = 0; i < states.length; i++) {
    console.log(states[i]) //Separando os valores de um array 
}

console.log('----------------EXEMPLO 2-----------------')
let statesAlternados = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia'
]
for (let j = 0; j < states.length; j +=2) {
    console.log(statesAlternados[j]) // Os valores do array estão sendo alternados, pulando um valor por vez. 
}

console.log('----------------EXEMPLO 3-----------------')
let statesInversos = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia'
]
for (let y = statesInversos.length - 1; y >= 0 ; y--) {
    console.log(statesInversos[y]) //Invertendo os valores de um array sem deixar ninguem de fora 
}

console.log('----------------EXEMPLO 4-----------------')
for (let i = 10; i >= 0; i--) {
    console.log(i)
}

console.log('----------------EXEMPLO 5-----------------')
for (let i = 10; i >= -5; i--) {
    console.log(i)
}

console.log('----------------EXEMPLO 6-----------------')
for (let i = 9; i >= -30; i -= 3) {
    console.log(i)
} 

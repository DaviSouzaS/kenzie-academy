//Tarefa 1 (Números de 1 a 20)
function oneThroughTwenty() {

  let meuRetorno = []

  for (let contador = 1; contador <= 20; contador++ ) {
    meuRetorno.push(contador)
  }
  return meuRetorno
}
console.log(oneThroughTwenty())



//Tarefa 2 (Números pares de 1 a 20.)
function evensToTwenty() {

  let meuRetorno = []

  for (let contador = 2; contador <= 20; contador +=2 ) {
    meuRetorno.push(contador)
  }
  return meuRetorno
}
console.log(evensToTwenty())



//Tarefa 3 (Números ímpares de 1 a 20)
function oddsToTwenty() {
    
  let meuRetorno = []

  for (let contador = 1; contador <= 20; contador +=2 ) {
    meuRetorno.push(contador)
  }
  return meuRetorno
}
console.log(oddsToTwenty())



//Tarefa 4 (Números múltiplos de 5 até 100)
function multiplesOfFive() {

  let meuRetorno = []

  for (let contador = 5; contador <= 100; contador +=5 ) {
    meuRetorno.push(contador)
  }
  return meuRetorno
}
console.log(multiplesOfFive())



//Tarefa 5 (Números quadrados perfeitos até 100)
function squareNumbers() {
    
  let meuRetorno = []

  for (let contador = 1 ; contador <= 10; contador++)   {
    meuRetorno.push(contador*contador)
  }
  return meuRetorno  
}
console.log(squareNumbers())



//Tarfa 6 (Números de trás para frente de 20 até 1)
function countingBackwards() {
    
  let meuRetorno = []
  for (let contador = 1; contador <= 20; contador++) {
    meuRetorno.push(contador)
  }
  meuRetorno.reverse()
  return meuRetorno
}
console.log(countingBackwards())


//Tarefa 7 (Números pares de trás para frente de 20 até 1)
function evenNumbersBackwards() {
    
  let meuRetorno = []
  for (let contador = 2; contador <= 20; contador += 2) {
    meuRetorno.push(contador)
  }
  meuRetorno.reverse()
  return meuRetorno
}
console.log(evenNumbersBackwards())



//Tarefa 8 (Números ímpares de trás para frente de 20 até 1)
function oddNumbersBackwards() {
    
  let meuRetorno = []

  for (let contador = 1; contador <= 20; contador +=2 ) {
    meuRetorno.push(contador)
  }
  meuRetorno.reverse()
  return meuRetorno
}
console.log(oddNumbersBackwards())



//Tarefa 9 (Números múltiplos de 5 até 100 de trás para frente)
function multiplesOfFiveBackwards() {
    
  let meuRetorno = []

  for (let contador = 5; contador <= 100; contador +=5 ) {
    meuRetorno.push(contador)
  }
  meuRetorno.reverse()
  return meuRetorno
}
console.log(multiplesOfFiveBackwards())



//Tarefa 10 (Números quadrados perfeitos de trás para frente até 100)
function squareNumbersBackwards() {
    
  let meuRetorno = []

  for (let contador = 1 ; contador <= 10; contador++)   {
    meuRetorno.push(contador*contador)
  }
  meuRetorno.reverse()
  return meuRetorno
}
console.log(squareNumbersBackwards())


//🧠 Exercício 1 - De Casa em Casa
console.log('---------------🧠 Exercício 1 - De Casa em Casa -------------------')

function funcaoContaPasso(passos){
    let i = 1 

    if (passos > 0) {

    while(i <= passos){
        console.log(`Visitei a ${i}ª casa`)
        i++
      } 
    }

    else {
        console.log('Eliminado')
    }
} 
funcaoContaPasso(10)




//🧠 Exercício 2 - Recomeçando
console.log('---------------🧠 Exercício 2 - Recomeçando -------------------')
function funcaoRecomecando (casaAtual) {
    let i = 1
    if (casaAtual > 0 && casaAtual != 1) {
        while (casaAtual > i) {
            casaAtual--
            console.log(`Voltei para a ${casaAtual}ª`)
        }
    }
    else {
        console.log('valor inválido')
    }
}

funcaoRecomecando(10)
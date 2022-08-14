let nome = prompt('Digite seu nome')

let idade = parseInt(prompt('Digite sua idade'))

let estaAcompanhado = prompt('Digite "S" se está acompanhado ou "N" se não está acompanhado')

if(estaAcompanhado =='N') {
    estaAcompanhado = false
}
else if (estaAcompanhado == 'S') {
    estaAcompanhado = true
}

if(idade >= 18 && estaAcompanhado == true) {
    alert(`Entrada permitida para ${nome}: Conceder desconto`)
}
else if (idade >= 18 && estaAcompanhado == false) {
    alert(`Entrada permitida para ${nome}: Valor integral`)
}

else {
    alert(`Entrada não está permitida para ${nome}: Menor de idade`)
}

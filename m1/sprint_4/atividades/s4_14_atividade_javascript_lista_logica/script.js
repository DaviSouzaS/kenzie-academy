//Atividade 1
function calculaIdade (anoNascimento) {
    let anoAtual = 2022
    let idade = anoAtual - anoNascimento
    return idade 
}
console.log(calculaIdade(2003))

//Atividade 2 
function calculaDiferencaAno (anoInicial, anoFinal) {
    let periodo = anoInicial - anoFinal
    if (periodo < 0){
        periodo = periodo * (-1)
    }
    return periodo
}
console.log(calculaDiferencaAno(550,2022))

//Atividade 3 
function valorAPagar (macaQuantidade) {
    let macaPreco = 0
    if (macaQuantidade >= 12) {
        macaPreco = 1.00 * macaQuantidade
    }
    else if (macaQuantidade < 12) {
        macaPreco = 1.30 * macaQuantidade
    }
    
    return macaPreco
}
console.log(valorAPagar(12))

//Atividade 4 
function calculaValorSalario (salarioFuncionario, totalVendasFuncionarioMes) {
    let salarioCompleto = 0

if (totalVendasFuncionarioMes <= 1500) {
    salarioCompleto = (totalVendasFuncionarioMes * 0.03) + salarioFuncionario
} 
else if (totalVendasFuncionarioMes > 1500) {
    salarioCompleto = (totalVendasFuncionarioMes * 0.05) + salarioFuncionario
}
return salarioCompleto
}
console.log(calculaValorSalario(1200,1800))

//Atividade 5 

function notaDaPosicao (listaNotas, listaPosição) {

let notas = [5, 7, 10, 3, 9, 5, 5, 2, 1, 9, 8, 3, 4, 6, 7, 6, 7, 8, 10, 7] 

for (let i = 0; i <= notas.length; i++) {
    notas = notas[i] 
}

//Não Faço ideia de como fazer a lista de notas ser selecionada pelo parâmetro listaNotas, e a listaPosição selecionar o [i]
}



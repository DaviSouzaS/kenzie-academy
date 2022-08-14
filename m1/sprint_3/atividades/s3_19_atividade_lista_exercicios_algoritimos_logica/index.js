//Exercício 1 

let valorSalarioMinimo = 998

let quiloWattsGasto = parseInt(prompt('Insira a quantidade de quilowatts gasta'))

let quiloWattValor = (valorSalarioMinimo/7)/100

let quiloWattCalculo = quiloWattValor * quiloWattsGasto

let quilowattDesconto = quiloWattCalculo - (quiloWattCalculo/10)

alert(`Com base no atual valor do salário mínimo (R$ ${valorSalarioMinimo}) cada quilowatt custa R$ ${quiloWattValor.toFixed(2)}, e ${quiloWattsGasto} quilowatts foram gastos, então o valor é R$ ${quiloWattCalculo.toFixed(2)}, porém com o desconto de 10% o novo valor é R$ ${quilowattDesconto.toFixed(2)}`)

//Exercício 2 

let valorProduto = parseInt(prompt('Insira o valor do produto em reais'))

let descontoPorcentagem = parseInt(prompt('Insira o valor do desconto em porcentagem (SEM COLOCAR O SÍMBOLO DE PORCENTAGEM %)'))

let descontoProduto = valorProduto - (valorProduto*(descontoPorcentagem/100))
alert(`O valor original do produto era R$ ${valorProduto}, porém com o desconto de ${descontoPorcentagem}%, o novo valor é R$ ${descontoProduto}`)

//Exercício 3 

let A = parseInt(prompt('Insira um valor para A'))
let B = parseInt(prompt('Insira um valor para B'))
let guardar = 0
guardar = A

A = B
B = guardar

alert(`Os valores originais de A e B são respectivamente ${B} e ${A}, após a troca, se tornaram ${A} e ${B}`) 

//Exercício 4 

let quantidadeFitas = parseInt(prompt('Digite a quantidade de fitas da locadora'))

let fitasAlugadasMes = quantidadeFitas/3

let fitasAno = fitasAlugadasMes * 12 

let valorAluguel 

let entrgaAtraso = prompt('Digite "Sim" se o cliente atrasou a entrega ou "Não" se o cliente não atrasou a entrega')

if(entrgaAtraso == 'Sim') {
    valorAluguel = valorAluguel + (valorAluguel/10)
}
else if (entrgaAtraso == 'Não') {
    valorAluguel = valorAluguel
}

let atrasoMes = fitasAlugadasMes/10

let valorMultasMes = atrasoMes * (valorAluguel/10)

//Exerício 5

let contaCorrente = parseInt(prompt('Digite os números da sua conta corrente. Ex: 123'))

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

let quantidadeFitas = parseInt(prompt('Digite a quantidade de fitas inical da locadora'))

let fitasAlugadasMes = quantidadeFitas/3

let fitasAno = fitasAlugadasMes * 12 

let valorAluguel = 15 //Cada alugel de fita custa 15 reais. 


let atrasoMes = fitasAlugadasMes/10

let valorMultasMes = atrasoMes * (valorAluguel/10)

let fitasRestantes = (quantidadeFitas - (quantidadeFitas*0.02)) + (quantidadeFitas/10)

//Para o sistema da locadora
alert(`A quantidade inical de fitas é ${quantidadeFitas}, por mês são alugadas ${fitasAlugadasMes.toFixed(1)} e por ano são alugadas ${fitasAno}. O valor do alugel é  R$ ${valorAluguel}, porém caso houver atraso, ocorre uma multa de 10% a mais no valor do alugel. Por mês ocorrem ${atrasoMes.toFixed(1)} atrasos, com isso o valor adquirido em multas por mês é de R$ ${valorMultasMes.toFixed(1)}. E no final do ano, após eventuais perdas de fitas, e reposições, a quantidade restante é ${fitasRestantes}`)

let clienteLocadora = prompt('Digite seu nome')
let fitasAlugadas = parseInt(prompt('Digite o número de fitas alugadas'))
let entrgaAtraso = prompt('Digite "Atrasou" se o cliente atrasou a entrega ou "Não Atrasou" se o cliente não atrasou a entrega')

if(entrgaAtraso == 'Atrasou') {
    valorAluguel = valorAluguel + (valorAluguel/10)
}
else if (entrgaAtraso == 'Não Atrasou') {
    valorAluguel = valorAluguel
}

let valorPagar = fitasAlugadas * valorAluguel
//Para o cliente
alert(`O ${clienteLocadora} alugou ${fitasAlugadas} fitas e ${entrgaAtraso} a entrega. o valor que o cliente deverá pagar é: R$ ${valorPagar}.`)

//Exerício 5

let contaCorrente1 = (prompt('Digite o primeiro dígito da sua conta'))

let contaCorrente2 = (prompt('Digite o segundo dígito da sua conta'))

let contaCorrente3 = (prompt('Digite o terceiro dígito da sua conta'))

let somaConta = Number(contaCorrente1 + contaCorrente2 + contaCorrente3)

let inversoConta = Number(contaCorrente3 + contaCorrente2 + contaCorrente1)

let operacao1 = somaConta + inversoConta

alert (`Agora escreva dígito por dígito deste número ${operacao1}(A*1+B*2+C*3)`)

let digito1 = parseInt(prompt('Digite o primeiro dígito'))

let digito2 = parseInt(prompt('Digite o segundo dígito'))

let digito3 = parseInt(prompt('Digite o terceiro dígito'))

let operacao2 = (digito1 * 1) + (digito2 * 2) + (digito3 * 3)

alert (`O último digito do resultado (${operacao2}) é o dígito verificador`)

//Esse foi o exercício que mais forcei a barra para funcionar, o próprio enunciado da atividade fala que em algum momento precisariamos manipular os números. Em algum momento do futuro, vou ver isso e achar bem engraçado. 
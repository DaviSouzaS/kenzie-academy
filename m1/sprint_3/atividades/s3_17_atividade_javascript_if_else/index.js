//Exercício 1 

let usuarioAutenticado = true

if (usuarioAutenticado) {
    console.log('Seja Bem vindo')
}
else {
    console.log('Usuário não Autênticado')
}

//Exercício 2 

let usuario = 'Ana'
let autenticado = true 

if (usuario === 'Ana' && autenticado === true) {
    console.log(`Olá ${usuario} você está autenticado(a)`)
}
else  {
    console.log(`Olá ${usuario}, você não está autenticado(a) `)
}

//Exercício 3

let produto = 'maçã'
let quantidadeDoProduto = 2
let quantidadeDoProdutoParaPromocao = 5 - quantidadeDoProduto

if (produto == 'maçã' && quantidadeDoProduto >= 5) {
    console.log('Você recebeu uma promção, o valor do produto será R$ 5.00')
}
else {
    console.log(`Se você adicionar mais ${quantidadeDoProdutoParaPromocao} maçãs, o valor sairá por R$ 5.00.`)
}


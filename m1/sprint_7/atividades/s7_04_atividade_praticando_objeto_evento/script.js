let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
}


cardProduto(produto)

function cardProduto(itemProduto) {

    let nome = itemProduto.nome
    let valor = itemProduto.valor
    let liquidacao = itemProduto.liquidacao
    let distribuidor = itemProduto.distribuidor



    let lista = document.createElement('li')
    let selecionarLista = document.querySelector('.listaprincipal')


    lista.innerHTML =
        `
    <span class = 'titulo'>${nome}</span>

    <span class = 'valor'>${valor},00</span>

    <button class = 'clicar' id ='botao' class = 'semdesconto'>Em liquidação</button>

    <p id ='novopreco' class ='sumir'>Hoje apenas: ${valor - valor * 0.3},00</p>

    <span class = 'final'>
        <p>Fabricante:</p><a class='abrirlink' href="${distribuidor}">lojadaKenzie.com.br</a>
    </span>
    `

    selecionarLista.append(lista)

    const desconto = document.getElementById('botao')
    const valorNovo = document.getElementById('novopreco') 

   

    if (liquidacao == true) {

        desconto.addEventListener('click', function () {
            valorNovo.classList.remove('sumir')
        })
        valorNovo.addEventListener('click', function () {
            valorNovo.classList.add('sumir')
        })

        let selecionarLink = document.querySelector(".abrirlink")
    
        selecionarLink.addEventListener('click', function (event) {
            event.preventDefault()
        })
    }

    else {
        desconto.classList.add('semdesconto')
    }

    return selecionarLista
}











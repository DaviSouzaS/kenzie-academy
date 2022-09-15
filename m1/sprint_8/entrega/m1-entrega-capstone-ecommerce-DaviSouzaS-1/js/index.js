//Criando a estrutura HTML
const corpo = document.querySelector('body')

function estrutura() {

    //Criando a Header
    let tagHeader = document.createElement('header')
    let tagDiv = document.createElement('div')
    tagDiv.classList.add('container')

    let tagLogo = document.createElement('h1')
    tagLogo.innerText = 'Weartake'

    let tagNav = document.createElement('nav')

    let link1 = document.createElement('a')
    link1.href = "#"
    link1.innerText = 'Todos'

    let link2 = document.createElement('a')
    link2.href = "#"
    link2.innerText = 'Acessórios'

    let link3 = document.createElement('a')
    link3.href = "#"
    link3.innerText = 'Calçados'

    let link4 = document.createElement('a')
    link4.href = "#"
    link4.innerText = 'Camisetas'

    tagNav.append(link1, link2, link3, link4)

    tagDiv.append(tagLogo, tagNav)

    tagHeader.append(tagDiv)

    //Criando o Main
    let tagMain = document.createElement('main')
    tagMain.classList.add('conteudo-principal')
    tagMain.classList.add('container')

    let tagSectionProdutos = document.createElement('section')
    tagSectionProdutos.classList.add('produtos')

    tagUlProdutos = document.createElement('ul')
    tagUlProdutos.classList.add('objetoprodutos')

    //Criando o Aside 
    let tagAside = document.createElement('aside')

    let tagInput = document.createElement('input')
    tagInput.type = 'search'
    tagInput.placeholder = 'Digite aqui sua pesquisa'
    tagInput.classList.add('pesquisa')

    let tagButton = document.createElement('button')
    tagButton.innerText = 'Pesquisar'
    tagButton.classList.add('botaopesquisa')

    let tagSectionCarrinho = document.createElement('section')
    tagSectionCarrinho.classList.add('carrinho')

    let tagH2carrinho = document.createElement('h2')
    tagH2carrinho.innerText = 'Carrinho de compras'

    // let tagSpan = document.createElement('span')
    // tagSpan.classList.add('carrinhovazio')

    // let tagH3carrinho = document.createElement('h3')
    // tagH3carrinho.innerText = 'Carrinho vazio'

    // let tagPcarrinho = document.createElement('p')
    // tagPcarrinho.innerText = 'Adicione itens'

    let tagUlcarrinho = document.createElement('ul')
    tagUlcarrinho.classList.add('listacarrinho')

    let tagDivPrecoCarrinho = document.createElement('div')
    tagDivPrecoCarrinho.classList.add('precocarrinho')

    let quantidade = document.createElement('small')
    quantidade.classList.add('contadorcarrinho')
    quantidade.innerText = '0'

    let tagPquantidade = document.createElement('p')
    tagPquantidade.innerHTML = `Quantidade: ` 

    let tagPtotal = document.createElement('p')
    tagPtotal.classList.add('valorsoma')
    tagPtotal.innerText = `Total: `

    tagPquantidade.append(quantidade)

    tagSectionProdutos.append(tagUlProdutos)

    //tagSpan.append(tagH3carrinho, tagPcarrinho)

    tagDivPrecoCarrinho.append(tagPquantidade, tagPtotal)
    tagSectionCarrinho.append(tagH2carrinho, tagUlcarrinho, tagDivPrecoCarrinho)  

    tagAside.append(tagInput, tagButton, tagSectionCarrinho)
    tagMain.append(tagSectionProdutos, tagAside)

    corpo.append(tagHeader, tagMain)

}

estrutura()



const ulTodos = document.querySelector('.objetoprodutos')

function percorrerDados(lista) {

    for (let i = 0; i < lista.length; i++) {

        objLista = lista[i]

        let tamplate = todosProdutos(objLista)

        ulTodos.append(tamplate)
    }
}

percorrerDados(data)


//Criando a lista com todos os produtos 
function todosProdutos(itensLoja) {

    tagLi = document.createElement('li')

    tagDivItem = document.createElement('div')
    tagDivItem.classList.add('caixaimg')

    tagImgItem = document.createElement('img')
    tagImgItem.src = itensLoja.img
    tagImgItem.alt = itensLoja.nameItem

    tagDivTextoItem = document.createElement('div')
    tagDivTextoItem.classList.add('txtcard')

    tagH3Categoria = document.createElement('h3')
    tagH3Categoria.innerText = itensLoja.tag

    tagH2Nome = document.createElement('h2')
    tagH2Nome.innerText = itensLoja.nameItem

    tagPdescricao = document.createElement('p')
    tagPdescricao.classList.add('desc')
    tagPdescricao.innerText = itensLoja.description

    tagPpreco = document.createElement('p')
    tagPpreco.classList.add('preco')
    tagPpreco.innerText = `R$ ${itensLoja.value}.00`

    tagButtonAddCarrinho = document.createElement('button')
    tagButtonAddCarrinho.id = `add` + itensLoja.id
    tagButtonAddCarrinho.classList.add('cart_add')
    tagButtonAddCarrinho.innerText = itensLoja.addCart

    tagDivItem.append(tagImgItem)

    tagDivTextoItem.append(tagH3Categoria, tagH2Nome, tagPdescricao, tagPpreco, tagButtonAddCarrinho)

    tagLi.append(tagDivItem, tagDivTextoItem)

    return tagLi
}


const botao = document.getElementsByClassName('cart_add')

function carrinhoDeCompras(botoesCompra) {

    for (let i = 0; i < botoesCompra.length; i++) {

        let button = botoesCompra[i]

        button.addEventListener('click', function (event) {
            let elemento = event.target
            let idElemento = elemento.id
            let id = parseInt(idElemento.substring(3))

            let produtoObj = procurandoProdutos(id)

            let adicionando = adicionandoNoCarrinho(produtoObj)
        })
    }
}

carrinhoDeCompras(botao)


function procurandoProdutos(idProuto) {

    for (let i = 0; i < data.length; i++) {

        let produto = data[i]

        if (produto.id === idProuto) {
            return produto
        }
    }
    return false
}

let valor = 0
let contadorCarrinho = 0

let listaDoCarrinho = document.querySelector('.listacarrinho')
let precoCarrinho = document.querySelector('.precocarrinho')

let somaDoValor = document.querySelector('.valorsoma')

function adicionandoNoCarrinho (produto) {

    valor += produto.value
    console.log(valor)
    contadorCarrinho++

    somaDoValor.innerText = `Total: R$` + valor

    document.querySelector('.contadorcarrinho').innerText = contadorCarrinho

    let tagLi = document.createElement('li')

    let tagDiv = document.createElement('div')
    tagDiv.classList.add('produtocarrinho')

    let tagSpan = document.createElement('span')
    tagSpan.classList.add('carrinhoimg')

    let tagImg = document.createElement('img')
    tagImg.src = produto.img
    tagImg.alt = produto.nameItem

    let tagSpanDesc = document.createElement('span')

    let tagH2 = document.createElement('h2')
    tagH2.classList.add('itemcarrinho')
    tagH2.innerText = produto.nameItem

    let tagP = document.createElement('p')
    tagP.classList.add('itemcarrinho')
    tagP.innerText = `R$` + produto.value + `.00`

    let tagButton = document.createElement('button')
    tagButton.classList.add('itemcarrinho')
    tagButton.innerText = 'Remover do carrinho'


    tagButton.addEventListener('click', function (event) {
        
        let itemLista = event.path[3]

        itemLista.remove()

        valor -= produto.value
        somaDoValor.innerText = valor
        console.log(valor)
        contadorCarrinho--
        somaDoValor.innerText = `Total: R$` + valor

        document.querySelector('.contadorcarrinho').innerText = contadorCarrinho
    })


    tagSpan.append(tagImg)
    tagSpanDesc.append(tagH2, tagP, tagButton)
    tagDiv.append(tagSpan, tagSpanDesc)
    tagLi.append(tagDiv)

    listaDoCarrinho.append(tagLi)

}

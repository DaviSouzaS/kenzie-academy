const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },

    {
        id: 2,
        name: "Vinho canção",
        price: 17.98
    },

    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },

    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },

    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    }
]

const corpo = document.querySelector("body")

function estrutura() {

    let tagHeader = document.createElement("header")
    tagHeader.innerHTML = `<h1>Virtual Market</h1>`

    let tagMain = document.createElement("main")

    tagMain.innerHTML =
        `
    <ul class="secaoitens">
    <li class="itemcategorias">
        <h2>Item</h2>
        <p>Valor</p>
    </li>
    
    <span class = "itens">

    </span>

    <section>
        <li class="total">
            
        </li>
        <button class="botao">Finalizar compra</button>
    </section>
</ul>`

    corpo.append(tagHeader, tagMain)
}

estrutura()

function percorrerCarrinho(listaItens) {

    let somaItens = 0

    for (let i = 0; i < listaItens.length; i++) {

        let lista = listaItens[i]

        somaItens += listaItens[i].price

        tamplateCarrinho(lista, somaItens)
    }
}

percorrerCarrinho(productsCart)

function tamplateCarrinho(listaCompras, total) {

    let nome = listaCompras.name
    let preco = listaCompras.price

    let precoTotal = document.querySelector('section')
    let tagSpan = document.querySelector("span")
    let tagLi = document.createElement("li")
    let tagH2 = document.createElement("h2")
    let tagP = document.createElement("p")

    tagH2.innerText = nome
    tagP.innerText = `R$ ` + preco

    precoTotal.innerHTML =
    `
    <li class="total">
        <h2>Total</h2>
        <p>R$ ${total}</p>
    </li>
    <button class="botao">Finalizar compra</button>
    `

    tagLi.append(tagH2, tagP)

    tagSpan.appendChild(tagLi)
}





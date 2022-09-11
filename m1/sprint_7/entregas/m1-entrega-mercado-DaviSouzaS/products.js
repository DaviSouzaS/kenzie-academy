const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "Imagem não disponível",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "Cachos de banana",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "Conjunto de mamões",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "Maçã verde",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "Imagem não disponível",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "Garafa de vinho",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "Imagem não disponível",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "Conjunto do cocos",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "Sabonetes em uma superfície branca",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "Garrafa grande de detergente",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "Spray limpa superfícies",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "Imagem não disponível",
  },
];

//1 Filtrar os objetos com base em sua categoria 

let listaFrutas = []
let listaBebidas = []
let listaHigiene = []

function organizaObj(lista) {

  for (let i = 0; i < lista.length; i++) {

    if (lista[i].category == "Frutas") {
      listaFrutas.push(lista[i])
    }

    else if (lista[i].category == "Bebidas") {
      listaBebidas.push(lista[i])
    }

    else if (lista[i].category == "Higiene") {
      listaHigiene.push(lista[i])
    }
  }
}

organizaObj(products)

//2 Criar uma estrutura HTML para receber as listas 

const corpo = document.querySelector('body')

function estruturaHTMl() {

  let cabecalho = document.createElement('nav')
  cabecalho.innerHTML =
    `
      <img
        src="./img/brand/logo.svg"
        alt="Imagem da logotipo do Virtual Market de cor preta"
        title="Imagem da logotipo do Virtual Market de cor preta"
      />
  `

  let estrutura = document.createElement('main')
  estrutura.classList.add('container')
  estrutura.innerHTML =
    `
      <section class="products-section">
        <h1>Frutas</h1>
        <main class="products-content fruits">
          
        </main>
      </section>


      <section class="products-section">
        <h1>Bebidas</h1>
        <main class="products-content drinks">
          
        </main>
      </section>


      <section class="products-section">
        <h1>Higiene</h1>
        <main class="products-content hygiene">
          
        </main>
      </section>
  `

  corpo.append(cabecalho, estrutura)
}

estruturaHTMl()

//3 Selecionar o main que tem a class correspondente a categoria do objeto, e criar a estrutura da lista. 




//3.1 Criando a estrutura da lista de frutas 
const mainFrutas = document.querySelector('.fruits')

const ulFrutas = document.createElement('ul')

function percorrerFrutas(listFruits) {

  for (let i = 0; i < listFruits.length; i++) {
    let secao1 = listFruits[i]

    let tamplate = estruturaFruta(secao1)

    ulFrutas.append(tamplate)
    mainFrutas.append(ulFrutas)
    console.log(mainFrutas)
  }
}

percorrerFrutas(listaFrutas)

function estruturaFruta(frutasProdutos) {

  let tagLi = document.createElement('li')
  tagLi.classList.add('product')

  let tagImg = document.createElement('img')
  tagImg.src = frutasProdutos.image
  tagImg.alt = frutasProdutos.imageDescription
  tagImg.title = frutasProdutos.title
  tagImg.classList.add('product-img')

  //Condicional para colocar a imagem de 'produto sem imagem' quando o objeto estiver sem imagem 
  if (tagImg.alt == "Imagem não disponível") {
    tagImg.src = `img/products/no-img.svg`
  }

  let tagMain = document.createElement('main')
  tagMain.classList.add('product-main')

  let tagH1 = document.createElement('h1')
  tagH1.classList.add('product-title')
  tagH1.innerHTML = frutasProdutos.title

  let tagH5 = document.createElement('h5')
  tagH5.classList.add('product-category')
  tagH5.innerHTML = frutasProdutos.category

  let tagStrong = document.createElement('strong')
  tagStrong.classList.add('product-price')
  tagStrong.innerHTML = `R$ ` + frutasProdutos.price

  tagMain.append(tagH1, tagH5, tagStrong)
  tagLi.append(tagImg, tagMain)

  return tagLi
}




//3.2 Criando a estrutura para a lista de bebidas
const mainBebidas = document.querySelector('.drinks')

const ulBebidas = document.createElement('ul')

function percorrerBebidas(listDrinks) {

  for (let i = 0; i < listDrinks.length; i++) {
    let secao2 = listDrinks[i]

    let tamplate2 = estruturaBebida(secao2)

    ulBebidas.append(tamplate2)
    mainBebidas.append(ulBebidas)
  }
}

percorrerBebidas(listaBebidas)

function estruturaBebida(bebidaProdutos) {

  let tagLi = document.createElement('li')
  tagLi.classList.add('product')

  let tagImg = document.createElement('img')
  tagImg.src = bebidaProdutos.image
  tagImg.alt = bebidaProdutos.imageDescription
  tagImg.title = bebidaProdutos.title
  tagImg.classList.add('product-img')

  //Condicional para colocar a imagem de 'produto sem imagem' quando o objeto estiver sem imagem 
  if (tagImg.alt == "Imagem não disponível") {
    tagImg.src = `img/products/no-img.svg`
  }

  let tagMain = document.createElement('main')
  tagMain.classList.add('product-main')

  let tagH1 = document.createElement('h1')
  tagH1.classList.add('product-title')
  tagH1.innerHTML = bebidaProdutos.title

  let tagH5 = document.createElement('h5')
  tagH5.classList.add('product-category')
  tagH5.innerHTML = bebidaProdutos.category

  let tagStrong = document.createElement('strong')
  tagStrong.classList.add('product-price')
  tagStrong.innerHTML = `R$ ` + bebidaProdutos.price

  tagMain.append(tagH1, tagH5, tagStrong)
  tagLi.append(tagImg, tagMain)

  return tagLi
}




//3.3 Criando a estrutura para a lista de higiene  
const mainHigiene = document.querySelector('.hygiene')

const ulHigiene = document.createElement('ul')

function percorrerHigiene(listHygiene) {

  for (let i = 0; i < listHygiene.length; i++) {
    let secao3 = listHygiene[i]

    let tamplate3 = estruturaHigiene(secao3)

    ulHigiene.append(tamplate3)
    mainHigiene.append(ulHigiene)
  }
}

percorrerHigiene(listaHigiene)

function estruturaHigiene(higieneProdutos) {

  let tagLi = document.createElement('li')
  tagLi.classList.add('product')

  let tagImg = document.createElement('img')
  tagImg.src = higieneProdutos.image
  tagImg.alt = higieneProdutos.imageDescription
  tagImg.title = higieneProdutos.title
  tagImg.classList.add('product-img')

  //Condicional para colocar a imagem de 'produto sem imagem' quando o objeto estiver sem imagem 
  if (tagImg.alt == "Imagem não disponível") {
    tagImg.src = `img/products/no-img.svg`
  }

  let tagMain = document.createElement('main')
  tagMain.classList.add('product-main')

  let tagH1 = document.createElement('h1')
  tagH1.classList.add('product-title')
  tagH1.innerHTML = higieneProdutos.title

  let tagH5 = document.createElement('h5')
  tagH5.classList.add('product-category')
  tagH5.innerHTML = higieneProdutos.category

  let tagStrong = document.createElement('strong')
  tagStrong.classList.add('product-price')
  tagStrong.innerHTML = `R$ ` + higieneProdutos.price

  tagMain.append(tagH1, tagH5, tagStrong)
  tagLi.append(tagImg, tagMain)

  return tagLi
}


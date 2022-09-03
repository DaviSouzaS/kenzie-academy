let itens = [
    {
        image: 'clock.jpg',
        name: 'Relógio Art',
        price: 'R$ 100',
        type: 'paintings'
    },

    {
        image: 'gamepad.jpg',
        name: 'Joystick Art',
        price: 'R$ 120',
        type: 'paintings'
    },

    {
        image: 'personagem.jpg',
        name: 'Robô Art',
        price: 'R$ 150',
        type: 'paintings'
    },

    {
        image: 'animewoman.jpg',
        name: 'Action figure anime ',
        price: 'R$ 250',
        type: 'Action-figure'
    },

    {
        image: 'dragonballpersonagem.jpg',
        name: 'Action figure goku',
        price: 'R$ 300',
        type: 'Action-figure'
    },

    {
        image: 'starwarspersonagem.jpg',
        name: 'Action figure Yoda',
        price: 'R$ 140',
        type: 'Action-figure'
    }
]

let listFigures = []
let listFrames = []

function separateItens(listaItens) {

    for (let i = 0; i < listaItens.length; i++) {

        if (listaItens[i].type == 'paintings') {
            listFrames.push(listaItens[i])
        }

        else {
            listFigures.push(listaItens[i])
        }
    }

}

separateItens(itens)

const quadros = document.querySelector('.paintings')
function percorrerFrame(lista, anexoHtml) {

    for (let i = 0; i < lista.length; i++) {

        let secao1 = lista[i]

        let tamplate = tamplateFrame(secao1)

        anexoHtml.append(tamplate)
    }
}

percorrerFrame(listFrames, quadros)

function tamplateFrame(itemLoja) {

    let image = itemLoja.image
    let name = itemLoja.name
    let price = itemLoja.price

    let tagLi = document.createElement("li")
    let tagImg = document.createElement("img")
    let tagDiv = document.createElement("div")
    let tagH2 = document.createElement("h2")
    let tagP = document.createElement("p")

    tagImg.src = `assets/img/painting/${image}`
    tagImg.alt = name
    tagH2.innerText = name
    tagP.innerText = price

    tagDiv.append(tagH2,tagP)
    tagLi.append(tagImg, tagDiv)

    return tagLi
}


const bonecoFiguraAcao = document.querySelector('.action_figure')
function percorrerActionFigure(lista, anexoHtml) {

    for (let i = 0; i < lista.length; i++) {

        let secao2 = lista[i]

        let tamplate = tamplateActionFigure(secao2)

        anexoHtml.append(tamplate)
    }
}

percorrerActionFigure(listFigures, bonecoFiguraAcao)

function tamplateActionFigure(itemLoja) {

    let image = itemLoja.image
    let name = itemLoja.name
    let price = itemLoja.price

    let tagLi = document.createElement("li")
    let tagImg = document.createElement("img")
    let tagDiv = document.createElement("div")
    let tagH2 = document.createElement("h2")
    let tagP = document.createElement("p")

    tagImg.src = `assets/img/actions/${image}`
    tagImg.alt = name
    tagH2.innerText = name
    tagP.innerText = price

    tagDiv.append(tagH2, tagP)
    tagLi.append(tagImg, tagDiv)

    return tagLi
}






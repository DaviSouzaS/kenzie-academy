function renderAlbums(listObj) {
    const ul = document.querySelector('.albums-list')

    listObj.forEach((iten) => {
        const cardAlbum = createCardAlbum(iten)
        ul.appendChild(cardAlbum)
    })

    if (ul.innerText === '') {
        let p = document.createElement('p')
        p.classList.add('no-albums')
        p.innerText = 'Nenhum album encontrado'
        ul.appendChild(p)
    }
}

function createCardAlbum(list) {

    let li = document.createElement('li')
    li.classList.add("album-iten")

    let divImgBox = document.createElement('div')
    divImgBox.classList.add('img-box')

    let img = document.createElement('img')
    img.src = list.img
    img.alt = list.band

    let divInfoBox = document.createElement('div')
    divInfoBox.classList.add('info-box')

    let spanInfoAlbum = document.createElement('span')
    spanInfoAlbum.classList = "display-flex info-album"

    let pName = document.createElement('p')
    pName.innerHTML = list.band

    let pYear = document.createElement('p')
    pYear.innerHTML = list.year

    let h2Title = document.createElement('h2')
    h2Title.innerHTML = list.title

    let span = document.createElement('span') 
    span.classList = "display-flex justify-content align-items"

    let pPrice = document.createElement('p')
    pPrice.classList.add('album-iten-price')
    pPrice.innerHTML = `R$ ${list.price}.00`

    let button = document.createElement('button') 
    button.classList = "button-album"
    button.innerText = "Comprar"
    
    span.append(pPrice, button)
    spanInfoAlbum.append(pName, pYear)
    divInfoBox.append(spanInfoAlbum, h2Title, span)
    divImgBox.append(img)
    li.append(divImgBox, divInfoBox)

    return li
}




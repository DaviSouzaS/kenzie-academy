function filterCategory() {
    const filterButtons = document.querySelectorAll('.itens-category')
    const listAlbums = document.querySelector('.albums-list')

    filterButtons.forEach(button => {

        button.addEventListener('click', function () {
            listAlbums.innerHTML = ''
            const buttonName = button.innerText

            if (buttonName === 'Todos') {
                renderAlbums(products)
            }

            const albumsFiltred = filterAlbums(buttonName)

            renderAlbums(albumsFiltred)
        })
    })
}

filterCategory()

function filterAlbums(nameAlbum) {
    const filter = products.filter(product => categories[product.category].includes(nameAlbum))
    return filter
}

function filterPrice() {
    const price = document.querySelector('.price-albums')
    const inputRange = document.querySelector('.input-range')

    inputRange.addEventListener('input', function () {

        const teste = inputRange.value

        price.innerHTML = `Até R$ ${teste}`

        // const filterValue = products.filter(product => product.price <= Number(teste))
    })
}

filterPrice()


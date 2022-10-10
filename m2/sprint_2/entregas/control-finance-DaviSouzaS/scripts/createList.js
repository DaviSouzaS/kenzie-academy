function valueitens(iten) {

    const ul = document.querySelector('.section-list-values')

    let tagLi = document.createElement('li')
    tagLi.classList = "display-flex display-space-between section-iten-values display-flex-center values-li"

    let values = iten.value

    let tagPiten = document.createElement('p')
    tagPiten.classList.add('value-iten')
    tagPiten.innerHTML = `R$ ${values}`

    let tagDiv = document.createElement('div')
    tagDiv.classList = "display-flex gap-30"

    let tagPtype = document.createElement('p')
    tagPtype.classList.add('type-value')
    tagPtype.innerHTML = valuesCategory[iten.categoryID]

    let tagButton = document.createElement('button')
    tagButton.classList = "button-trash display-flex display-flex-center"

    tagButton.innerHTML = `<svg width="13" height="14"
    viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
    d="M12.5625 0.875H9.28125L9.00781 0.382812C8.89844 0.164062 8.67969 0 8.43359 0H5.28906C5.04297 0 4.82422 0.164062 4.71484 0.382812L4.46875 0.875H1.1875C0.941406 0.875 0.75 1.09375 0.75 1.3125V2.1875C0.75 2.43359 0.941406 2.625 1.1875 2.625H12.5625C12.7812 2.625 13 2.43359 13 2.1875V1.3125C13 1.09375 12.7812 0.875 12.5625 0.875ZM2.19922 12.7695C2.22656 13.4805 2.80078 14 3.51172 14H10.2109C10.9219 14 11.4961 13.4805 11.5234 12.7695L12.125 3.5H1.625L2.19922 12.7695Z"
    fill="#ADB5BD"/>
    </svg>`

    tagDiv.append(tagPtype, tagButton)
    tagLi.append(tagPiten, tagDiv)

    tagButton.addEventListener('click', function () {
        tagLi.remove()
    })

    return ul.append(tagLi)
}


let insertedValuesfiltered = [];

function filterList () {
const buttonFilter = document.querySelectorAll('.button-filter')
const listValues = document.querySelector('.list-values')
const amount = document.querySelector('.amount')

    buttonFilter.forEach(button => {
        
        button.addEventListener('click', function () {
            insertedValuesfiltered = []
            listValues.innerHTML = ''
            const filterCategory = button.innerText

            if (filterCategory === 'Todos') {

                insertedValues.forEach(iten => {
                    insertedValuesfiltered.push(iten)
                })

                insertedValuesfiltered.forEach(itenList => {

                    valueitens(itenList)
                
                })

                const reduceValue = insertedValuesfiltered.reduce((previus, current) => {
                    return previus + Number(current.value)
                }, 0)

                amount.innerHTML = `R$ ${reduceValue}`

            }

            else if (filterCategory === 'Entradas') {
                let entryValues = insertedValues.filter((iten) => {
                    return iten.categoryID === 0
                })

                entryValues.forEach(iten => {
                    insertedValuesfiltered.push(iten)
                })

                insertedValuesfiltered.forEach(itenList => {
                    valueitens(itenList)

                    
                })

                const reduceValue = insertedValuesfiltered.reduce((previus, current) => {
                    return previus + Number(current.value)
                }, 0)
                amount.innerHTML = `R$ ${reduceValue}`
            }

            else {
                let outValues = insertedValues.filter((iten) => {
                    return iten.categoryID === 1
                })

                outValues.forEach(iten => {
                    insertedValuesfiltered.push(iten)
                })

                insertedValuesfiltered.forEach(itenList => {
                    valueitens(itenList)
                    
                })

                const reduceValue = insertedValuesfiltered.reduce((previus, current) => {
                    return previus + Number(current.value)
                }, 0)
                amount.innerHTML = `R$ ${reduceValue}`

            }
        })
    })
}


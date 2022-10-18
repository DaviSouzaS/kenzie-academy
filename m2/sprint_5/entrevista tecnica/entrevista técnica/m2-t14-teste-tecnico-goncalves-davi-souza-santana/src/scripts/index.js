function renderCards (list) {
    const sectionCards = document.querySelector('.container-cards')
    const buttonRender = document.querySelector('.render-button')
    const countSpan = document.querySelector('.span-counter')
    let count = 0
    
    list.map( obj => {

        let div = document.createElement('div')
        div.classList.add('card')

        let h2Name = document.createElement('h2')
       h2Name.innerText = `${obj.nome} ${ obj.sobrenome}`

        let pAge = document.createElement('p')
        pAge.innerText = obj.idade

        div.append(h2Name, pAge)

        buttonRender.addEventListener('click', () => {
            sectionCards.appendChild(div)

            if (obj.idade > 25) {
            
                count++
                countSpan.innerText = count
            }
        })

        


    })
}

renderCards(pessoas)


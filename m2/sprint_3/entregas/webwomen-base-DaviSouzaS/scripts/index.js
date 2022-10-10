jobsData.forEach(iten => createJobList(iten))

function createJobList (list) {
    const sectionJobList = document.querySelector('#sectionJobList')
    const sectionUserJobList = document.querySelector('.section-user-job')

    let divBox = document.createElement('div')
    divBox.classList = "display-flex display-flex-column gap-32 iten-job-list"

    let h2 = document.createElement('h2')
    h2.innerHTML = list.title

    let span = document.createElement('span')
    span.classList = "display-flex gap-32 info-job"

    let pCompany = document.createElement('p')
    pCompany.innerHTML = list.enterprise

    let pPlace = document.createElement('p')
    pPlace.innerHTML = list.location

    let pDescription = document.createElement('p')
    pDescription.innerText = list.descrition

    let spanButtons = document.createElement('span')
    spanButtons.classList = "display-flex flex-start-mobile flex-direction-column justify-content-between footer-iten-job align-items-center"

    let divCategory = document.createElement('div')
    divCategory.classList = "display-flex position-category-job display-flex-mobile gap-10"

    let pCategory1 = document.createElement('p')
    pCategory1.classList = "category-job-list"
    pCategory1.innerHTML = list.modalities[0]

    let pCategory2 = document.createElement('p')
    pCategory2.classList = "category-job-list"
    pCategory2.innerHTML = list.modalities[1]

    let button = document.createElement('button')
    button.classList = "position-category-job"
    button.innerText = "Candidatar"

    
    divCategory.append(pCategory1, pCategory2)
    spanButtons.append(divCategory, button)
    span.append(pCompany, pPlace)
    divBox.append(h2, span, pDescription, spanButtons)

    sectionJobList.appendChild(divBox)

    let pWarning = document.createElement('p')

    let divEmptySpace = document.createElement('div')
    divEmptySpace.classList.add('emptySpace')

    let rectangle1 = document.createElement('div')
    rectangle1.classList.add('rectangle1')

    let rectangle2 = document.createElement('div')
    rectangle2.classList.add('rectangle2')

    let divRectangle = document.createElement('div')
    divRectangle.classList.add('display-flex')

    let rectangle3 = document.createElement('div')
    rectangle3.classList.add('rectangle3')

    let rectangle4 = document.createElement('div')
    rectangle4.classList.add('rectangle4')

    let rectangle5 = document.createElement('div')
    rectangle5.classList.add('rectangle5')


    let div = document.createElement('div')
    div.classList = "user-job-iten display-flex display-flex-column gap-20"

    let spanHeader = document.createElement('span')
    spanHeader.classList.add('display-flex')

    let h2UserList = document.createElement('h2')
    h2UserList.innerHTML = list.title

    let pCompanyUserList = document.createElement('p')
    pCompanyUserList.innerHTML = list.enterprise

    let pPlaceUserList = document.createElement('p')
    pPlaceUserList.innerHTML = list.location

    let spanFooter = document.createElement('span')
    spanFooter.classList = "display-flex gap-32 info-job-user"

    let buttonRemove = document.createElement('button')
    button.classList = "display-flex align-items-center justify-content-center"

    let img = document.createElement('img')
    img.src = "/assets/img/trash-ico.svg"
    img.alt = "trash-icon"

    spanFooter.append(pCompanyUserList, pPlaceUserList)
    buttonRemove.appendChild(img)
    spanHeader.append(h2UserList, buttonRemove)
    div.append(spanHeader, spanFooter)

    if (sectionUserJobList.innerText === '') {
        pWarning.innerText = 'Você ainda não aplicou para nenhuma vaga'

        divRectangle.append(rectangle3, rectangle4, rectangle5)
        divEmptySpace.append(rectangle1, rectangle2, divRectangle)

        sectionUserJobList.append(pWarning, divEmptySpace)
    }

    button.addEventListener('click', () => {
        pWarning.remove()
        divEmptySpace.remove()

        sectionUserJobList.appendChild(div)

        button.innerText = "Remover candidatura"

        if(button.innerText === "Remover candidatura") {
            button.addEventListener('click', () => {
                div.remove()
                button.innerText = "Candidatar"
                sectionUserJobList.append(pWarning, divEmptySpace)
            })
        }
        
    })

    buttonRemove.addEventListener('click', () => {
        div.remove()
        button.innerText = "Candidatar"
        sectionUserJobList.append(pWarning, divEmptySpace)
    })

    

    



}


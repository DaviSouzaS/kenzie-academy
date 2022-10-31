const modalBg = document.createElement('div')
modalBg.classList = "bg-modal display-flex justify-content-center"


function openModal(children) {

    const body = document.querySelector('body')

    
    modalBg.appendChild(children)
    body.appendChild(modalBg)
}

function closeModal (button, cancel) {

    button.addEventListener('click', () => {
        modalBg.remove()
        modalBg.innerHTML = ''
    })
}

function openModalLogout (data) {
    
    const body = document.querySelector('body')

    let divLogoutBg = document.createElement('div')
    divLogoutBg.classList.add('logout-bg')

    let divLogoutModal = document.createElement('div')
    divLogoutModal.classList.add('logout-modal')

    let divUser = document.createElement('div')
    divUser.classList.add('user-name-box')

    let pUser = document.createElement('p')
    pUser.innerText = '@' + data.username

    let divLogoutButton = document.createElement('div')
    divLogoutButton.classList.add('logout-button')

    divLogoutButton.addEventListener('click', () => {
        localStorage.removeItem('user')
        window.location.replace("/index.html")
    })

    let span = document.createElement('span')
    span.classList = 'display-flex gap-20'

    let img = document.createElement('img')
    img.src = '/assets/sign-out-alt.svg'

    let pOut = document.createElement('p')
    pOut.innerText = 'Sair da conta'

    span.append(img, pOut)
    divLogoutButton.appendChild(span)
    divUser.appendChild(pUser)
    divLogoutModal.append(divUser, divLogoutButton)
    divLogoutBg.appendChild(divLogoutModal)
    body.appendChild(divLogoutBg)
    
    return body
}


export {
    openModal,
    closeModal,
    modalBg,
    openModalLogout
}
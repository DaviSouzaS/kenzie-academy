function toastRegister (status, message) {

    let modalBg = document.createElement('div')
    modalBg.classList.add('modal-status-bg')

    let modalStatus = document.createElement('div')
    modalStatus.classList = 'modal-status display-flex flex-direction-column justify-content-center gap-18'

    let span = document.createElement('span')
    span.classList = 'display-flex align-items-center'

    let divCircleGreen = document.createElement('div')
    divCircleGreen.classList = 'circle-green display-flex justify-content-center align-items-center'

    let imgCheck = document.createElement('img')
    imgCheck.src = '/assets/check.svg'
    imgCheck.alt = 'check-icon-success'

    let pStatus = document.createElement('p')
    pStatus.innerText = status

    let pLogin = document.createElement('p')
    pLogin.innerHTML = message

    divCircleGreen.appendChild(imgCheck)
    span.append(divCircleGreen, pStatus)
    modalStatus.append(span, pLogin)
    modalBg.appendChild(modalStatus)
    
    return modalBg
}

export {
    toastRegister
}
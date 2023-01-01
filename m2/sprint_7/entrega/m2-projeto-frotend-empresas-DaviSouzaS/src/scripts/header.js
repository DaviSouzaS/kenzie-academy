const menuBox = document.querySelector('.menu-box')

export function openHeaderMenu (closeMenuIcon, openMenuIcon) {
    const menuIconBox = document.querySelector('.menu-icon-box')

    let div = document.createElement('div')
    div.classList = 'container menu-hamburguer display-flex space-between align-items-center gap-12'

    let buttonLogin = document.createElement('button')
    buttonLogin.classList.add('button-login') 
    buttonLogin.innerText = 'Login'

    let buttonRegister = document.createElement('button')
    buttonRegister.classList.add('button-register') 
    buttonRegister.innerText = 'Cadastro'

    menuIconBox.addEventListener('click', () => {
        menuIconBox.innerHTML = ''
        menuIconBox.appendChild(closeMenuIcon)

        div.append(buttonLogin, buttonRegister)
        menuBox.appendChild(div)
        
        menuIconBox.addEventListener('click', () => {
            div.remove()
            menuIconBox.innerHTML = ''
            menuIconBox.appendChild(openMenuIcon)
        })
    })
}

// export function closeHeaderMenu () {

//     menuHamburguer.addEventListener('click', () => {
//         menuHamburguer.src = '/src/assets/menuIcon.svg'
//         menuBox.innerHTML = ''
//     })
// }
    


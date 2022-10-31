import { login } from "./api.js";

function entryLogin () {

    const formLogin = document.querySelector('.form-login')
    const formElements = [...formLogin]

    const buttonEntry = document.querySelector('.button-entry')

    formLogin.addEventListener('submit', async (iten) => {
        iten.preventDefault()

        const body = {}

        formElements.forEach(element => {

            if(element.tagName === "INPUT" && element.value !== "") {
                body[element.id] = element.value
            }
        })

        await login(body)
    })

    const buttonBackRegister = document.querySelector('.back-register')

    buttonBackRegister.addEventListener('click', () => {
        window.location.replace("pages/register/index.html")
    })
}

entryLogin()


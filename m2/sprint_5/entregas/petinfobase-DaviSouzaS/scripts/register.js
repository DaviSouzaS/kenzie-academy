import { register } from "./api.js";

function createAccount () {

    const formRegister = document.querySelector('.form-register')
    const formElements = [...formRegister]

    formRegister.addEventListener('submit', async (iten) => {
        iten.preventDefault()

        const body = {}

        formElements.forEach(element =>  {

            if(element.tagName === "INPUT" && element.value !== "") {
                body[element.id] = element.value
            }
        })

        await register(body)
    })

    const buttonBackLogin = document.querySelectorAll('.back-login')

    buttonBackLogin.forEach(button => {
        button.addEventListener('click', () => {
            window.location.replace("/index.html")
        })
    })
    
    

}

createAccount()


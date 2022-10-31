const baseURL = "http://localhost:3333/"

import { getLocalStorage } from "./localStorage.js"

async function login(body) {
    
    try {
        const request = await fetch(baseURL + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const pass = document.querySelector('.login-pass')
        const wrong = document.querySelector('.wrong-box')

        if (request.ok === false) {
            wrong.innerText = ''

            pass.classList.add('input-err')

            let p = document.createElement('p')
            p.classList.add('wrong-data')
            p.innerText = 'A senha está incorreta'

            wrong.append(p)
        }
        else {
            wrong.remove()
            pass.classList.remove('input-err')

            const response = await request.json()

            localStorage.setItem("user", JSON.stringify(response))

            setTimeout(() => {
                window.location.replace('/pages/home/index.html')
            }, 4000);
        }
        
    }

    catch (err) {
    }
}

import { toastRegister } from "./toast.js"

async function register(body) {

    try {
        const request = await fetch(baseURL + "users/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        if (request.ok === true) {
            const response = await request.json()
            let statusToast = 'Sua conta foi criada com sucesso!' 
            let messageToast = 'Agora você pode acessar os conteúdos utilizando seu usuário e senha na página de login: <a href="/pages/login/index.html">Acessar página de login</a>'

            const body = document.querySelector('body')
            const toast = toastRegister(statusToast, messageToast)

            body.append(toast)
            setTimeout(() => {
                toast.remove()

            }, 2000);

            setTimeout(() => {
                window.location.replace("/index.html")
            }, 4000);
        }
    }


    catch (err) {
        console.log(err)
    }
}



async function getProfileInfos () {

    const localStorage = getLocalStorage()


    try {
        const request = await fetch(baseURL + "users/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            }
        })
        const response = await request.json()
        return response
    } catch (err) {

    }

}

async function getPost () {

    const localStorage = getLocalStorage()


    try {
        const request = await fetch(baseURL + "posts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            }
        })
        const response = await request.json()
        return response
    } catch (err) {
    }
}

async function createPost (body) {

    const localStorage = getLocalStorage()

    try {
        const request = await fetch(baseURL + "posts/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(body)
        })
        const response = await request.json()
        return response
    } catch (err) {
    }


}

async function editPost (body, idPost) {
    const localStorage = getLocalStorage()
    
    try {
        const request = await fetch(baseURL + `posts/${idPost}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(body)
        })
        const response = await request.json()
        return response
    } catch (err) {
    }
}

async function deletePost (idPost) {
    const localStorage = getLocalStorage()
    
    try {
        const request = await fetch(baseURL + `posts/${idPost}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
        })

        if (request.ok === true) {
            let statusToast = 'Post deletado com sucesso!' 
            let messageToast = 'O post selecionado para exlusão foi deletado, a partir de agora não aparecerá no seu feed '

            const body = document.querySelector('body')
            const toast = toastRegister(statusToast, messageToast)

            body.append(toast)
            setTimeout(() => {
                toast.remove()

            }, 2000);
            const response = await request.json()

            return response

        }

    } catch (err) {
    }


}

export {
    login,
    register,
    getProfileInfos,
    getPost,
    createPost,
    editPost,
    deletePost
}
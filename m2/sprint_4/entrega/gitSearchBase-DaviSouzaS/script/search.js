const baseURL = 'https://api.github.com/'

function searchProfile() {
    const formSearchProfile = document.querySelector('.form-search-profile')

    const button = document.querySelector('button')

    const span = document.querySelector('.box-user-not-found')

    let pUserNotFound = document.createElement('p')
    pUserNotFound.innerText = 'Usuário não encontrado'
    pUserNotFound.classList.add('user-not-found')

    const input = document.querySelector('.search-profile') 

    input.addEventListener('keydown', () => {

        if(input.value.length + 1 > 0) {
            button.classList.add('button-search-profile-activated')
            button.classList.remove('button-search-profile')
        }

        if (input.value.length <= 0) {
            button.classList.remove('button-search-profile-activated')
            button.classList.add('button-search-profile')
        }
    })


    formSearchProfile.addEventListener('submit', async (event) => {
        event.preventDefault()

        const elementsForm = formSearchProfile.elements

        let result = elementsForm[0].value

        const requestProfile = await fetch(baseURL + `users/${result}`)
        const requestRepos = await fetch(baseURL + `users/${result}/repos`)

        if (requestProfile.ok === true && requestRepos.ok === true) {
            span.remove()

            button.innerHTML = `<img src="assets/spinner.svg" alt="loading-icon" class ="loading"></img>`
    
            setTimeout(() => {
                window.location.replace("/pages/profile/index.html")
            }, 3000);
        }
        else {
            span.appendChild(pUserNotFound)
        }

        requestSearchProfile(result)
        requestSearchRepos(result)
    })


}

searchProfile()

async function requestSearchProfile(profile) {

    try {
        const request = await fetch(baseURL + `users/${profile}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const response = await request.json()
        if (response.message === 'Not Found') {
        }
        else {
            localStorage.setItem("profile", JSON.stringify(response))
        }

        return response
    } catch (err) {
        console.log(err)
    }
}

async function requestSearchRepos(profile) {

    try {
        const request = await fetch(baseURL + `users/${profile}/repos`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const response = await request.json()

        if (response.message === 'Not Found') {
        }
        else {
            localStorage.setItem("repos", JSON.stringify(response))
        }

        return response
    } catch (err) {
        console.log(err)
    }
}

export {
    requestSearchProfile,
    requestSearchRepos
}


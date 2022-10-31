import { getProfile, getRepos} from "./localStorage.js"

function profileInfos() {

    const localStorage = getProfile()

    const head = document.querySelector('head')

    let title = document.createElement('title')
    title.innerText = localStorage.login

    head.appendChild(title)

    const profileBox = document.querySelector('.profile-box')
    
    let img = document.createElement('img')
    img.classList.add('profile_img')
    img.src = localStorage.avatar_url

    let span = document.createElement('span')
    span.classList = 'display-flflex-direction-column gap-14 info-box'

    let h1 = document.createElement('h1')

    if (localStorage.name === null) {
        h1.innerHTML = localStorage.login
    }
    else {
        h1.innerHTML = localStorage.name
    }
    
    let p = document.createElement('p')
    p.innerHTML = localStorage.bio

    span.append(h1, p)

    profileBox.append(img, span)

}

profileInfos()

function profileRepos() {

    const localStorage = getRepos()

    const listRepositories = document.querySelector('.list-repositories')

localStorage.forEach(element => {
    let li = document.createElement('li')
    li.classList.add('item-list-repositories')

    let h2 = document.createElement('h2')
    h2.innerHTML = element.name

    let pDesc = document.createElement('p')
    pDesc.innerHTML = element.description

    let spanButtons = document.createElement('span')
    spanButtons.classList = 'display-flex gap-16'

    let buttonRepository = document.createElement('button')
    buttonRepository.classList.add('button-default')
    buttonRepository.innerHTML = `<a href = "${element.svn_url}" class ="linkPage" target="_blank">Repositório</a>`

    let buttonDemo = document.createElement('button')
    buttonDemo.classList.add('button-default')
    buttonDemo.innerText = 'Demo'

    spanButtons.append(buttonRepository, buttonDemo)
    li.append(h2, pDesc, spanButtons)

    listRepositories.appendChild(li)
});
 
}

profileRepos()

function changeProfile () {
    const buttonChangeProfile = document.querySelector('.button-change-profile')

    buttonChangeProfile.addEventListener('click', () => {
        localStorage.clear()
        window.location.replace("/index.html")
    })

}

changeProfile()

export {
    profileInfos,
    profileRepos
}



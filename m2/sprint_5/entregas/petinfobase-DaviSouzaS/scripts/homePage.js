import { getLocalStorage } from "./localStorage.js"
import { getProfileInfos, getPost, createPost} from "./api.js"
import { openModal, modalBg, openModalLogout } from "./modals.js"
import { createPostForm, editPostForm, deletePostForm } from "./forms.js"

function checkPermission()  {

    const user = getLocalStorage()

    if(user === "") {
        window.location.replace('/index.html')
    }
}

checkPermission()

async function profileImage() {

    const profileInfos = await getProfileInfos()

    let spanProfileBox = document.querySelector('.profile-box')

    const profileImg = document.createElement('img')
    profileImg.classList.add('profile-img')
    profileImg.src = profileInfos.avatar
    profileImg.alt = 'foto de perfil'

    spanProfileBox.appendChild(profileImg)

    
    profileImg.addEventListener('click', () => {
        openModalLogout(profileInfos)

        let modalLogoutBg = document.querySelector('.logout-bg')
        
        modalLogoutBg.addEventListener('click', () => {
            modalLogoutBg.remove()
        })
    })
}

profileImage()

async function renderPosts() {
    const ProfilePosts = await getPost()
    const main = document.querySelector('.post-list')

    main.innerHTML = ""

    ProfilePosts.forEach(async element =>  {
    let divPost = document.createElement('div')
    divPost.classList = "display-flex flex-direction-column gap-18 post-container"

    let divPostBox = document.createElement('div')
    divPostBox.classList = "post-box display-flex flex-direction-column gap-18"

    let divProfileInfo = document.createElement('div')
    divProfileInfo.classList = "display-flex justify-content-space-between"

    let spanProfileInfo = document.createElement('span')
    spanProfileInfo.classList = "display-flex align-items-center gap-18"

    let img = document.createElement('img')
    img.src = element.user.avatar
    img.classList.add('profile-img')

    let pName = document.createElement('p')
    pName.classList.add('username-post')
    pName.innerText = element.user.username

    let pBar = document.createElement('p')
    pBar.classList.add('bar-post')
    pBar.innerText = '|'

    let pDate = document.createElement('p')
    pDate.classList.add('date-post')
    pDate.innerText = element.createdAt

    let spanButton = document.createElement('span')

    let buttonEdit = document.createElement('button')
    buttonEdit.classList.add('edit-button')
    buttonEdit.innerText = "Editar"

    buttonEdit.addEventListener('click', () => {
        const formEdit = editPostForm(element)
        openModal(formEdit)
    })

    let buttonDelete = document.createElement('button')
    buttonDelete.classList.add('delete-button')
    buttonDelete.innerText = "Excluir"

    buttonDelete.addEventListener('click', () => {
        const deleteBtn = deletePostForm(element)
        openModal(deleteBtn)
    })

    let divPostInfo = document.createElement('div')
    
    let h2 = document.createElement('h2')
    h2.classList.add('title-user-post')
    h2.innerText = element.title

    let pDesc = document.createElement('p')
    pDesc.classList.add('content-post')
    pDesc.innerText = element.content
    
    let divOpenPost = document.createElement('div')

    let buttonOpenPost = document.createElement('button')
    buttonOpenPost.classList = 'open-post-button'
    buttonOpenPost.innerText = 'Acessar publicação'

    buttonOpenPost.addEventListener('click', () => {
        const OpenPostBtn = openPost(element)
        openModal(OpenPostBtn)
    })

    const validationUser = await getProfileInfos()
    const validationPost = element.user.id

    spanProfileInfo.append(img, pName, pBar, pDate)

    if (validationPost === validationUser.id) {
        spanButton.append(buttonEdit, buttonDelete)
    }

    divProfileInfo.append(spanProfileInfo, spanButton)
    divPostInfo.append(h2, pDesc)
    divOpenPost.append(buttonOpenPost)
    divPost.append(divProfileInfo, divPostInfo, divOpenPost)

    main.append(divPost)
    });
}

renderPosts()

function addPost () {
    const buttonCreatePost = document.querySelector('.create-post')

    buttonCreatePost.addEventListener('click', async () => {
        const formCreate = createPostForm()

        openModal(formCreate)
        
    })
}

addPost()

function openPost ({title, content, createdAt, user}) {

    let modalBox = document.createElement('div')
    modalBox.classList = 'modal-box post-open-box'

    let divInfo = document.createElement('div')
    divInfo.classList = 'display-flex justify-content-space-between align-items-center'

    let spanInfo = document.createElement('span')
    spanInfo.classList = 'display-flex gap-18 align-items-center'

    let spanProfileInfo = document.createElement('span')
    spanProfileInfo.classList = 'display-flex align-items-center gap-10'

    let img = document.createElement('img')
    img.src = user.avatar
    img.classList.add('profile-img')

    let pName = document.createElement('p')
    pName.classList.add('username-post')
    pName.innerText = user.username

    let pBar = document.createElement('p')
    pBar.classList.add('bar-post')
    pBar.innerText = '|'

    let pDate = document.createElement('p')
    pDate.classList.add('date-post')
    pDate.innerText = createdAt

    let button = document.createElement('button')
    button.classList.add('button-close-modal')
    button.innerText = 'X'

    button.addEventListener('click', () => {
        modalBg.remove()
        modalBg.innerHTML = ''
    })

    let divContent = document.createElement('div')
    
    let h2Title = document.createElement('h2')
    h2Title.classList = 'title-post-open title-user-post'
    h2Title.innerText = title

    let pContnent = document.createElement('p')
    pContnent.classList.add('content-post')
    pContnent.innerText = content

    spanProfileInfo.append(img, pName)
    spanInfo.append(spanProfileInfo, pBar, pDate)
    divInfo.append(spanInfo, button)
    divContent.append(h2Title, pContnent)
    modalBox.append(divInfo, divContent)

    return modalBox
}

export {
    renderPosts
}
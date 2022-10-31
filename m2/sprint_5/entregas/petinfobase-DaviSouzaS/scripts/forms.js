import {renderPosts} from "./homePage.js"
import {createPost, editPost, deletePost} from "./api.js"
import { closeModal } from "./modals.js"

function createPostForm () {

    let modalBox = document.createElement('div')
    modalBox.classList = 'modal-box create-post-modal'
    
    let span = document.createElement('span')
    span.classList = "display-flex justify-content-space-between create-post-header"

    let h2 = document.createElement('h2')
    h2.innerText = "Criando novo post"

    let button = document.createElement('button')
    button.classList.add('button-close-modal')
    button.innerText = "X"

    closeModal(button)

    span.append(h2, button)

    let pBtnCancel = document.createElement('p')
    pBtnCancel.classList.add('button-cancel')
    pBtnCancel.innerText = 'Cancelar'

    let form = document.createElement('form')
    form.classList = "display-flex flex-direction-column"

    form.insertAdjacentHTML("beforeend", `
    <label for="title" class = "labal-input-modal">Título do post</label>
        <input type="text" id="title" placeholder="Digite o título aqui..." required>

        <label class = "content-post-lable" for="content" class = "labal-input-modal">Conteúdo do post</label>
        <input class = "content-post-input" type="text" id="content" placeholder="Desenvolva o conteúdo do post aqui..." required>

        <div class="display-flex flex-end">
            <span class="display-flex gap-18">
                <p class = "button-cancel">Cancelar</p>
                <button class = "button-publish" type="submit">Publicar</button>
            </span>
    </div>
    `)

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const inputsCreatePost = [...event.target]

        const newPost = {}

        inputsCreatePost.forEach(({id, value}) => {
            if (id) {
                newPost[id] = value
            }
        })

        await createPost(newPost)
        await renderPosts()

    })
    modalBox.append(span, form)
    return modalBox
}

function editPostForm ({title, content, id}) {
    let modalBox = document.createElement('div')
    modalBox.classList = 'modal-box edit-post-modal'
    
    let span = document.createElement('span')
    span.classList = "display-flex justify-content-space-between"

    let h2 = document.createElement('h2')
    h2.innerText = "Edição"

    let button = document.createElement('button')
    button.classList.add('button-close-modal')
    button.innerText = "X"

    closeModal(button)

    span.append(h2, button)

    let form = document.createElement('form')
    form.classList = "display-flex flex-direction-column"

    form.insertAdjacentHTML("beforeend", `
    <label class = "labal-input-modal modal-edit-lable" for="title-post">Título do post</label>
    <input type="text" id="title" placeholder="Digite o título aqui..." value="${title}">

    <label class ="content-post-lable" for="post-content">Conteúdo do post</label>
    <input class = "input-edit-content" type="text" id="content" placeholder="Desenvolva o conteúdo do post aqui..." value="${content}">

    <div class="display-flex flex-end">
        <span class="display-flex gap-18">
            <p class = "button-cancel">Cancelar</p>
            <button class = "button-save-editions" type="submit">Salva Alterações</button>
        </span>
    </div>
    `)

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const inputsCreatePost = [...event.target]

        const newPost = {}

        inputsCreatePost.forEach(({id, value}) => {
            if (id) {
                newPost[id] = value
            }
        })
        await editPost(newPost, id)
        await renderPosts()

    })
    modalBox.append(span, form)
    return modalBox
}

function deletePostForm ({id}) {
    let modalBox = document.createElement('div')
    modalBox.classList = 'modal-box delete-post-form'
    
    let span = document.createElement('span')
    span.classList = "display-flex justify-content-space-between"

    let h2 = document.createElement('h2')
    h2.innerText = "Confirmação de exclusão"

    let button = document.createElement('button')
    button.classList.add('button-close-modal')
    button.innerText = "X"

    let paragraph1 = document.createElement('p')
    paragraph1.classList.add('title-delete-post')
    paragraph1.innerText = 'Tem certeza que deseja excluir este post?'

    let paragraph2 = document.createElement('p')
    paragraph2.classList.add('p-delete-post')
    paragraph2.innerText = 'Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir'

    closeModal(button)

    span.append(h2, button)

    let div = document.createElement('div')
    div.classList.add('display-flex')

    let spanButton = document.createElement('span')
    spanButton.classList = 'display-flex gap-18'

    let pCancel = document.createElement('p')
    pCancel.classList.add('button-cancel')
    pCancel.innerText = 'Cancelar'

    let buttonDelete = document.createElement('button')
    buttonDelete.classList.add('button-delete-post')
    buttonDelete.innerText = 'Sim, excluir este post'

    buttonDelete.addEventListener("click", async () => {
        await deletePost(id)
        await renderPosts()

    })
    spanButton.append(pCancel, buttonDelete)
    div.appendChild(spanButton)
    modalBox.append(span, paragraph1, paragraph2, div)
    return modalBox
}


export {
    createPostForm,
    editPostForm,
    deletePostForm
}
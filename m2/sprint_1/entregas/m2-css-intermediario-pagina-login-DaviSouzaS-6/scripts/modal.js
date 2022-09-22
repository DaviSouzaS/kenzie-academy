/* <section class="modal">
        <h2>Recuperação de senha</h2>

        <button class="close__modal">X</button>

        <p>Digite seu e-mail no campo abaixo, clique no link</p>

        <p>enviado para sua caixa de e-mail e crie outra senha.</p>

        <div>
            <input class="input__data input__modal" type="email" placeholder="Digite seu e-mail aqui...">

            <button class="button__sign__in button__confirm" >Confirmar</button>
        </div>
    </section> */

function createModal () {

    let tagSection = document.createElement('section')
    let tagH2 = document.createElement('h2')
    let tagButtonClose = document.createElement('button')
    let tagP1 = document.createElement('p')
    let tagP2 = document.createElement('p')
    let tagDiv = document.createElement('div')
    let tagInput = document.createElement('input')
    let tagButtonConfirm = document.createElement('button')


    tagSection.classList.add('modal')

    tagH2.innerText = 'Recuperação de senha'

    tagButtonClose.classList.add('close__modal')
    tagButtonClose.innerText = 'X'

    tagP1.innerText = 'Digite seu e-mail no campo abaixo, clique no link'

    tagP2.innerText = 'enviado para sua caixa de e-mail e crie outra senha.'

    tagInput.classList = 'input__data input__modal'
    tagInput.type = 'email'
    tagInput.placeholder = 'Digite seu e-mail aqui...'

    tagButtonConfirm.classList = 'button__sign__in button__confirm'
    tagButtonConfirm.innerText = 'Confirmar'

    tagDiv.append(tagInput, tagButtonConfirm)
    tagSection.append(tagH2, tagButtonClose, tagP1, tagP2, tagDiv)


    return tagSection
}

const tagDivBgModal = document.createElement('div')
tagDivBgModal.classList.add('modal__bg')

function addModal () {
    

    console.log(tagDivBgModal)

    const modalButton = document.getElementById('frogot__pass')
    const mainContainer = document.getElementById('main__container')

    modalButton.addEventListener('click', function () {
        const modal = createModal()
        const modalBg = tagDivBgModal.appendChild(modal)

        mainContainer.appendChild(tagDivBgModal)
        closeModal()
    })
}

addModal()

function closeModal () {

    const closeModalButton = document.querySelector('.close__modal')
    const modalPage = document.querySelector('.modal')


    closeModalButton.addEventListener ('click', function () {
        modalPage.remove()
        tagDivBgModal.remove()
    })
}


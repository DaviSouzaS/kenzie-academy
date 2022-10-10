const modal = () => {

    let divModalBox = document.createElement('div')
    divModalBox.classList = "bg-modal display-flex display-flex-center display-flex-justify-center"

    let sectionModal = document.createElement('section')
    sectionModal.classList = "display-flex display-column gap-30 modal-box modal-box-mobile modal-animation"

    let divModalTop = document.createElement('div')
    divModalTop.classList = "display-flex display-flex-direction-row display-space-between"

    let pTitleModal = document.createElement('p')
    pTitleModal.classList.add("modal-title")
    pTitleModal.innerText = "Registro de valor"

    let buttonCloseModal = document.createElement('button')
    buttonCloseModal.classList.add("button-close-modal")
    buttonCloseModal.innerText = "X"

    let pModalText = document.createElement('p')
    pModalText.classList.add('modal-text')
    pModalText.innerText = "Digite o valor e em seguida aperte no botão referente ao tipo do valor"

    let formModal = document.createElement('form')
    formModal.classList = "display-flex display-column form-modal"

    formModal.innerHTML = `<label class="modal-text-title-2" for="insert-value">Valor</label>`

    let inputModal = document.createElement('input')
    inputModal.classList.add('input-add-value')
    inputModal.type = "number"
    inputModal.placeholder = "R$ 00,00"
    inputModal.id = "insert-value"
    inputModal.required = "required"
   
    let divTypeValue = document.createElement('div')
    divTypeValue.classList = "display-flex gap-15 display-flex-center display-modal-flex display-column-mobile"

    let divTypeValueTitle = document.createElement('div')
    divTypeValueTitle.classList = "display-modal-flex display-mobile-start type-value-mobile"

    let pTypeValueTitle = document.createElement('p')
    pTypeValueTitle.classList.add('modal-text-title-2')
    pTypeValueTitle.innerText = "Tipo de valor"

    let divButtonsBoxCategory = document.createElement('div')
    divButtonsBoxCategory.classList = "display-modal-flex display-column-mobile buttons-category gap-mobile-12"

    divButtonsBoxCategory.innerHTML = 
    `<input class="button-entry" type="radio" hidden id="entry" value="0" name="valueType" required>
    <label class="display-modal-flex button-category-form button-category-form-mobile center-iten button-category" tabindex="0" for="entry">Entrada</label>
    
    <input class="button-out" type="radio" hidden id="out" value="1" name="valueType" required>
    <label class= "display-modal-flex button-category-form button-category-form-mobile center-iten button-category" tabindex="0" for="out">Saída</label>`

    let divButtonsBox = document.createElement('div')
    divButtonsBox.classList = "display-flex display-flex-end gap-15 buttons-modal-mobile"

    let buttonCancel = document.createElement('button')
    buttonCancel.classList = 'button-default button-cancel-modal'
    buttonCancel.innerText = "Cancelar"

    let buttonInsertValue = document.createElement('button')
    buttonInsertValue.type = 'submit'
    buttonInsertValue.classList = "button-default button-insert-value"
    buttonInsertValue.innerText = "Inserir valor"

    let divBoxForm = document.createElement('div')
    divBoxForm.classList = 'display-flex display-column gap-30'
    

    divButtonsBox.append(buttonCancel, buttonInsertValue)
    divTypeValueTitle.appendChild(pTypeValueTitle)
    divTypeValue.append(divTypeValueTitle, divButtonsBoxCategory)
    divBoxForm.append(inputModal, divTypeValue, divButtonsBox)
    formModal.append(divBoxForm)
    divModalTop.append(pTitleModal, buttonCloseModal)
    sectionModal.append(divModalTop, pModalText, formModal)
    divModalBox.appendChild(sectionModal)

    return divModalBox
} 

const modalWay = modal()

const body = document.querySelector('body')

const openModal = () => {
    let buttonRegisterValue = document.querySelector('.button-register-value')
    let withoutValues = document.querySelector('.without-values')

    buttonRegisterValue.addEventListener('click', function () {
        body.append(modalWay)
        createValues()
        closeModal()
    })

    withoutValues.addEventListener('click', function () {
        body.append(modalWay)
        createValues()
        closeModal()
    })
}

openModal()

const closeModal = () => {

    const closeModalButton = document.querySelector('.button-close-modal')
    const cancelModalButton = document.querySelector('.button-cancel-modal')

    closeModalButton.addEventListener('click', function () {
        modalWay.remove()
    })

    cancelModalButton.addEventListener('click', function () {
        modalWay.remove()
    })
}

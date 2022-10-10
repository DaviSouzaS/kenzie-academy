function createValues () {
    const modal = document.querySelector('.bg-modal')
    const formModal = document.querySelector('.form-modal')
  
    formModal.addEventListener('submit', (event) => {
        event.preventDefault()

        const input = document.querySelector('.input-add-value')
        const buttonEntry = document.querySelector('.button-entry')
        const buttonOut = document.querySelector('.button-out')

        buttonEntry.addEventListener('click', () => {
            let newValue = {
                value: Number(input.value),
                categoryID: Number(buttonEntry.value)
            }
            insertedValues.push(newValue)
        })

        buttonOut.addEventListener('click', () => {
            let newValue = {
                value: Number(input.value),
                categoryID: Number(buttonOut.value)
            }
            insertedValues.push(newValue)
        })

        modal.remove()

        filterList()
    })
}


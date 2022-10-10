const html = document.querySelector('html')

function beDark () {
    const darkModeButton = document.querySelector('.dark-mode') 
    const darkModeImg = document.querySelector('.img-darkMode')

    darkModeButton.addEventListener('click', function () {

        html.classList.toggle('dark-theme')
        darkModeImg.classList.toggle('moon-ico')

        const userPreference = localStorage.getItem('darktheme')

        if (!userPreference) {
            localStorage.setItem('darktheme', true)
        }

        if (userPreference) {
            localStorage.removeItem('darktheme')
        }

        if(darkModeImg.classList.contains('moon-ico')) {
            darkModeImg.src = './assets/img/moon.svg'
        }

        else {
            darkModeImg.src = './assets/img/sun.svg'
        }
    })
}

beDark()

function darkLocalStorage () {
    const userPreference = localStorage.getItem('darktheme')

    if(userPreference) {
        html.classList.toggle('dark-theme')
    }
}

darkLocalStorage()
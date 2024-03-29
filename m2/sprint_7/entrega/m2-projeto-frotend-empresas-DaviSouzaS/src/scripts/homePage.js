import { getSectors, getCompanies, getCompaniesBySector } from "./requests.js";
import { openHeaderMenu } from "./header.js"

async function renderSectors () {

const sectorsOptions = document.querySelector('.business-sectors')

const sectors = await getSectors()

sectors.forEach(item => {
    let option = document.createElement('option')
    option.innerText = item.description
    option.value = item.description

    sectorsOptions.appendChild(option)
});

sectorsOptions.addEventListener('change', (event) => {
    let selectedSector = event.target.value

    if (selectedSector !== 'select-sectors') {
        filterCompanies(selectedSector)
    }
    else {
        renderAllCompanies()
    }
})

}

renderSectors()

async function renderAllCompanies() {
    const companies = await getCompanies()

    const companiesList = document.querySelector('.companies-list')

    companiesList.innerHTML = ''
    companies.forEach(item => {
        let li = document.createElement('li')

        let pName = document.createElement('p')
        pName.innerText = item.name

        let pHours = document.createElement('p')
        pHours.innerText = item.opening_hours

        let pSector = document.createElement('p')
        pSector.innerText = item.sectors.description

        li.append(pName, pHours, pSector)

        companiesList.appendChild(li)
    });

}

renderAllCompanies()

async function filterCompanies(sector) {
    const companiesList = document.querySelector('.companies-list')
    companiesList.innerHTML = ''

    const filter = await getCompaniesBySector(sector)

    filter.forEach(item => {
        let li = document.createElement('li')

        let pName = document.createElement('p')
        pName.innerText = item.name

        let pHours = document.createElement('p')
        pHours.innerText = item.opening_hours

        let pSector = document.createElement('p')
        pSector.innerText = item.sectors.description

        li.append(pName, pHours, pSector)

        companiesList.appendChild(li)
    })
}


function createMenuHeaderIcons () {

    const menuIconBox = document.querySelector('.menu-icon-box')

    const menuIcon = document.createElement('img')
    menuIcon.src = '/src/assets/menuIcon.svg'
    menuIcon.alt = 'menu-icon'
    
    menuIconBox.appendChild(menuIcon)

    const closeMenuIcon = document.createElement('img')
    closeMenuIcon.src = '/src/assets/closeIcon.svg'
    closeMenuIcon.alt = 'close-modal-icon'

    openHeaderMenu(closeMenuIcon, menuIcon)
}

createMenuHeaderIcons()
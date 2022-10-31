import { filterPosts } from "./filterPosts.js"


export function renderCategoryButtons () {

    const categories = ['Todos','Pintura','Decoração','Organização','Limpeza','Segurança','Reforma','Aromas']

    const categoriesList = document.querySelector('.category-lists')


    categories.forEach(iten => {
        let li = document.createElement('li')
        li.classList.add('category-button')
    
        li.innerText = iten

        categoriesList.appendChild(li)
    })

    let buttons = document.querySelectorAll('.category-button')
  
    filterPosts(buttons)
}



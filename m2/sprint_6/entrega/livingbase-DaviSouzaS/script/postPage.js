import { getPostId } from "./requests.js";
import { renderCategoryButtons } from "./categoriesButtons.js";

renderCategoryButtons()

async function renderPost () {
    
    const post = await getPostId()
    const boxPost = document.querySelector('.box-post-open')

    let divTitleBox = document.createElement('div')
    divTitleBox.classList = 'title-post-box display-flex align-items-center'

    let div = document.createElement('div')
    div.classList = 'container display-flex flex-direction-column gap-32'

    let h2 = document.createElement('h2')
    h2.classList.add('title-post-open')
    h2.innerText = post.title

    let pDesc = document.createElement('p')
    pDesc.classList.add('post-desc')
    pDesc.innerText = post.description

    div.append(h2, pDesc)
    divTitleBox.appendChild(div)

    let main = document.createElement('main')
    main.classList.add('container')

    let img = document.createElement('img')
    img.classList.add('principal-img-post')
    img.src = post.image

    let pContent = document.createElement('p')
    pContent.innerText = post.content

    main.append(img, pContent)

    boxPost.append(divTitleBox, main)

    const backHomePage = document.querySelector('.back-home-button')
    backHomePage.addEventListener('click', () => {

        localStorage. removeItem('postID')
        window.location.replace("/pages/home/index.html")
    })
}

renderPost()

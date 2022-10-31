import { renderCategoryButtons } from "./categoriesButtons.js";
import { getPosts } from "./requests.js";

renderCategoryButtons()


async function renderPosts () {

    const  PostInfos = await getPosts()
    const news = PostInfos.news
    const postList = document.querySelector('.post-lists')

    news.forEach(post => {
        let div = document.createElement('div')

        let imgPost = document.createElement('img')
        imgPost.classList.add('img-post')
        imgPost.src = post.image

        let h3Titile = document.createElement('h3')
        h3Titile.classList.add('title-post')
        h3Titile.innerText = post.title

        let pDesc = document.createElement('p')
        pDesc.classList.add('desc-post')
        pDesc.innerText = post.description

        let pButtonPost = document.createElement('p')
        pButtonPost.classList.add('button-post')
        pButtonPost.innerText = 'Acessar conteúdo'

        pButtonPost.addEventListener('click', () => {

            localStorage.setItem("postID", JSON.stringify(post.id))

            window.location.replace("/pages/post/index.html")
        })

        div.append(imgPost, h3Titile, pDesc, pButtonPost)

        postList.appendChild(div)
    })
}

renderPosts()


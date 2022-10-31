import { getPosts } from "./requests.js"

export async function filterPosts (btnCategory) {
    const listPosts = document.querySelector('.post-lists')
    
    const posts = await getPosts()
    const postNews = posts.news

    postNews.forEach(item => {
        // console.log(item.category)
    });


   btnCategory.forEach(button => {

    button.addEventListener('click', () => {
        // console.log(button.innerText)

    })

   })

    
}


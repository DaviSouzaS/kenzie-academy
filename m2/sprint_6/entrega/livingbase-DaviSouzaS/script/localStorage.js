export const getLocalStorage = () => {
    const postId = JSON.parse(localStorage.getItem ('postID')) || ''

    return postId
}
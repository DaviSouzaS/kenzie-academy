function getProfile () {
    const profile = JSON.parse(localStorage.getItem ('profile')) || ''

    return profile
}

function getRepos () {
    const repos = JSON.parse(localStorage.getItem ('repos')) || ''

    return repos
}

export {
    getProfile,
    getRepos
}
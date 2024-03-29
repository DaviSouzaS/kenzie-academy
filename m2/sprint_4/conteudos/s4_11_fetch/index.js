fetch("https://api.github.com/users/DaviSouzaS")
.then(function(response){return response.json()})
.then(function(responseJson){
    console.log(responseJson)
    document.body.insertAdjacentHTML("beforeend", `
    <div class="card">
        <img src="${responseJson.avatar_url}" alt="" />
        <h1>${responseJson.name}</h1>
        <p>${responseJson.bio}</p>
        <a href="${responseJson.blog}" target="_blank"> Acessar linkedin </a>
    </div>
`)
})

fetch("https://api.github.com/users/DaviSouzaS/repos")
.then(function (response) {return response.json();})
.then(function(responseJson){ responseJson.map(repository => {
    document.body.insertAdjacentHTML("afterend",`
    <div class="card">
     <h1>${repository.name}</h1>
     <a 
     href="${repository.html_url}"     
     target="_blank">
       Acessar repositório
     </a>
    </div>`);
})
   
})

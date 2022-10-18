// MÉTODO POST Create C 

async function registraUsuario() {

    const data = {
        username: "Kenzinho",
        email: "kenzinOA@mail.com",
        password: "123456"
    } // Criamos os dados para o registro em um objeto
    
    const options = {
        method: 'POST', // Indicamos o método
        headers: {
            'Content-Type': 'application/json', // Definimos o formato do body que enviaremos
        },
        body: JSON.stringify(data) // Passamos os dados para JSON e colocamos no body para enviarmos
    }
    
    const responseJSON = await fetch('http://localhost:3333/register', options)
    const response = await responseJSON.json()
  
    console.log(response)

}

registraUsuario()




// MÉTODO GET Read R 
async function pegaFilmes() {
    const responseJSON = await fetch('http://localhost:3333/movies') // Por padrão, o fetch executa o GET na URL
    const response = await responseJSON.json()
  
    console.log(response)
}

pegaFilmes()





// MÉTODO PATCH Update U 
async function atualizaFilme() {
    const data = {
        category: "Aventura"
    } // Indicamos o dado a ser atualizado e seu novo valor
    
    const options = {
        method: 'PATCH', // Indicamos o método
        headers: {
            'Content-Type': 'application/json', // Definimos o formato do body que enviaremos
        },
        body: JSON.stringify(data) // Passamos os dados para JSON e colocamos no body para enviarmos
    }
    
    const responseJSON = await fetch('http://localhost:3333/movies/66a58dd3-5583-4f7c-a1e3-18cbb4ea6dbe', options) // passamos o id do filme no final da URL
    const response = await responseJSON.json()
  
    console.log(response)
}

atualizaFilme()







// MÉTODO DELETE Delete D 
async function deletaFilme() {  

    const options = {
        method: 'DELETE' // Indicamos o método
    }
    
    await fetch('http://localhost:3333/movies/66a58dd3-5583-4f7c-a1e3-18cbb4ea6dbe', options) // passamos o id do filme no final da URL
}

deletaFilme()
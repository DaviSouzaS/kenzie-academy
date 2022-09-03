let elemento = document.getElementsByClassName('artigo')[0]

elemento.addEventListener('click', function(event){

    console.log('----> target', event.target) //O target pega a referência onde o evento iniciou

    console.log('----> currentTarget', event.currentTarget) //O current target trás a referência de onde está o evento
})



let elementLink = document.getElementsByClassName('linkpara')[0] 

elementLink.addEventListener('click', function(event){
     event.preventDefault() //Como o nome já diz, essa propriedade previne o que é Default de acontecer. 
     event.stopPropagation() // Essa propriedade para com a propagação
})
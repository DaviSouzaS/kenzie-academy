//Exercício 1 
const tiposDiversos =[1.5,"String",false,10]
const tiposDiversos2 =[true,"String","boolen",'10']
  
function qualTipoDeElemento(lista) {
  let testetipo = 0

  for (let i = 0; i < lista.length; i++) {

    testetipo = typeof(lista[i])

    //console.log(testetipo)

    if (typeof(lista[i]) == typeof(0)) {
      console.log(true + ' (Existem numbers nessa lista: ' + lista +')')
    }
    if (typeof(lista[i]) != typeof(0)) {
      console.log(false + ' (Não existem numbers nessa lista: ' + lista +')')
    }
    
  return testetipo
}
}
    

qualTipoDeElemento(tiposDiversos)
qualTipoDeElemento(tiposDiversos2)


//Exercício 2 

//Math.floor()  Aproxima um numero decimal para 'baixo' ex: 0.55 vira 0, 1.66 vira 1, e assim vai. 

//Math.random() * (4 - 1) + 1  Gera um número aleatorio sempre que a página é atualizada (Me parece que o número aleatorio está 'preso' entre 1,2 e 3).

//Math.floor(Math.random() * (4 - 1) + 1)  Então ''Math.random''está criando um número aleatório e "Math.floor" está fazendo o número aleatório ser aproximado.  

function onibusPremiado (passageiros) {

  let str =''

  let sorteio = Math.floor(Math.random() * (4 - 1) + 1) - 1 // Colocando o -1 eu resolvo o problema do incie 0, agora o sorteio ocorre ente 0, 1 e 2.

  for (let i = 0; i <= passageiros.length; i++) { //Não é necessário colocar -1 no length, afinal a condição de i == sorteio faz com que o retorno só ocorra se i tiver um valor igual a 0, 1 ou 2. Então por mais que o length resultaria em 3  que é undefined, esse valor não é retornado.
    str = passageiros[i]

    if (i == sorteio) { 

      return `O ganhador do bilhete premiado é ${str}`
    }
  }
}

let pessoas = ['João', 'Pedro', 'Lucas']

console.log(onibusPremiado(pessoas))



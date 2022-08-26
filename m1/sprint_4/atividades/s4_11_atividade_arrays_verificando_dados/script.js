//Exercício 1 
const tiposDiversos =[1.5,"String",false,10]
const tiposDiversos2 =[true,"String","boolen",'10']
  
function qualTipoDeElemento(lista) {
  let testetipo = 0

  for (let i = 0; i < lista.length; i++) {

    testetipo = typeof(lista[i])

    //console.log(testetipo)

    if (typeof(lista[i]) == typeof(0)) {
      console.log(true + ' (Existem numbers nessa lista: ' + tiposDiversos +')')
    }
    
  return testetipo
}
}
    

qualTipoDeElemento(tiposDiversos)
qualTipoDeElemento(tiposDiversos2)


//Exercício 2 


Math.floor(Math.random() * (4 - 1) + 1)




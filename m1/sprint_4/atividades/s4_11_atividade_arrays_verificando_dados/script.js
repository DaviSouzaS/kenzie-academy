//Exercício 1 
const tiposDiversos =[1.5,"String",false,10]
const tiposDiversos2 =[true,"String","boolen",'10']
  
function qualTipoDeElemento(lista)
    {
      if (typeof tiposDiversos[0] || typeof tiposDiversos[1]  || typeof tiposDiversos[2] || typeof tiposDiversos[3] || typeof tiposDiversos[4]) {
            return true
      }
    }
    

qualTipoDeElemento(tiposDiversos)
qualTipoDeElemento(tiposDiversos2)


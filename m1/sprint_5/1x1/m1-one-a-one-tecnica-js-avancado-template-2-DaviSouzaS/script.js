function encontraNum(listaDeNumeros, valorNumerico) {

        let numeroDeVezes = 0


    for (let i = listaDeNumeros.length -1; i >= 0; i--) {
console.log(listaDeNumeros[i])
        if(listaDeNumeros[i]!=valorNumerico){
            numeroDeVezes++
        }
    }

    return numeroDeVezes
}

let numeros = [1,2,3,4,5,6,7,8,9,2,2,2]
let numero = 2

console.log(encontraNum(numeros,numero))

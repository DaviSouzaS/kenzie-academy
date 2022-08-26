// comece a criar a sua função add na linha abaixo

//SOMA
function add (num1, num2) {
    return num1 + num2
}
console.log(add(3,5))



// comece a criar a sua função multiply na linha abaixo

//MULTIPLICAÇÃO
function multiply (num1, num2) {

    let result = 0

    for(let i = 1; i <= num2; i++ ) {

        result = add(num1,result)

    }
    return result
}
console.log(multiply(4,6))



// comece a criar a sua função power na linha abaixo

//POTÊNCIA
function power (x, n){ 
    
    let result = 1

    for(let i = 1; i <= n; i++ ) {

        result = multiply(x,result)

    }
    return result
}
console.log(power(3,4))



// comece a criar a sua função factorial na linha abaixo

//FATORIAL
function factorial (num) {

    let result = 1

    for (let i = num; i >= 1; i--){
        result = multiply(i, result) 
    }
    return result
}
console.log(factorial(5))





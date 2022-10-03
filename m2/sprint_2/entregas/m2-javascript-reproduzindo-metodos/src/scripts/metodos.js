const numberList = [5, 6, 9, 10, 21, 7, 9, 11]
console.log(numberList)

//Método map()
// const numberListMultiply = numberList.map((number => { return number * 2 }))

function metodoMap(array) {
    let newNumberList = []

    for (let i = 0; i < array.length; i++) {

        function callbackMap(index, list) {
            let value = list[index]
            return value * 2
        }

        newNumberList.push(callbackMap(i, array))
    }


    console.log(newNumberList)
}

metodoMap(numberList)



//Método filter()

// const numberListFilter = numberList.filter((evenNumber => { return evenNumber % 2 === 0 }))

function metodoFilter(array) {
    let listEvenNumbers = []

    for (let i = 0; i < array.length; i++) {

        function callbackFilter(index, list) {

            let itens = list[index]

            if (itens % 2 === 0) {
                return listEvenNumbers.push(itens)
            }
        }
        callbackFilter(i, array)
    }

    console.log(listEvenNumbers)
}

metodoFilter(numberList)



//Método find()
// const findIten = numberList.find(element => element > 9);
// console.log(findIten)

function callbackFind(element) {

    if (element > 9) {
        return true
    }
    else {
        return false
    }
}

function metodoFind(array, callback) {

    for (let i = 0; i < array.length; i++) {
        let iten = array[i]

        if (callback(iten) === true) {
            return iten
        }
    }
    return undefined
}

console.log(metodoFind(numberList, callbackFind))



//Metodo reduce()
// const reduceNumber = numberList.reduce((previousValue, currentValue) => {return previousValue + currentValue})
// console.log(reduceNumber)

function metodoReduce(array) {
    let valorInicial = 0
    let a = []
    for (let i = 0; i < array.length; i++) {

        function callbackReduce(index, array) {
            valorInicial += array[index]
            
            return valorInicial
        }
        console.log(callbackReduce(i, array))
    }
}

metodoReduce(numberList)



// Metodo includes()
// const includesNumbers = numberList.includes(7)
// console.log(includesNumbers)

function includes(element) {
    if (element === 7) {
        return true
    }
    else {
        return false
    }
}

function metodoIncludes(array, callback) {

    for (let i = 0; i < array.length; i++) {
        let iten = array[i]

        if (callback(iten) === true) {
            return callback(iten)
        }
    }
    return false
}

console.log(metodoIncludes(numberList, includes))



// Metodo IndexOf()
// const indexOfNumbers = numberList.indexOf(9, 0)

function indexOf(element) {

    if (element === 9) {
        return true
    }
    else {
        return false
    }

}

function metodoIndexOf(array, callback) {

    for (let i = 0; i < array.length; i++) {
        let iten = array[i]

        if (callback(iten) === true) {
            return i
        }

    }
    return -1
}

console.log(metodoIndexOf(numberList, indexOf))








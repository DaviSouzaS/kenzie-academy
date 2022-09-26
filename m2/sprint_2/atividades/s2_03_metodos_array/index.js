// let users = ["samuel", "júlia", "Camila", "João" ]

// console.log(users.__proto__)

// console.log(users.toString())

// console.log(users.join(" "))

const employeeBonus = [12, 14, 16, 23]
 
const currentEmployeeBonus = employeeBonus.map((data)=> { return data * 2 })

console.log(currentEmployeeBonus)
console.log(employeeBonus)

const valuesGreaterThanThirty = currentEmployeeBonus.filter((data)=> { return data > 30 })

console.log(valuesGreaterThanThirty)

const bonusSum = currentEmployeeBonus.reduce((previousValue, currentValue)=> { 
    return currentValue + previousValue 
   },5)

   console.log(bonusSum)
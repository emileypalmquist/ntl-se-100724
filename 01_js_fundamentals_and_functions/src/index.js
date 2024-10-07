//✅ Data Types
// Numbers, Strings, Booleans, Undefined, Null, Symbol, Objects, BigInt
// console.log(typeof 10.10)
// console.log("hello", 'world')
// true and false are booleans
// console.log(typeof false)
// const person = {
//   name: "Emiley",
//   age: 29
// }

// person.location = "San Jose"

// const arry = ['apples', 'bananas', 'celery']

//✅ Variables

// const - constant, can't be changed
// let - can be changed
// var - can be changed, has weird scoping, stick to let and const

let personName = 'Emiley'
// console.log(personName)
personName = 'Test'
// console.log(personName)

//✅ Equality Operators
// === == != !==
// console.log(5 !== 110)
// console.log(5 != '55')


//✅ Comparison Operators
// <, <=, > , >=
// console.log(10 < 11)

//✅ Logical Operators
// &&, ||, !, !!
let hello = 'hi'
// console.log("" || "hello")
// console.log(!hello)

// + - / * ** (PEMDAS)
// Paranthesis
// Exponents
// multiplication and division
// addition and subtraction

//✅ control flow
// if ('') {
//   console.log('truthy')
// } else {
//   console.log('falsey')
// }

// let temp = 80

// if (temp >= 100) {
//   console.log('go to the beach')
// } else if (temp >= 80 && temp < 100) {
//   console.log('go for a walk')
// } else if (temp >= 70 && temp < 80) {
//   console.log('go for a hike')
// } else {
//   console.log('too cold, stay inside')
// }

// console.log()

//✅ Create hello world using REGULAR functions



function helloWorld() {
  console.log('hello world')
  if (true) {
    let blockVariables = 'block scope'
    console.log(blockVariables)
  }
  let functionalVariables = 'function scope'
  // return functionalVariables
}

let globalVariables = 'global scope'
helloWorld()
console.log(globalVariables)
// console.log(functionalVariables)

// calculates the sum of two numbers
function addNums(num1, num2) {
  // let sum = num1 + num2
  // console.log(sum)
  return num1 + num2
}

addNums(2, 3)

//✅ Global Scope

//✅ Function Scope

//✅ Block Scope

//✅ BONUS: higher-order functions

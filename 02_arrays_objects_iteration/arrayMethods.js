// ✅ Array Iteration Methods
// higher order function - a function that either excepts or returns a function
    // What are callback functions?
    // a function that gets passed to another function as an argument
    // gets called by that function

    function callbackFunc() {
        console.log('I was called')
    }

    function higherOrderFunc(anotherFunct) {
        anotherFunct()
    }

    higherOrderFunc(callbackFunc)


    const dogs = [
        {id: 1, name: 'Bailey', breed: 'Yorkie', tricks: []},
        {id: 2, name: 'Daisy', breed: 'Golden Retriever'}, 
        {id: 3, name: 'Apollo', breed: 'Golden Retriever', tricks: []}
    ]
    // .forEach() - execute some prvided function for each element in the array
    function executedForEachElementInTheArray(dogObj) {
        console.log(`${dogObj.name} is a ${dogObj.breed}`)
        if (!dogObj.tricks) {
            dogObj.tricks = []
        }
        dogObj.tricks.push('sit')
        if (dogObj.breed === 'Golden Retriever') {
            dogObj.tricks.push('down')
        }
    }
    dogs.forEach(executedForEachElementInTheArray)
    console.log(dogs)
    // dogs.forEach((dogObj) => console.log(`${dogObj.name} is a ${dogObj.breed}`))
        
    // .map()
    // no curlies implicit return "name" () => "name"
    // with curlies explicit return "name" 
    // () => { 
    //     return "name"
    // }
    const newArry = dogs.map((dogObj) => {
        return dogObj.name
    } )
    console.log("map returned ", newArry)

    // .filter()
        // Shallow copy
    const goldens = dogs.filter((dogObj) => dogObj.breed === 'Golden Retriever')
    console.log(goldens)
    // .find()
    const firstGolden = dogs.find((dogObj) => dogObj.breed === 'Golden Retriever')
    console.log(firstGolden)

// 🚧 Break Out Activity 1:
const strings = ['hello', 'hi', 'world', 'potato']
/* 
    create a function that accepts an array of strings
    and prints out each element in the array if
    the string has more than 5 characters
*/



// 🚧 Break Out Activity 2:
const nums = [2, 3, 4]
/*  
    create a function that accepts an array of numbers 
    it will create a new array of the numbers squared 
    returns the new array of squared numbers
*/



// 🚧 Break Out Activity 3:
const numbers = [2, 7, 5, 3, 10, 4]
/* 
    create a function that accepts an array of numbers 
    it will return a new array with the numbers 
    from the array that are greater than 4
*/




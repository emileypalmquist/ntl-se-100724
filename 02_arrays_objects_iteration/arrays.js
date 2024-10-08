// ✅ Creating / Accessing Arrays

//   what are arrays?
// collections of data/ lists
//   define an array with several values
const firstArry = [1, 'hello', {name: 'Emiley'}]
          //  0     1       2
firstArry[1] = "hello world"
//   can contain a mix of data types
//   what is the technical term for these individual items?
// element
//   count items in an array
// console.log(firstArry.length)

// ✅ Modifying Arrays

// adding elements to an array
//    add element to end of array

firstArry.push('new element', 1000, {})

// add element to beginning of array
firstArry.unshift(100, 'hello', [])
// removing elements from an array
//   remove last element and return that element

firstArry.pop()
// look into: splice, slice

// ✅ Iterating Through Arrays
const dogs = ['Golden Retriever', 'Yorkie', 'Poodle', 'Maltese']
//   looping over arrays

//   for loop
for (let i = 0; i < dogs.length; i++) {
    console.log(`One dog breed is ${dogs[i]}`)
}

//   for...of loop

for (const dogBreed of dogs) {
    console.log(`One dog breed is ${dogBreed}`)
}

//   while loop
let i = 0

while (i < dogs.length) {
    console.log(dogs[i])
    i++
}




// ✅ Creating & Accessing Objects
// creating object literals
//   empty object (no key / value pairs)
const firstObj = {}

//   object with single property (one key / value pair)
const secondObj = {
    name: "Emiley"
}
//   object with multiple properties of different data types (multiple key / value pairs)
const dog = {
    name: 'Apollo',
    age: 2,
    tricks: ['sit', 'down', 'stay'],
    sit: () => {
        console.log('sit')
        return 'good boy'
    }
}

// accessing object properties
//   bracket notation (in what situations would we need to use this?)
// console.log(dog['name'])
//   dot notation (better for readability)
// console.log(dog.sit())
//   convert object properties and values into an array
// console.log(Object.entries(dog))
// Object.keys(dog)
// Object.values(dog)
// ✅ Modifying Objects

    // destructively
        //   adding a property
        dog.breed = 'Golden Retriever'
        // dog['breed'] = 'Golden Retriever'
        //   changing a property value
        dog.age = 3
        //   removing a property
        delete dog.tricks

    // nondestructively
        // use the spread operator {...} to create a clone of the original object...
        //   ...that you can then modify without altering the original object
        const copyDog = {...dog}
        copyDog.name = 'Daisy'


// ✅ Iterating Over Objects vs. Arrays

// what is the main distinction between looping and iterating?
// looping - counting to 60
// iterating - printing out each element in an array

//   for...in (iterate over keys of an object)
for (const key in dog) {
    console.log(dog[key])
}
//   for...of (iterate over values of an iterable object (e.g., array, string, etc.))
for (let value of Object.values(dog)) {
    console.log(value)
}

// for (let i=0; i< 5; i++) {
//     for (let j=0; j<5; j++) {
//         console.log(`j is ${j}`)
//     }
//     console.log(`i is at ${i}`)
// }

const grid = [
    [0,0,0],
    [1,1,1],
    [2,2,2]
]

for (let i = 0; i < grid.length; i++) {
    console.log(grid[i])
    const row = grid[i]
    for (let j=0; j< row.length; j++ ) {
        console.log(row[j])
    }
}
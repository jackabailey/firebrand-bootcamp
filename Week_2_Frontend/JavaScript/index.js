// JavaScript is similar to other programming languages...

let myName = "Jack"
let loc = "London"
let age = 19
let company = "Lloyds Banking Group"
let isWorking = true

// All variables always have a decleration and a definition...
// Decleration
let car; // Hovering over this shows let car: any. Meaning Java can assign any type of data to it
// Definition
car = "Tesla"
// These can also be done in the same line, using:
let myCar = "Ford Mondeo"
car = 5 // We can change the type of a variable by simply changing the assigned value
console.log(car)
console.log(typeof(car))

// This is an easy method of permutation in strings
console.log("Hello, my name is: " + myName)

// However we can perform inline formatting, which is VERY slightly faster, but more favourable.
console.log(`Hello, my name is: ${myName}`)
console.log(`We can also add other variables into the console: ${isWorking}`)
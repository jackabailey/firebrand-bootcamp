// JavaScript is similar to other programming languages...

let myName = "Jack"
let loc = "London"
let age = "Chicken"
let company = "Lloyds Banking Group"
let isWorking = true // A value of true will result in the number 1, false is 0

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

console.log("5" - 5) // JavaScript will automatically find another route or an alternative method instead of erroring out where possible
console.log("5" - 5) // It tries to manipulate the string, and couldn't so it resorted to maths instead.
console.log("5" + 5) // in this line, JS can add the strings together, so does so before resorting to maths

// This is an example of a roudning issue between binary values and regular numbers.
// This is because there are many recurring 0's, followed by a non-0 when using 0.2 for example.
let sum = 0.2 + 0.1
if (sum == 0.3){
    console.log("Woo!")
} else {
    console.log("Oh?")
}

// This is an easy method of permutation in strings
console.log("Hello, my name is: " + myName)

// However we can perform inline formatting, which is VERY slightly faster, but more favourable.
console.log(`Hello, my name is: ${myName}`)
console.log(`We can also add other variables into the console: ${isWorking}`)

// Simple age verifier

if (age < 18){
    console.log("You're not allowed in!")
} else if (age < 21){
    console.log("You are allowed in, with a young persons discount")
} else if (age > 65){
    console.log ("You're eligible for an older persons discount")
} else if (typeof(age) == Number){
    console.log("You're allowed in, but must pay full price")
} else {
    console.log("Not a valid age")
}

// An if statement is efficient up to 3 if/else statements, after which is becomes less efficient
// After this, we should use a switch case.
// An example of using a switch case.

switch (age) {
    case (age < 18):
        console.log("You're not allowed in!")
        break
    case (age < 21):
        console.log("You are allowed in, with a young persons discount")
        break
    case (age > 65):
        console.log("You're eligible for an older persons discount")
        break
    case (typeof(age)  == Number):
        console.log("You're allowed in, but must pay full price")
        break
    default:
        console.log("Invalid Entry")
        break
}


// For loop in JavaScript.
for (let i = 0; i < 10; i++){
    console.log(i)
}

// console.table creates a little table in the console which displays information in an array
console.table(["apples", "oranges", "bananas"])


// While loop in JavaScript
let counter = 0
while (counter != 10){
    console.log(counter)
    counter++
}

// do... while loop in For Loop
// A do will always run at least once, whereas a while wont.
let number = 100
do {
    console.log(number)
    number --
} while (number > 40);


// Defining a function in JavaScript
function birthday(){
    myDay = 26
    console.log(myDay)
} // Using functions allow us to keep our data and proghram more secure by keeping variables and operations seperate from the rest of the file unless explicitly accessed.


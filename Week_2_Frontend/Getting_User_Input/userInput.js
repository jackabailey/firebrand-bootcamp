let userInput = prompt("How old is Jack?")
console.log(userInput) // The number in console here will be black

if (userInput == 19){ // REMEMBER a double equals is a weak equality, and a triple equality is a strong equality. This means that with ==, JS will check for the valkue's existence, however === will check the value and the type.
    console.log("There was never any doubt")
    console.log(userInput) // The number in console here will be black too

} else {
    console.log("You clearly know nothing")
}


// An example of different equalities
number = "100"
console.log(number + 10) // 10010
console.log(number - 10) // 90
if(number === 123){
    console.log("The number is 100!")
} else if (number == 100){
    console.log("The number is 100, but the type isn't a number.")
}

let firstInput = prompt("Choose your first number") // Remember with these inputs, these naare taken into a string.
let secondInput = prompt("Choose your second number")

function confirmation(){
    console.log("Operation Complete")
}

function addition(numberOne, numberTwo){
    return numberOne + numberTwo
    confirmation()
}
function subtraction(numberOne, numberTwo){
    return numberOne - numberTwo
    confirmation()
}
function multiplication(numberOne, numberTwo){
    return numberOne * numberTwo
    confirmation()
}
function division(numberOne, numberTwo){
    return numberOne / numberTwo
    confirmation()
}

let answer = addition(firstInput, secondInput)
console.log(answer)
answer = subtraction(firstInput, secondInput)
console.log(answer)
answer = multiplication(firstInput, secondInput)
console.log(answer)
answer = division(firstInput, secondInput)
console.log(answer)

// We can also force a number to be entered (with a crash otherwise)
let myInput = +(prompt("Enter a number"))


function options() {
    let floor = prompt("Welcome to the lift. Which floor would you like?\nFloor One\nFloor Two\nFloor Three")
    if(floor == "Floor One") {
        floorOne()
    } else if(floor == "Floor Two"){
        floorTwo()
    }
}

function floorOne(){
    console.log("Welcome to Floor One")
}
function floorTwo(){
    console.log("Welcome to Floor Two")
}

options()
function confirmation(){
    console.log("The process has been completed")
}

function addition(numberOne, numberTwo){
    console.log(numberOne + numberTwo)
    // return numberOne + numberTwo
    confirmation()
}
function subtraction(numberOne, numberTwo){
    console.log(numberOne - numberTwo)
    // return numberOne - numberTwo
    confirmation()
}
function multiplication(numberOne, numberTwo){
    console.log(numberOne * numberTwo)
    // return numberOne * numberTwo
    confirmation()
}
function division(numberOne, numberTwo){
    console.log(numberOne / numberTwo)
    // return numberOne / numberTwo
    confirmation()
}

let firstInput = +(prompt("Choose your first number"))
let secondInput = +(prompt("Choose your second number"))

addition(firstInput, secondInput)
subtraction(firstInput, secondInput)
multiplication(firstInput, secondInput)
division(firstInput, secondInput)
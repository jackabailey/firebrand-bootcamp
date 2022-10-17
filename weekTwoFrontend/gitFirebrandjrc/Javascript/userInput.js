// let firstInput = +(prompt("What is your first number?"));
// let secondInput = +(prompt("What is your second number?")); // preferred solution
// // let secondInput = (prompt("What is your second number?") / 1); // okay solution

function confirmation() {
    console.log("The process has been completed");
}

// change the returns to console.logs()
// create a confirmation function
// call the confirmation function once the addtion, subtraction etc has finished console logging

function addition(numberOne, numberTwo) {
    console.log(numberOne + numberTwo);
    confirmation();
    // return numberOne + numberTwo;
}

addition(15,10);

function subtraction(numberOne, numberTwo) {
    console.log(numberOne - numberTwo);
    confirmation();
    // return numberOne - numberTwo;
}

subtraction(15,10);
function multiplication(numberOne, numberTwo) {
    console.log(numberOne * numberTwo);
    confirmation();
    // what will happen?
    // return numberOne * numberTwo;
}

function division(numberOne, numberTwo) {
    console.log(numberOne / numberTwo);
    confirmation();
    // what will happen?
    // return numberOne / numberTwo;
}

function options() {
    let input = prompt("Welcome to the lift, which floor would you like?\nFloor One\nFloor Two\nFloor Three");

    if(input == "Floor One")
    {
        floorOne(); // now, go to the function floorOne...
        
    }
    else if(input == "Floor Two")
    {
        floorTwo(); // now, go to the function floorTwo...
    }
    else if(input == "Floor Three")
    {
        floorThree();
    }
    else {
        console.log("That isn't option. Try again.");
        options();
    }
}

function floorOne() {
    console.log("Welcome to Floor One");
    let input = prompt("Which office do you want?\nOffice 101\nOffice 102")
    if(input == "Office 101")
    {
        office101();
    }
}

function floorTwo() {
    console.log("Welcome to Floor Two");
}

function floorThree() {
    console.log("Welcome to Floor Three");
}

// options();

// what should the parameters be in the brackets?
// let answer = addition(firstInput, secondInput);
// console.log(answer);
// confirmation(); // calling the function -> running the function





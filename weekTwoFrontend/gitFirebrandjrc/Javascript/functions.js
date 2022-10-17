// functions

let switchOn = true;

// two states of a light switch?
// on / off
// true / false
// 1 / 0

function lightSwitch() {
    if (switchOn == true) {
        console.log("Light is on. Expensive.");
        switchOn = false; // turn the light off
    } 
    else {
        console.log("Light is off. Cheaper.");
        switchOn = true; // turn the light on
    }
}

// TODO: Create two functions:
// TODO: Addition that takes two parameters
// TODO: Subtraction that takes two parameters
// TODO: console.log the result

function addition(numberOne, numberTwo) {
    // console.log(numberOne + numberTwo);
    
    return numberOne + numberTwo;
}

function subtraction(numberOne, numberTwo) {
    // console.log(numberOne + numberTwo);
    
    return numberOne - numberTwo;
}

let subtractionAnswer = subtraction(10, 4);

let answer = addition(2,4); // answer = 6
console.log(answer);

answer += addition(10, 4); // what's the answer here?
// +=, -=, *=, /=, %=
console.log(answer);
// addition(1, 2);

// TODO: Extension - return the result and console log the result instead in a new variable

// TODO: Extension's extension: Function that identifies an odd number


function oddNumber(numberOne) {
    if(numberOne % 2 == 0) {
        console.log("Even");
    }
    else if (numberOne % 2 != 0){
        console.log("You've got an odd one");
    }
    else {
        console.log("Not a number, silly")
    }
}

// the arrow function syntax
const printName = (firstName) => {
    // console.log(`Hello, ${firstName}`);
    return `Hello, ${firstName}`;
}

let information = printName("Jacob");
console.log(information);

// oddNumber("cheese");
oddNumber(11);

lightSwitch(); // what will the console say to me?
lightSwitch(); // what will the console say to me now?
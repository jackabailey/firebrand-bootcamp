//? 1. check pin -> what will this have in it?
    //* How do we check a pin?
    //* variable for pin, userInput (prompts)
    //* index.html

let userPin = 1234;
let userInput;

function checkPin() {
    userInput = prompt("Please input your pin:");
    if(userInput == userPin)
    {
        console.log("Welcome.");
        options();
    }
    else {
        console.log("Who are you?");
        // checkPin();
    }
}

function options() {
    console.log("You have reached the options function.");
    // which option do I want to start with?
}

checkPin(); 
// checkPin(); 









//? 2. options -> call this to return from a chosen option type
    // withdraw
    // deposit
    // check balance
    // change pin
    // cancel

// Variables needed?
    // Balance
    // Deposit amount
    // Withdraw amount
    // New pin

// Files needed?
    // cashMachine.js
    // index.html

//! Do not do the below but they are part of the cash machine
// mini-statement (we can't do that as we don't have a database)
// transfers (we can't do that as we don't have a database)

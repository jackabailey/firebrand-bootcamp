//! Functions of this cash machine
    //* Deposit
    //* Withdraw
    //* Check balance
    //* Change pin
    //* Cancel and return card

let pin = 1234
let balance = 6345.87
let cardBlocked = false;
function cashmachine(){
    console.log("Welcome to the 24-hour, fee charging, dodgy street corner cadh machine.")
    enterPIN()
}
function enterPIN(){
    PINAttempts = 0
    while (cardBlocked == false) {
        if (prompt("Please enter your PIN") == pin){
            options()
            break
        } else {
            console.log(`Incorrect PIN entered, you have ${3 - PINAttempts} attempts remaining`)
            PINAttempts ++
        }
        if (PINAttempts == 3) {
            console.log("Your card has been blocked for your security.")
            cardBlocked = true
        }
    }
    console.log("Thanks for using this very secure cash machine. Your card details have not been stolen ;)")
    returnCard()
}

function options(){
    let userChoice
    userChoice = +(prompt("Please choose from the following options:\n1. Withdraw Cash\n2. Deposit Cash\n3. Check Balance\n4. Change Pin\n5. Return Card"))
    switch(userChoice){
        case userChoice = 1:
            withdraw()
            break
        case userChoice =2:
            deposit()
            break
        case userChoice =3:
            console.log(`Your current balance is: £${getBalance()}`)
            break
        case userChoice =4:
            changePIN()
            break
        case userChoice =5:
            returnCard()
            break
        default:
            console.log("Invalid Choice, please try again")
    }
    options()
}

function withdraw(){
    let originalBalance = balance
    let amountToWithdraw
     while ((amountToWithdraw > balance) || (isNaN(amountToWithdraw))){
        amountToWithdraw = +(prompt("Enter an amount to wthdraw"))
     }
    balance -= amountToWithdraw
    console.log(`Your original balance was £${originalBalance}, and your balance after withdrawing £${amountToWithdraw} is £${balance}`)
    success()
}

function deposit(){
    let originalBalance = balance
    let amountToDeposit
    while(isNaN(amountToDeposit)){
        amountToDeposit = +(prompt("Enter an amount to deposit - And please don't lie as there's no verification within this function."))
    }
    balance += amountToDeposit
    console.log(`Your original balance was £${originalBalance}, and your balance after depositing £${amountToDeposit} is £${balance}`)
    success()
}

function getBalance(){
    return balance 
}

function changePIN(){
    let newPIN
    while ((newPIN > 9999 || newPIN < 1000) || (isNaN(newPIN))){
        newPIN = +(prompt("Please choose a new, 4-digit PIN"))
    }
    while (+(prompt("Please re-enter this PIN for verification.")) != newPIN){
        console.log("Incorrect PIN entry, please try again.")
        changePIN()
    }
    pin = newPIN
    success()
}

function returnCard(){
    console.log("Returning your card... (Imagine some star-wars style, hi-tech noise here) - The program will now abort")
    throw new Error()
}

function success(){
    console.log("Sucessful Transaction")
}

cashmachine()
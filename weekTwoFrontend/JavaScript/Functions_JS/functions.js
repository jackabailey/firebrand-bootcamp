// Functions for our simple site

let lightOn = true;
// The two states of a light switch are: ON / OFF - ie. TRUE / FALSE - ie. 1 / 0

function lightSwitch() {
    if (switchOn = true) {
        switchOn = false;
        console.log("The switch has been turned off");
    }
    if (switchOn = false) {
        switchOn = true;
        console.log("The switch has been turned on");
    }
}

lightSwitch();
lightSwitch();

function add(first, second){
    // console.log("Your numbers added together equals: " + (first + second));
    return first + second;
}

function subtract(first, second){
    // console.log("Your numbers added together equals: " + (first + second));
    return first - second;
}

function isOdd(number){
    console.log(typeof(number))
    if (typeof(number) != "number"){
        return ("Not a number, silly)")
    }
    else if (number % 2 == 0){
        return false;
    } else if (number % 2 == 1){
        return true;
    }
}

console.log(add(23, 7));
console.log(subtract(10, 5));
console.log(isOdd(12));


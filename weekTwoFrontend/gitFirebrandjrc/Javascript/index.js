let variable = true;
var otherVariable = true;

let globalVariable = true;

// let myAge; // this is still a global variable, just one without a value

function birthday() {
    let myAge = 57;
    console.log(myAge);
}

console.log(myAge);

birthday();

for (let i = 0; i < 5; i++) {
    console.log(i);
    my
    console.log(globalVariable);
}
console.log(i);
console.log(globalVariable);

for (var i = 0; i < 5; i++) {
    console.log(globalVariable);
    console.log(i);
}

console.log(i);
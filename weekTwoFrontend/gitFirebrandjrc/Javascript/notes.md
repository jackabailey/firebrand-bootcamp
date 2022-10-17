# JavaScript

* Fundamentals of JavaScript
* **Fun** with JavaScript
* Naming conventions
    * Camel, Pascal, Snake
* Arrays, Loops, Functions
* How it works with HTML
* OOP

* Testing with JavaScript
    * Unit Testing with Jest


# Fundamentals of JavaScript

* JavaScript is an inferred language -> huh?
* JavaScript is an interpreted language -> okaaaay
* JavaScript isn't compiled, which makes debugging simpler on the whole (more to come)

* JavaScript is a softly-typed language -> you don't have to / can't declare the data type you are going to use.
    * If you want to declare the type of data you're using, use [TypeScript](https://www.npmjs.com/package/typescript)

* We have three ways of declaring variables inside of JavaScript
1. let myName = "Jacob";
2. var myName = "Jacob";

3. const myName = "Jacob";   

* let and var are both variable declarations, we can change the values of the things stored inside of them
* const is a constant variable. We cannot change the value of the thing stored inside
    * Constants used in JavaScript don't always focus on the value, they focus on the property the value is held in

## Journey to the office

### Variables
**What could change on your journey to the office?**

* weather 
* traffic
* music
* coffee / tea / breakfast / foooood
* location
* companions
* lockdown
* transport type
* route
* timetable
* distance
    * scenic, fastest route, avoid tolls
* time
* clothes

### Constants
**What won't change on your journey to the office?**

* date of birth
* blood type
* place of birth

**index.js part one**

```js
let myName = "Jacob";
// let location = "Manchester";
let age = 57;
let company = "Firebrand LTD";
let employed = true;

// declaration
let car;
// definition
car = "Ford";
// declaration and definition
let house = true;

console.log(typeof car);

car = 5; // will this error? Or not? No, it'll be fine.
console.log(typeof car);

cheese = true; // bad practice
console.log(cheese);
// if we don't use let, javascript defaults to var
// let, since 2016, has been best practice for variable declaration

console.log(`Hello, my name is ${myName}`);
```

## JavaScript data types

* string -> string of text || characters
* number -> int && decimal
* bigNumber -> this is new from 2019
* boolean -> true || false
* null -> holds no value
* undefined -> value not defined

## Logical Operators

* AND &&
* OR ||
* XOR ^
* NOT !

![Truth Table](https://www.realdigital.org/img/228d4788d26e286b5706f6d644ddee8b.svg)

```js

let dayOfWeek = "Saturday";
let working = true;

if(dayOfWeek == "Saturday" && working == true)
{
    console.log("Set work alarm");
}
else if(dayOfWeek == "Saturday" && working == false)
{
    console.log("Turn off alarm, have a sleep in.")
}
else {
    console.log("Jacob needs to think of a better log comment")
}

let city = "Manchester";
let weather = "raining";

if(city == "Manchester" && weather == "raining")
{
    console.log("It's raining. That's for sure.")
}
```

## Switch Case

```js
let favouriteColour = "orange";

if(favouriteColour == "purple")
{
    console.log("Ooo, so close.");
}
else if(favouriteColour == "blue")
{
    console.log("Craziness.");
}
else if(favouriteColour == "orange")
{
    console.log("Correct choice.")
}
else {
    console.log("Pick a colour people know.");
}

// switch statement checks the value of the key that we want to use as the condition
// in our case here, we put favouriteColour in the (key)
switch (favouriteColour) {
    case "purple":
        console.log("Nice, but it's not the best");
        break; // in JavaScript... sometimes matters, sometimes doesn't
        // in Java, C#, Swift, C, C++, Ruby, VB, F#, the break matters
    case "blue":
        console.log("Meh, alright?");
        break;
    case "orange":
        console.log("Fantastic choice. Do you know Jacob? His favourite is orange too!");
        break;
    default:
        // our else statement in an if
        console.log("Did you give me a colour? Check again.");
        break;
}

let carBrand = "Ford";

switch (carBrand) {
    case "Mercedes":
    case "Audi":
    case "Volkswagen":
    case "Mini":
        console.log("German Car Brand");
        break;
    case "OG Mini":
    case "Morgan":
    case "Aston Martin":
        console.log("British Car Brand");
        break;
    case "Ford":
    case "Lincoln":
        console.log("USA. USA. USA.");
        break;

    default:
        console.log("Huh?");
        break;
}

```

## Arrays

* An array is a collection of items
* An array is ordered with an index -> starting at 0
* Unlike other languages, JavaScript arrays can hold multiple data types inside of the array **try to avoid doing this**
* We have different methods that we can use on arrays in JavaScript [Find out more here - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

```js
let favouriteArtists = ["James Blunt", "Miley Cyrus", "Lady Gaga", "George Ezra"]; 
                //          0               1               2           3

console.table(favouriteArtists);

// push adds to the end of the array
favouriteArtists.push("Hannah Montana");
favouriteArtists.push("Queen");
favouriteArtists.push("Elton John");
favouriteArtists.push("Frank Sinatra");
favouriteArtists.push("Elvis");

console.table(favouriteArtists);

let total = favouriteArtists.length;
// total = 9

console.log(favouriteArtists.length);

favouriteArtists.pop(); // this removes from the back of the array
// in our case, Elvis has left the building
// pop simply removes the last item, you don't put anything in the ()


console.table(favouriteArtists);

// for loop consists of three things:
// 1. Initialisation -> let i = 0;
// 2. Condition -> i < favouriteArtists.length;
// 3. Iterator -> i++, i--

for (let i = 0; i < favouriteArtists.length; i++) {
    console.log(favouriteArtists[i]);
    // the index is 0-7
    // length is 8
}

let counter = 0;
while (counter < favouriteArtists.length) {
    console.log(favouriteArtists[counter]); // will do exactly the same as [i] in the for loop
    counter++; // 
}

let number = 0;
// a do while will run AT LEAST once. Always. 
do {
    console.log(number);
    number++;
} while (number < 10);
```

## Variable Scoping

```js
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
```

## Functions


## Equality

```js

let number = "123";

if(number === 123)
{
    console.log("The number 123, nice.")
}
else if (number == 123)
{
    console.log("The value is correct. The type, not so much.");
}

```

## Prompts

```js

// let userInput = prompt("How old is Jacob?");
// console.log(userInput);
// console.log(57);

// == && ===
// == checks the value of the variable only
// === checks the value and the type of the variable

function addition(numberOne, numberTwo) {
    // console.log(numberOne + numberTwo);
    
    return numberOne + numberTwo;
}

if(userInput == 57)
{
    console.log("Good choice.")
    userInput = prompt("Why was there any doubt?");
    console.log(userInput);
}
else {
    console.log("Well, you think he is older? Wow. Rude.");
}

```
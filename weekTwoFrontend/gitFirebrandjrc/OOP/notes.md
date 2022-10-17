# OOP

## Objects
**objects.js**

```js
// creating a player object
// objects have key : value pairs

let firstName = "Andy";
let lastName = "Murray";

let player = {
    firstName : "Andy", 
    lastName : "Murray",
    sport : "Tennis",
    titles : 46, // trailing comma
    
    grunt() {
        console.log("In Scottish: ugh.");
    },

    // create a method / function that increases my title by 1 each time
    titleWin() {
        this.titles++;
    }

    //? Extra: scandal. Create a method that decreases my title victory by 1 each time.

}

player.titleWin();
player.titleWin();
player.titleWin();

player.titles += 1;

console.table(player);
console.log(player);

console.log(player.firstName); // Andy
console.log(player.lastName); // Murray
console.log(player.titles);
```

## Classes

**classes.js**
```js
// firstName, lastName, sport, titles, grunt, titleWin - 16 lines per object

// classes are templates / blueprints for our objects
// all objects created from the class will have the same attributes, just different values

// capital letter for the class... all classes use Pascal casing

class Player {
    // JavaScript uses a constructor method -> inside of the constructor method, we add values as parameters that are user defined... methods do not go in the constructor
    constructor(firstName, lastName, titles, sport) { // sport is missing from the constructor parameter list
        this.firstName = firstName;
        this.lastName = lastName;
        this.titles = titles;
        // this.sport = "Tennis"; // default value of tennis
        this.sport = sport; // now it is defined when creating a new object
    } 
}

// new instance of the class Player is created below
let andyMurray = new Player("Andy", "Murray", 46, "Tennis"); // object -> instance of class Player
console.table(andyMurray);
let rafaelNadal = new Player("Rafael", "Nadal", 92, "Tennis"); // object -> instance of class Player
console.table(rafaelNadal); 
let leonardo = new Player("Leonardo", "Turtle", 0,"Turtle Tennis");
let donatello = new Player("Donatello", "Turtle", 0, "Turtle Tennis");
let michelangelo = new Player("Michelangelo", "Turtle", 0, "Turtle Tennis");
let raphael = new Player("Raphael", "Turtle", 0, "Turtle Tennis");
raphael.sport = "Cricket";

let tom = new Player("Tom", "Riddle", 0, "Quidditch");

console.table(tom);

console.log(raphael.sport);
```

## Inheritance

* Inheriting all methods and properties from another class
    * Parent class || Base class
    * Child class || Derived class
// Classes are blueprints for objects. All objects used or created from the class, will have the same attributes but with different values

class Player {
    // in JS, we use a constractor method. Inside a constructor method, we add values and parameters that  are user defined.
    constructor(firstName, lastName, titles) { // sport is missing from the constructor parameter list
        // Windows 10 password reset. $reset - Windows 10 reset, with my name and staff ID - System name, your name, staff id
        this.firstName = firstName
        this.lastName = lastName
        this.titles = titles
        this.sport = sport
    }
}

let andyMurray = new Player("Andy", "Murray", 46, "Tennis")
let jeffBezos = new Player("Jeff", "Bezos", 0, "Professionally Ripping you off")
let jeffreyBanks = new Player("Jeff", "Banks", 0, "Do we even know?")
console.log(andyMurray)
console.log(jeffBezos)
console.log(jeffreyBanks)
class Animal {
    constructor(name, type, hunger, tiredness, strength)
    {
        this.name = name;
        this.type = type;
        this.hunger = hunger;
        this.tiredness = tiredness;
        this.strength = strength;
    }
}

class Bird extends Animal {
    constructor(name, type, hunger, tiredness, strength, beak) {
        super(name, type, hunger, tiredness, strength);
        this.beak = beak; // I don't know what value we are going to put here
    }
}

let steve = new Animal("Steve", "Rhino", 100, 100, 100);
let zazu = new Bird("Zazu", "Hornbill", 100, 100, 0, true);
console.table(zazu);

// TODO: Create a class of your own choice:
    // TODO: 5 methods (total), each will either increment or decrement values inside of the class
    // TODO: Create 3 derived classes

// Fighter base class
    // name, strength, hunger, tiredness
    // workout()
// Kicker, biter, puncher derived classes
    // kick(), bite(), punch()

// TODO: Extra: Research? Can we simply inherit methods from the base class in JavaScript? Do we need the super keyword?
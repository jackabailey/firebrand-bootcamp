class Animal {
    constructor(name, type, hunger, tiredness, strength) {
        this.name = name
        this.type = type
        this.hunger = hunger
        this.tiredness = tiredness
        this.strength = strength
    }
}

class Bird extends Animal {
    constructor(name, type, hunger, tiredness, strength, beak) {
        super(name, type, hunger, tiredness, strength)
        this.beak = beak;
    }
}

let steve = new Animal("Steve", "Rhino", 0, 100, 100)
let zazu = new Bird("Zazu", "Hornbill", 100, 100, 0, true)
let dave = new Animal("Dave", "Elephant", 80, 5, 60)
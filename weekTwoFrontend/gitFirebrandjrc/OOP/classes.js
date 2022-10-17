class Player {
    constructor(firstName, lastName, titles, sport) { // sport is missing from the constructor parameter list
        this.firstName = firstName;
        this.lastName = lastName;
        this.titles = titles;
        // this.sport = "Tennis"; // default value of tennis
        this.sport = sport; // now it is defined when creating a new object
    }

    titleWin() {
        this.titles++;
    }

}



// new instance of the class Player is created below
let andyMurray = new Player("Andy", "Murray", 46, "Tennis"); // object -> instance of class Player
let rafaelNadal = new Player("Rafael", "Nadal", 92, "Tennis"); // object -> instance of class Player
let leonardo = new Player("Leonardo", "Turtle", 0,"Turtle Tennis");
let donatello = new Player("Donatello", "Turtle", 0, "Turtle Tennis");
let michelangelo = new Player("Michelangelo", "Turtle", 0, "Turtle Tennis");
let raphael = new Player("Raphael", "Turtle", 0, "Turtle Tennis");
let tom = new Player("Tom", "Riddle", 0, "Quidditch");

tom.titleWin(); // 1
tom.titleWin(); // 2
tom.titleWin(); // 3
tom.titleWin(); // 4
tom.titleWin(); // 5
console.log(tom.titles);
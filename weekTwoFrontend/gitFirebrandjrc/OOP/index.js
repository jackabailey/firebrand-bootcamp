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
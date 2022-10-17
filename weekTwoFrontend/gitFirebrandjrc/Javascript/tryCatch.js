const firstName = "Jehcub";

try {
    firstName = "Bob";
    console.log(firstName);
} 
catch (error) {
    // console.log(error);
    console.log(error.name);
    console.log(error.message);
}
// continue as normal
console.log("I'm a really important message. I NEED to run.")
console.log("I'm a really important message. I NEED to run.")
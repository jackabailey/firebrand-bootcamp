const headOne = document.getElementById("headOne")
const body = document.body // THIS IS THE BODY OF THE PAGE
const button1 = document.getElementById("btn1")
let darkMode = false
let lloydsgreen = "#006A4D"
headOne.style.color = "blue"

function darkBackground() {
    body.style.backgroundColor = "black"
    headOne.style.color = "white"
}
function lightBackground() {
    body.style.backgroundColor = "White"
    headOne.style.color = "blue"
}

function toggleDarkMode() {
    darkMode = !darkMod
    if (darkMode) {
        darkBackground()
    } else {
        lightBackground()
    }
}

button1.addEventListener("click", () =>{
    toggleDarkMode()
}
) 
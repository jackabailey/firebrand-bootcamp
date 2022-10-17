const headerOne = document.getElementById("headerOne");
const buttonOne = document.getElementById("buttonOne");

buttonOne.addEventListener("click",  () => {
    headerOne.textContent = "Bob";
    console.log(headerOne.textContent)
})
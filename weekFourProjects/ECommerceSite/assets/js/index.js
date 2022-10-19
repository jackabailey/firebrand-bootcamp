const cartButton = document.getElementById("cartButton");
const someAirAddToCart = document.getElementById("someAirAddToCart");
const cleanAirAddToCart = document.getElementById("cleanAirAddToCart");
const proAirReserve = document.getElementById("proAirReserve");

cartButton.addEventListener("click",
    function(){
    console.log("Cart has been Clicked");
    }
)
someAirAddToCart.addEventListener("click",
    function(){
    console.log("Some Air Added to Cart");
    }
)
cleanAirAddToCart.addEventListener("click",
    function(){
    console.log("Clean Air Added to Cart");
    }
)
proAirReserve.addEventListener("click",
    function(){
    console.log("Pro Air Reserved in Cart for 10 Minutes");
    }
)
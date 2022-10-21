// Elements and Load Functions
const someAirAddToCart = document.getElementById("someAirAddToCart");
const cleanAirAddToCart = document.getElementById("cleanAirAddToCart");
const proAirReserve = document.getElementById("proAirReserve");

// Showcase
someAirAddToCart.addEventListener("click",
    function(){
    console.log("Some Air Added to Cart");
    increaseCartCount();
    cart.push(SomeAir);
    addSomeAirToCartView();
    }
)
cleanAirAddToCart.addEventListener("click",
    function(){
    console.log("Clean Air Added to Cart");
    increaseCartCount();
    cart.push(CleanAir);
    addCleanAirToCartView();
    }
)
proAirReserve.addEventListener("click",
    function(){
    console.log("Pro Air Reserved in Cart for 10 Minutes");
    increaseCartCount();
    cart.push(ProAir);
    addProAirToCartView();
    }
)
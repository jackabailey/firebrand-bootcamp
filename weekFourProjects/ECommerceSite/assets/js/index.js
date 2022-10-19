// Air Class Creation and Item Definition
class AirMakeup {
    constructor(nitrogen, oxygen, helium, poisonusGasses){
        this.nitrogen = nitrogen;
        this.nitrogen = oxygen;
        this.nitrogen = helium;
        this.nitrogen = poisonusGasses;
    }
}

class Product {
    constructor(){
        this.type;
        this.price;
        this.hasMultiMemberDiscount;
        this.SubscriptionType;
    }
}
class SomeAir extends Product {
    constructor() {
        super(type = "Some Air", price = 19.99, hasMultiMemberDiscount = true, SubscriptionType = 1)
    }
}
class CleanAir extends Product{
    constructor() {
        super(type = "Clear Air", price = 349.99, hasMultiMemberDiscount = false, SubscriptionType = 0)
    }
}
class ProAir extends Product{
    constructor() {
        super(type = "Some Air", price = 19.99, hasMultiMemberDiscount = true, SubscriptionType = 1)
        AirMakeup = new AirMakeup(90, 5, 3, 2); // Temporary - To change later
    }
}
// 0 - None
// 1 - Monthly
// 2 - Yearly


// Elements and Load Functions
const cartButton = document.getElementById("cartButton");
const someAirAddToCart = document.getElementById("someAirAddToCart");
const cleanAirAddToCart = document.getElementById("cleanAirAddToCart");
const proAirReserve = document.getElementById("proAirReserve");
const cartCountBadge = document.getElementById("cartCountBadge");
count = 0;
const cart = [];
document.addEventListener("DOMContentLoaded", function(){
    hideCartBadge(); // Immediate hide of Cart Badge
});


// Showcase
cartButton.addEventListener("click",
    function(){
    console.log("Cart has been Clicked");
    }
)
someAirAddToCart.addEventListener("click",
    function(){
    console.log("Some Air Added to Cart");
    increaseCartCount();
    cart.push(SomeAir);
    }
)
cleanAirAddToCart.addEventListener("click",
    function(){
    console.log("Clean Air Added to Cart");
    increaseCartCount();
    cart.push(CleanAir);
    }
)
proAirReserve.addEventListener("click",
    function(){
    console.log("Pro Air Reserved in Cart for 10 Minutes");
    increaseCartCount();
    cart.push(ProAir);
    }
)


// Cart
function checkBadgeCount(){
    if (count > 0) {
        showCartBadge();
        console.log("Show Cart Count")
    } else {
        hideCartBadge();
        console.log("Hide Cart Count")
    }
}
function hideCartBadge(){
    cartCountBadge.className = 'd-none';
}
function showCartBadge(){
    cartCountBadge.className = "badge bg-danger"
}
function increaseCartCount(){
    console.log("Count Increased to" + count);
    console.log(cart);
    count ++;
    checkBadgeCount();
    cartCountBadge.innerHTML = count;
}
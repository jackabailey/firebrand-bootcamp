
// Elements and Load Functions

const cartButton = document.getElementById("cartButton");
const someAirAddToCart = document.getElementById("someAirAddToCart");
const cleanAirAddToCart = document.getElementById("cleanAirAddToCart");
const proAirReserve = document.getElementById("proAirReserve");
const cartCountBadge = document.getElementById("cartCountBadge");
count = 0;
document.addEventListener("DOMContentLoaded", function(){
    hideCartBadge(); // Immediate hide of Cart Badge
});


// Showcase

cartButton.addEventListener("click",
    function(){
    console.log("Cart has been Clicked");
    increaseCartCount();
    }
)
someAirAddToCart.addEventListener("click",
    function(){
    console.log("Some Air Added to Cart");
    increaseCartCount();
    }
)
cleanAirAddToCart.addEventListener("click",
    function(){
    console.log("Clean Air Added to Cart");
    increaseCartCount();
    }
)
proAirReserve.addEventListener("click",
    function(){
    console.log("Pro Air Reserved in Cart for 10 Minutes");
    increaseCartCount();
    }
)


// Cart

function checkBadgeCount(){
    if (count > 0) {
        showCartBadge();
    } else {
        hideCartBadge();
    }
}
function hideCartBadge(){
    cartCountBadge.className = 'd-none';
}
function showCartBadge(){
    cartCountBadge.className = "badge bg-danger"
}
function increaseCartCount(){
    console.log("Count Increased");
    count ++;
    checkBadgeCount();
    cartCountBadge.innerHTML = count;
}
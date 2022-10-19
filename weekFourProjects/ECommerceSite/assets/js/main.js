const cartButton = document.getElementById("cartButton");
const cartCountBadge = document.getElementById("cartCountBadge");

    count = 0;

const cart = [];
document.addEventListener("DOMContentLoaded", function(){
    checkBadgeCount(); // Immediate hide of Cart Badge if not 1+
});
cartButton.addEventListener("click",
    function(){
    console.log("Cart has been Clicked");
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

function increaseCartCount(){
    console.log("Count Increased to " + count);
    console.log(cart);
    count++;
    cartCountBadge.innerHTML = count;
    checkBadgeCount();
}
function hideCartBadge(){
    cartCountBadge.className = 'd-none';
}
function showCartBadge(){
    cartCountBadge.className = "badge bg-danger"
}
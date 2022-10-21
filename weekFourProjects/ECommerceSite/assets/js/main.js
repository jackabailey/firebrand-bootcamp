const cartDisplay = document.getElementById("cartDisplay");
const cartButton = document.getElementById("cartButton");
const cartCountBadge = document.getElementById("cartCountBadge");
const someAirInCart = document.getElementById("SomeAirInCart");
const cleanAirInCart = document.getElementById("CleanAirInCart");
const proAirInCart = document.getElementById("ProAirInCart");
const someAirCount = document.getElementById("SomeAirCount");
const cleanAirCount = document.getElementById("CleanAirCount");
const proAirCount = document.getElementById("ProAirCount");
const cartTotalVisible = document.getElementById("cartTotal");
const addCouponButton = document.getElementById("addCouponbtn");
const coupon = document.getElementById("personalCoupon");
const cartSubTotalVisible = document.getElementById("cartSubTotal");
const cartShippingHandlingVisible = document.getElementById("cartShippingHandling");
const taxTotalVisible = document.getElementById("taxTotal");
const cartEmptyAlert = document.getElementById("cartEmptyAlert")

count = 0;
someAirCt = 0;
cleanAirCt = 0;
proAirCt = 0;
cartSubTotal = 0.00;
couponDiscount = 0;
taxCalc = 0;
shipFee = 10.00;
cartTotal = 0.00;
cartHidden = true;
enteredCoupon = "";
cartEmptyAlert.className = "d-none";

addCouponButton.addEventListener("click",
    function(){
        if (coupon.value != "AIR"){
            console.log(coupon.value);
            alert("Invallid Coupon!")
        } else {
            enteredCoupon = coupon.innerHTML;
            calcCouponDiscount();
        }
    });

const cart = [];
document.addEventListener("DOMContentLoaded", function(){
    checkBadgeCount(); // Immediate hide of Cart Badge if not 1+
    hideCart();
    
});
cartButton.addEventListener("click",
    function(){
    console.log("Cart has been Clicked - Toggle Cart Display");
    cartEmptyAlert.className = "d-none";
    if (count < 1){
        cartEmptyAlert.className = "alert alert-danger beautiful";
        console.log("count =" + count)
    } else {
        toggleCart();
    }
    }
)

function toggleCart(){
    if (cartHidden){
        showCart();
        cartHidden = false;
    } else {
        hideCart();
        cartHidden = true;
    }
}

function hideCart(){
    cartDisplay.className ='d-none';
}
function showCart(){
    cartDisplay.className = "px-4 px-lg-0";
}

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
    cartCountBadge.className = "badge bg-danger";
}

function addSomeAirToCartView(){
    someAirInCart.className = '';
    someAirCt ++;
    cartSubTotal += 19.99;
    console.log(cartSubTotal);
    updateCartSubTotal();
    someAirCount.innerHTML = someAirCt;
}
function addCleanAirToCartView(){
    CleanAirInCart.className = ''
    cleanAirCt ++;
    cartSubTotal += 349.99;
    console.log(cartSubTotal);
    updateCartSubTotal();
    cleanAirCount.innerHTML = cleanAirCt;
}
function addProAirToCartView(){
    ProAirInCart.className = ''
    proAirCt ++;
    cartSubTotal += 9499.99
    console.log(cartSubTotal);
    updateCartSubTotal();
    proAirCount.innerHTML = proAirCt;
}

function updateCartSubTotal(){
    cartSubTotalVisible.innerHTML = "£" + cartSubTotal.toFixed(2);
    updateCartShippingHandling();
    updateCartTotal();
}
function updateCartTax(){
    taxCalc = (cartSubTotal + shipFee) * 0.35;
    taxTotalVisible.innerHTML = "£" + taxCalc.toFixed(2);
}
function updateCartShippingHandling(){
    if (count > 14) {
        shipFee = 0.00;
        cartShippingHandlingVisible.innerHTML = "£0.00"
    }
}
function calcCouponDiscount(){
    couponDiscount = cartSubTotal * 0.99;
    updateCartSubTotal();
    updateCartTotal();
}
function updateCartTotal(){
    updateCartTax();
    cartTotal = (cartSubTotal + taxCalc + shipFee) - couponDiscount;
    cartTotalVisible.innerHTML = "£" + cartTotal.toFixed(2);
}
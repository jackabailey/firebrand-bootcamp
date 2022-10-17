class Pizza {
    constructor(base, topping, size, price){
        this.base = base
        this.topping = topping
        this.size = size
        this.price = price
    }
    getBase(){
        return this.base
    }
}

myPizza = new Pizza("Thin", "Ham and Pineapple", 16, 12.99)
m = myPizza.getBase()
console.log(m)
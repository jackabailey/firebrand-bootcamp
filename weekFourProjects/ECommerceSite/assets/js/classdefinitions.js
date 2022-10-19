// Air Class Creation and Item Definition

// 0 - None
// 1 - Monthly
// 2 - Yearly

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
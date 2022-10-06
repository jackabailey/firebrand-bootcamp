class Item {
    constructor(itemName, itemType) {
        this.isPickedUp = false
        this.isUsable = true
        this.isDamaged = false
        this.itemName = itemName
        this.itemType = itemType
    }
    pick(){
        this.isPickedUp = true
    }
    drop(){
        this.isPickedUp = false
    }
    toggleDamaged(){
        this.isDamaged != this.isDamaged
    }
    getDamageStatus(){
        return this.isDamaged
    }
    getItemStatus(){
        return this.isPickedUp
    }
    getUsableStatsus(){
        return this.isUsable
    }
}

class Weapon extends Item {
    constructor(itemName, itemType, dealableDamage, remainingUses, weaponType) {
        super(itemName, itemType)
        this.dealableDamage = dealableDamage
        this.remainingUses = remainingUses
        this.weaponType = weaponType
    }
    useWeapon(){
        this.remainingUses --
    }
    getRemainingUses(){
        return this.remainingUses
    }
    getDealableDamage(){
        return this.dealableDamage
    }
    getWeaponType(){
        return this.weaponType
    }
}

class Sword extends Weapon{
    constructor(itemName, itemType, dealableDamage, remainingUses, weaponType, length, isDull) {
        super(itemName, itemType, dealableDamage, remainingUses, weaponType)
        this.length = length
        this.isDull = isDull
    }
}
longswordJack = new Sword("Jack's Longsword", "Weapon", 12, 450, "Sword", 11, true)
console.table(longswordJack)
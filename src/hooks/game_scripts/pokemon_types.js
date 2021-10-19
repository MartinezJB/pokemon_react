export class Type {
    constructor (strong, weak){
        this.strong = strong
        this.weak = weak;
    }
    isWeakAgainst(type) {
        return type == this.weak;
    };
    isStrongAgainst(type) {
        return type == this.strong;
    }
}

/*******************************************************************
 ****************************** TYPES ******************************
 ********************************************************************/

// const fire = new Type("grass", "water");
// const water = new Type("fire", "planta");
// const grass = new Type("water", "fire");
// const normal = new Type("", "fighting");
// const fighting = new Type("normal", "flying");
// const flying = new Type("fighting", "rock");
// const rock = new Type("flying", "water");
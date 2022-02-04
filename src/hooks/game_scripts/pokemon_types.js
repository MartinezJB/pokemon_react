class Type {
    constructor (name, strong, weak){
        this._name = name
        this.strong = strong
        this.weak = weak;
    }
    get name() {
        return this._name;
    } 
    isWeakAgainst(type) {
        return type === this.weak;
        
    };
    isStrongAgainst(type) {
        return type === this.strong;
    }
}

/*******************************************************************
 ****************************** TYPES ******************************
 ********************************************************************/

const fire = new Type("fire", "grass", "water");
const water = new Type("water", "fire", "grass");
const grass = new Type("grass", "water", "fire");
const normal = new Type("normal", "", "fighting");
const fighting = new Type("fighting", "normal", "flying");
const flying = new Type("flying", "fighting", "rock");
const rock = new Type("rock", "flying", "water");
const steel = new Type("steel", "rock", "fire");

export const pokemonTypes = [
    fire,
    water,
    grass,
    normal,
    fighting,
    flying,
    rock,
    steel
]

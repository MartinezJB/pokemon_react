export class Movement {
    constructor(name, type, damage, pp) {
        this.name = name;
        this.type = type;
        this.damage = damage;
        this.max_pp = pp;
        this.actual_pp = pp;
    }

    harmTo(enemy) {
        if(enemy.type.isWeakAgainst(this.type)){
            return this.damage * 1.35;
        }else if(enemy.type.isStrongAgainst(this.type)){
            return this.damage * 0.65;
        }else{
            return this.damage;
        }
    }
}


/*******************************************************************
 ****************************** MOVES ******************************
 ********************************************************************/
/*


const Flamethrower = new Movement (
    "Flamethrower",
    "fire",
    60,
    25
);
const SteelTail = new Movement (
    "Steel tail",
    "steel",
    60,
    25
);
const TornadoWings = new Movement (
    "Tornado wings",
    "flying",
    60,
    25
);
const MegaPunch = new Movement (
    "Mega punch",
    "normal",
    60,
    25
);

*/
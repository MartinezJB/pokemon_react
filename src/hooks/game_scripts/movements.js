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
            return 1.40;
        }else if(enemy.type.isStrongAgainst(this.type)){
            return 0.60;
        }else{
            return 1;
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
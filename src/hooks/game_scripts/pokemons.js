export class Pokemon {
    constructor(name, type, hp, damagePoints, defensePoints, movements = [], imageFront, imageBack, lvl = 1){
        this.name = name;
        this.type = type;
        this.max_life = hp;
        this.actual_life = this.max_life;
        this.urlImgFront = imageFront;
        this.urlImgBack = imageBack
        this.damagePoints = damagePoints;
        this.defensePoints = defensePoints;
        this.movements = movements;
        this.lvl = lvl;
        
    }
    attackEnemy(enemy, attack){
        if(attack.actual_pp > 0){
            attack.actual_pp -= 1;
            return enemy.sufferAttack(attack);
        }else{
            return "No quedan pp para este movimiento";
        }
    }

    sufferAttack(attack){
        let finalHarm = Math.floor(attack.harmTo(this))
        if(finalHarm >= this.actual_life){
            this.actual_life = 0;
            return this.name + " está fuera de combate."
        }
        else{
            this.actual_life -= finalHarm;
            return this.name + " ha sufrido " + finalHarm + " puntos de daño."
        }
    }
}
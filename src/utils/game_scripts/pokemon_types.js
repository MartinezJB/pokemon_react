export class Type {
    constructor (name, strong, weak){
        this._name = name
        this.strong = strong
        this.weak = weak;
    }
    get name() {
        return this._name;
    } 
    isWeakAgainst(type) {
        return this.weak.includes(type);
        
    };
    isStrongAgainst(type) {
        return this.strong.includes(type);
    }
}

import Character from '../Character'

export default class Undead extends Character {
    constructor(level, type = 'Undead') {
        super(level, type);
        if (type === 'Undead') {
            this.type = type;
            this.attack = 40;
            this.defence = 10;
        } else {
            throw new Error('исключение - не Undead')
        }
    }
}
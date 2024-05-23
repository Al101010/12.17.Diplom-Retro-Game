import Character from '../Character'

export default class Swordsman extends Character {
    constructor(level, type = 'Swordsman') {
        super(level, type);
        if (type === 'Swordsman') {
            this.type = type;
            this.attack = 40;
            this.defence = 10;
        } else {
            throw new Error('исключение - неправильный ТИП')
        }
    }
}
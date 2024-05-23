import Character from '../Character'

export default class Vampire extends Character {
    constructor(level, type = 'Vampire') {
        super(level, type);
        if (type === 'Vampire') {
            this.type = type;
            this.attack = 25;
            this.defence = 25;
        } else {
            throw new Error('исключение - неправильный ТИП')
        }
    }
}
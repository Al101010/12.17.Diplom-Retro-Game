import Character from '../Character'

export default class Magician extends Character {
    constructor(level, type = 'Magician') {
        super(level, type);
        if (type === 'Magician') {
            this.type = type;
            this.attack = 10;
            this.defence = 10;
        } else {
            throw new Error('исключение - неправильный ТИП')
        }
    }
}
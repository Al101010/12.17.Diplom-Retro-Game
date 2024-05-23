import Character from '../Character'

export default class Bowman extends Character {
    constructor(level, type = 'Bowman') {
        super(level, type);
        if (type === 'Bowman') {
            this.type = type;
            this.attack = 25;
            this.defence = 25;
        } else {
            throw new Error('исключение - неправильный ТИП')
        }
    }
}
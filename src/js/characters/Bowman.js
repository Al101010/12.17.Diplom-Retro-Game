import Character from '../Character'

export default class Bowman extends Character {
    constructor(level, type = 'bowman') {
        super(level, type);
        if (type === 'bowman') {
            this.type = type;
            this.attack = 25;
            this.defence = 25;
        } else {
            throw new Error('исключение - не bowman')
        }
    }
}
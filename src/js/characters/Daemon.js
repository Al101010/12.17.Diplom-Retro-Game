import Character from '../Character'

export default class Daemon extends Character {
    constructor(level, type = 'Daemon') {
        super(level, type);
        if (type === 'Daemon') {
            this.type = type;
            this.attack = 10;
            this.defence = 10;
        } else {
            throw new Error('исключение - не Daemon')
        }
    }
}
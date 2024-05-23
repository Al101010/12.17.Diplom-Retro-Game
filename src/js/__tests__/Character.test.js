import Character from "../Character";

import Bowman from "../characters/Bowman";
import Daemon from "../characters/Daemon";
import Magician from "../characters/Magician";
import Swordsman from "../characters/Swordsman";
import Undead from "../characters/Undead";
import Vampire from "../characters/Vampire";

test('нельзя new Character', () => {
  expect(() => new Character(2)).toThrow('исключение - запрещено использовать new Character()');
});

// Bowman
test('если Bowman', () => {
    const result = new Bowman(3);
    const bowman = {health: 100, level: 3, type: 'Bowman', attack: 25, defence: 25};
    expect(result).toEqual(bowman);
});

test('или НЕ Bowman', () => {
    expect(() => new Bowman(3, 'generic')).toThrow('исключение - неправильный ТИП');
});

// Daemon
test('если Daemon', () => {
    const result = new Daemon(3);
    const daemon = {health: 100, level: 3, type: 'Daemon', attack: 10, defence: 10};
    expect(result).toEqual(daemon);
});

test('или НЕ Daemon', () => {
    expect(() => new Daemon(3, 'generic')).toThrow('исключение - неправильный ТИП');
});

// Magician
test('если Magician', () => {
    const result = new Magician(3);
    const magician = {health: 100, level: 3, type: 'Magician', attack: 10, defence: 10};
    expect(result).toEqual(magician);
});

test('или НЕ Magician', () => {
    expect(() => new Magician(3, 'generic')).toThrow('исключение - неправильный ТИП');
});

// Swordsman
test('если Swordsman', () => {
    const result = new Swordsman(3);
    const swordsman = {health: 100, level: 3, type: 'Swordsman', attack: 40, defence: 10};
    expect(result).toEqual(swordsman);
});

test('или НЕ Swordsman', () => {
    expect(() => new Swordsman(3, 'generic')).toThrow('исключение - неправильный ТИП');
});

// Undead
test('если Undead', () => {
    const result = new Undead(3);
    const undead = {health: 100, level: 3, type: 'Undead', attack: 40, defence: 10};
    expect(result).toEqual(undead);
});

test('или НЕ Undead', () => {
    expect(() => new Undead(3, 'generic')).toThrow('исключение - неправильный ТИП');
});

// Vampire
test('если Vampire', () => {
    const result = new Vampire(3);
    const vampire = {health: 100, level: 3, type: 'Vampire', attack: 25, defence: 25};
    expect(result).toEqual(vampire);
});

test('или НЕ Vampire', () => {
    expect(() => new Vampire(3, 'generic')).toThrow('исключение - неправильный ТИП');
});
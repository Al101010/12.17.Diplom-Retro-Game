/**
 * Entry point of app: don't change this
 */
import GamePlay from './GamePlay';
import GameController from './GameController';
import GameStateService from './GameStateService';

const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector('#game-container'));

const stateService = new GameStateService(localStorage);

const gameCtrl = new GameController(gamePlay, stateService);
gameCtrl.init();


// don't write your code here

// gamePlay.drawUi('prairie');

// import Bowman from './characters/Bowman'; const level_3 = new Bowman(3); console.log(level_3);

import Character from "./Character";

import Bowman from "./characters/Bowman";
import Daemon from "./characters/Daemon";
import Magician from "./characters/Magician";
import Swordsman from "./characters/Swordsman";
import Undead from "./characters/Undead";
import Vampire from "./characters/Vampire";

import { characterGenerator } from "./generators";
console.log(characterGenerator);
const playerTypes = [Bowman, Swordsman, Magician]; // доступные классы игрока
console.log(playerTypes);
const playerGenerator = characterGenerator(playerTypes, 2); // в данном примере персонажи игрока могут быть 1 или 2-ого уровней

const character1 = playerGenerator.next().value; // случайный персонаж из списка playerTypes с уровнем 1 или 2
console.log(character1.type); // magician

import Team from "./Team";

const characters = [new Swordsman(2), new Bowman(3)];
const team = new Team(characters);
console.log(team);
console.log(team.characters);
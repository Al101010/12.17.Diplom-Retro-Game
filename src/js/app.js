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



// console.log('-0----------------');

// import Character from "./Character";

// import Bowman from "./characters/Bowman";
// import Daemon from "./characters/Daemon";
// import Magician from "./characters/Magician";
// import Swordsman from "./characters/Swordsman";
// import Undead from "./characters/Undead";
// import Vampire from "./characters/Vampire";

// console.log('-1----------------');
// import { characterGenerator } from "./generators";

// const playerTypes = [Bowman, Swordsman, Magician]; // доступные классы игрока
// // console.log(playerTypes);
// const playerGenerator = characterGenerator(playerTypes, 2); // в данном примере персонажи игрока могут быть 1 или 2-ого уровней

// const character1 = playerGenerator.next().value; // случайный персонаж из списка playerTypes с уровнем 1 или 2
// console.log(character1); // magician

// const character2 = playerGenerator.next().value; // случайный персонаж из списка playerTypes с уровнем 1 или 2
// console.log(character2); // magician

// const character3 = playerGenerator.next().value; // случайный персонаж из списка playerTypes с уровнем 1 или 2
// console.log(character3); // magician

// const character4 = playerGenerator.next().value; // случайный персонаж из списка playerTypes с уровнем 1 или 2
// console.log(character4); // magician

// const character5 = playerGenerator.next().value; // случайный персонаж из списка playerTypes с уровнем 1 или 2
// console.log(character5); // magician
// console.log('-2----------------');
// import Team from "./Team";
// const characters = [new Swordsman(2), new Bowman(1)]
// const team = new Team(characters);

// // const characters = [new Swordsman(2), new Bowman(3)];
// // const team = new Team(characters);
// console.log(team);
// console.log(team.characters);

// console.log(team.characters[0].level);
// console.log('-3----------------');

// ---
// import PositionedCharacter from "./PositionedCharacter";

// const character = new Bowman(2);
// const position = 8; // для поля 8x8 лучник будет находиться слева на второй строке
// const positionedCharacter = new PositionedCharacter(character, position);
// console.log(positionedCharacter);

// gamePlay.redrawPositions([positionedCharacter]);

// console.log('-4----------------');
// console.log(this.points);
// import themes from "./themes";


// console.log(gamePlay.drawUi(themes[this.level]));
// console.log(themes[this.level]);
// console.log('-5----------------');

// const characters = [new Swordsman(2), new Bowman(3)];
// const team = new Team();
// const team = new Team(characters);

// console.log(team);
// console.log(team.characters);
// team.startOfPlayersTeam();
// console.log(team.characters);
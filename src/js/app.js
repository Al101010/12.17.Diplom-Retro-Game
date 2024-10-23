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

console.log(gameCtrl);
// console.log(gameCtrl.init());
// console.log(gamePlay.setCursor);

// console.log(this);// пусто
// import themes from "./themes";
// console.log(themes);

// ---
// console.log(document.getElementsByClassName('board'));

// document.getElementsByClassName('board').classList.add(".not-clickable");

// this.gamePlay.drawUi('not-clickable');

// let boArd = document.querySelectorAll('div.board');
// let cells = Array(document.querySelectorAll('.cell'));
// // console.log(document.querySelector());
// console.log(cells[0].length);
// for (let i = 0; i < cells[0].length; i++) {
//     // console.log('cells');
//     // document.removeEventListener('mousemove', resetTimer.bind(null, str));
//     cells[0][i].removeEventListener('mouseenter', event => this.onCellEnter(event));
//     cells[0][i].removeEventListener('mouseleave', event => this.onCellLeave(event));
//     cells[0][i].removeEventListener('click', event => this.onCellClick(event));

//     cells[0][i].classList.add("not-clickable");
//     cells[0][i].classList.add("not-clickable");
//     cells[0][i].classList.add("not-clickable");
//     console.log(cells[0][i]);
// }
// console.log(cells[0]);
// console.log(cells[0][0]);

// ---
console.log(gamePlay.cells.length);
console.log(gamePlay.cells[0]);
for (let i = 0; i < gamePlay.cells.length; i++) {
    // console.log(gamePlay.cells[i]); // работает
    gamePlay.cells[i].removeEventListener('click', event => this.onCellClick(event)); // не работает
}

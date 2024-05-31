import PositionedCharacter from "./PositionedCharacter";
import Team from "./Team";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    
    this.characters = [];
    
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService

    // TODO: добавьте прослушиватели событий к игровым событиям
    // TODO: загрузите сохраненные данные из stateService
    
    this.gamePlay.drawUi('prairie'); // Игровое поле

    // console.log(this); // тоже что и в app.js console.log(gameCtrl);
    // this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this)); //
    

    this.beginningGame(); // Начало игры
  }

  beginningGame() {
    // Игрок
    const team = new Team();

    const arrPositionPlayers = [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];

    function randomPositionPlayers() {
      const randomPosition = arrPositionPlayers[Math.floor(Math.random() * 16)];// Math.floor(Math.random() * 16 - случайное число от 0 до 15
      arrPositionPlayers.splice(arrPositionPlayers.indexOf(randomPosition), 1); // удаляем номер ячейки который уже использовали
      return randomPosition;
    }

    const positionedCharacterPlayers = [];

    team.charactersPlayers.forEach((item, index) => {
      positionedCharacterPlayers.push(
        new PositionedCharacter(
          item,
          index = randomPositionPlayers()
        )
      )
    })
    // Теперь компьютер
    const arrPositionComputer = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63];

    function randomPositionComputer() {
      const randomPosition = arrPositionComputer[Math.floor(Math.random() * 16)];// Math.floor(Math.random() * 16 - случайное число от 0 до 15
      arrPositionComputer.splice(arrPositionComputer.indexOf(randomPosition), 1);
      return randomPosition;
    }

    const positionedCharacterComputer = [];

    team.charactersComputer.forEach((item, index) => {
      positionedCharacterComputer.push(
        new PositionedCharacter(
          item,
          index = randomPositionComputer()
        )
      )
    })

    this.characters = positionedCharacterPlayers.concat(positionedCharacterComputer);
    this.gamePlay.redrawPositions(this.characters); // персонажи на поле плюс позиционирование на поле.

    this.thereCharacterCell(); // есть ли в ячейке персонаж
  }

  thereCharacterCell() {// есть ли в ячейке персонаж

    document.addEventListener("mouseover", (event) => {
      let arrClass = event.target.className.split(' ');
      arrClass.forEach((elem) => {
        if (elem === 'character') {
          // console.log(this.gamePlay.cells.indexOf(this.onCellEnter.bind(this))); // тут типа -1 ----- как получить номер ячейки на которую навёл мышку -----
          console.log('в поле есть персонаж');
          

        }
      });
    });
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    const characterInField = this.gamePlay.cells.characters.find((item) => item.position === index);
    if (characterInField) {
      console.log('персонаж в этом поле - ' + this.gamePlay.cells.characters.position);
    }
  }


  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}

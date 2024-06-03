import PositionedCharacter from "./PositionedCharacter";
import Team from "./Team";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService; 
    
    this.positionedCharacter = [];
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService

    // TODO: добавьте прослушиватели событий к игровым событиям
    // TODO: загрузите сохраненные данные из stateService
    
    this.gamePlay.drawUi('prairie'); // Игровое поле

    // console.log(this); // тоже что и в app.js console.log(gameCtrl);
    

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

    let positionedCharacter = positionedCharacterPlayers.concat(positionedCharacterComputer);
    this.positionedCharacter = positionedCharacter; //  сохранил позиции персонажей(войнов)
    // console.log(this.positionedCharacter);
    this.gamePlay.redrawPositions(positionedCharacter); // Раставили участников(войнов)

    this.listenerInCell(); // ставим прослушивателе событий
  }

  listenerInCell() {
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this)); // ставим на наведение мышки
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    let cHarInCell = this.gamePlay.cells[index].children[0];
    if (cHarInCell) { // если у элемента есть дочерний элемент
      let arrClass = cHarInCell.className.split(' ');

      arrClass.forEach((elem) => {

        if (elem === 'character') { // если сласс = 'character'
          console.log(index);

          this.positionedCharacter.forEach((item) => {
            if (item.position == index) {
              this.gamePlay.showCellTooltip(
                `\u{1F396} ${item.character.level} \u{2694} ${item.character.attack} \u{1F6E1} ${item.character.defence} \u{2764} ${item.character.health}`,
                index
              );
            }
          });
        }
        
      });

    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}

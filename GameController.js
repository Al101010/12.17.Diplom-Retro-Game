import PositionedCharacter from "./PositionedCharacter";
import Team from "./Team";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;    
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService

    // TODO: добавьте прослушиватели событий к игровым событиям
    // TODO: загрузите сохраненные данные из stateService
    
    this.gamePlay.drawUi('prairie'); // Игровое поле
    this.beginningGame(); // Начало игры
  }

  beginningGame() {
    // Игрок
    const team = new Team();

    const arrPositionPlayers = [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];

    function randomPositionPlayers() {
      const randomPosition = arrPositionPlayers[Math.floor(Math.random() * 16)];// Math.floor(Math.random() * 16 - случайное число от 0 до 15
      arrPositionPlayers.splice(arrPositionPlayers.indexOf(randomPosition), 1);
      return randomPosition;
    }

    const positionedCharacterPlayers = [];

    team.charactersPlayers.forEach((item, index) => {
      positionedCharacterPlayers.push(
        new PositionedCharacter(
          item,
          randomPositionPlayers()
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
          randomPositionComputer()
        )
      )
    })

    const character = positionedCharacterPlayers.concat(positionedCharacterComputer);

    this.gamePlay.redrawPositions(character);
    this.thereCharacterField();
  }




  thereCharacterField() {// есть ли в поле персонаж
    console.log('-');
    document.addEventListener("mouseover", (e)=> console.log("mouseover" + ' ' + e.target.tagName));
    document.addEventListener("mouseover", (e)=> console.log(e.target.className));


    // if([e.target.className].forEach(element => element == character)) {
    //   console.log('есть');
    // }
    // 
    // document.addEventListener(() => console.log(this));
    // document.getElementById('board').addEventListener("mouseover", ()=> console.log(this));
    // if(this.characters.find((item) => item.position === index)) {
    //   console.log('навели')
    // };
    // return this.characters.find((item) => item.position === index);
  }

  



  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    const characterInField = this.thereCharacterField(index);

    if (characterInField) {
      this.gamePlay.showCellTooltip(
        `\u{1F396} ${characterInCell.character.level} \u{2694} ${characterInCell.character.attack} \u{1F6E1} ${characterInCell.character.defence} \u{2764} ${characterInCell.character.health}`,
        index
      );
    }
    // return this.characters.find((item) => item.position === index);
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}

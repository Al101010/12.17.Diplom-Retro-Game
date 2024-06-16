import PositionedCharacter from "./PositionedCharacter";
import Team from "./Team";
import GamePlay from "./GamePlay";
import cursors from "./cursors";
import GameState from "./GameState";
// 
import { variantsToGo } from "./utils";
import { variantsNearBattle } from "./utils";


export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService; 
    // добавил
    this.gameState = new GameState;
    
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

    let positionedCharacters = positionedCharacterPlayers.concat(positionedCharacterComputer);
    this.gameState.positionedCharacters = positionedCharacters; //  сохранил позиции персонажей(войнов)
    this.gamePlay.redrawPositions(this.gameState.positionedCharacters); // Раставили участников(войнов)

    this.listenerInCell(); // ставим прослушивателе событий
  }

  listenerInCell() { // ставим прослушиватели событий
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this)); // ставим на наведение мышки
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this)); // ставим на клик левой кнопкой мышки
  }

  active() { // activType // проверяем активного
    if (this.gameState.cellWithActiveCharacter == null) {
      return; // return console.log('нет активного'); // 
    } else if (this.gameState.cellWithActiveCharacter !== null) {
      return this.gameState.positionedCharacters.find((elem) => elem.position === this.gameState.cellWithActiveCharacter);
    } else {
      return console.log('непонял');
    }
  }

  possibleAttack() {
    return variantsNearBattle((this.active()).character.type, this.gameState.cellWithActiveCharacter) // может атаковать ячейки
  }

  
motionComputer() {
  console.log('это ходит соперник'); // if(['vampire', 'undead', 'daemon'].includes(item.character.type)) { // если противник

  let teamComputer = this.gameState.positionedCharacters.filter(item => ['vampire', 'undead', 'daemon'].includes(item.character.type));
  let teamPlayer = this.gameState.positionedCharacters.filter(item => ['bowman', 'swordsman', 'magician'].includes(item.character.type)); 
  let randomIndex = () => Math.floor(Math.random() * (teamComputer.length)); // генерируем случайный индекс в допустимом диапазоне
  
  // let activComputer = teamComputer[randomIndex()]; // случайный противник становится активным и ходит

  // teamPlayer.forEach(elem => {
  //   console.log(elem);

  // });

  // teamComputer.forEach(elem => {
  //   console.log(elem);

  // });

  // проверить кто дерется, 1: перебираем и 2: в каждом смотрим возможность атаковать
  
  teamComputer.forEach(elem => {
    let possibleAttackElem = variantsNearBattle(elem.character.type, elem.position); // может атаковать ячейки
    // console.log(possibleAttackElem);
    // console.log('Нужно перебрать войнов игрока и узнать можетли он его атаковать');
    for (let i = 0; i < teamPlayer.length; i++) {
      if (possibleAttackElem.includes(teamPlayer[i].position)) {
        console.log(elem);
        console.log('может атакавать - ' + teamPlayer[i].position);
      };
    }
  });
  
  
  // console.log(teamPlayer);


  

  // let positionPlayer = [];
  // teamPlayer.forEach(elem => {return positionPlayer.push(elem.position)});
  // console.log(positionPlayer);

  // for (let i = 0; i < positionPlayer.length; i++) {
  //   console.log(positionPlayer[i]); // ['vampire', 'undead', 'daemon'].includes(elem)
  // };

  let activComputer = teamComputer[randomIndex()]; // случайный противник
  console.log('-------------');
  console.log(activComputer); // if (this.possibleAttack().includes(index)) - но перед этим нужно выбрать активного у сопрника
  //

  if (teamComputer.length == []) {
    console.log('Победа');
  }
}

  onCellClick(index) {
    // TODO: react to click

    let cHarInCell = this.gamePlay.cells[index].children[0];
    if (cHarInCell) { // если у элемента есть дочерний элемент

      let arrClass = cHarInCell.className.split(' ');
      arrClass.forEach((elem) => {
        if (elem === 'character') { // если сласс = 'character'

          this.gameState.positionedCharacters.forEach((item) => { // перебираем (войнов + их позиции)
            if (item.position == index) { // если расположение совпадает
              if (['bowman', 'swordsman', 'magician'].includes(item.character.type) && this.gameState.cellWithActiveCharacter !== item.position) {
                for (let i = 0; i < this.gamePlay.cells.length; i++) {
                  this.gamePlay.deselectCell(i);// нужно перебрать все клетки и снять выделение this.gamePlay.cells
                };
                this.gamePlay.selectCell(index, "yellow"); // выделяем игрока - круг желтого цвета.
                this.gameState.cellWithActiveCharacter = item.position; // ячейка с активным персонажем
              } else if(['bowman', 'swordsman', 'magician'].includes(item.character.type) && this.gameState.cellWithActiveCharacter === item.position) {
                this.gamePlay.deselectCell(index); // снимаем выделение ячейки
                this.gameState.cellWithActiveCharacter = null;
              } else if(['vampire', 'undead', 'daemon'].includes(item.character.type)) { // если противник
                // possibleAttack && !possibleAttack.includes(index) // если противник-1 + вне зоны атаки-2
                if (this.gameState.cellWithActiveCharacter !== null && this.gamePlay.cells[index].classList.contains("selected-red")) { // console.log('Атака');
                  let attacker = this.gameState.positionedCharacters.filter(item => item.position === this.gameState.cellWithActiveCharacter)[0].character; // атакующий (или attacker)
                  let target = this.gameState.positionedCharacters.filter(item => item.position === index)[0].character; // атакуемый (или target)

                  const damage = Math.max(attacker.attack - target.defence, attacker.attack * 0.1); // console.log(damage); // ???

                  (async () => { // атака
                    await this.gamePlay.showDamage(index, damage);
                    target.health = target.health - damage;
                    if (target.health < 0) {
                      console.log(this.gameState.positionedCharacters.findIndex(positionedCharacter => positionedCharacter.position == index));
                      const indexCellLifeOver = this.gameState.positionedCharacters.findIndex(positionedCharacter => positionedCharacter.position == index)
                      this.gameState.positionedCharacters.splice(indexCellLifeOver, 1);
                    }
                    this.gamePlay.redrawPositions(this.gameState.positionedCharacters); // console.log(attacker); // атакующий (или attacker)                      // console.log(target); // атакуемый (или target)

                    // Мы походили снимаем выделения, обнуляем активного и готовим переход хода к противнику
                    for (let i = 0; i < this.gamePlay.cells.length; i++) {
                      this.gamePlay.deselectCell(i);// нужно перебрать все клетки и снять выделение this.gamePlay.cells
                    };
                    this.gameState.cellWithActiveCharacter = null;

                    this.motionComputer(); // ход соперника
                  })();
                } else {
                  GamePlay.showError('персонаж противника');
                }
              }
            }
          });

        } 
      });

    } else { // console.log('Чистое поле');
      if (this.gameState.cellWithActiveCharacter !== null && this.gamePlay.cells[index].classList.contains("selected-green")) { // проверяем если персонаж выбран И наличие зелёного круга-выделения
        this.gameState.positionedCharacters.forEach((elem) => { // перебираю расставленных персонажей и проверяю позицию
          if(elem.position == this.gameState.cellWithActiveCharacter) { // если позиция элемента совпадает с активным то меняю
            this.gameState.cellWithActiveCharacter = null; // сразу меняем для себя номер активной ячейки на null(чтоб проще обращаться)
            elem.position = index; // и меняем позицию у расставленого персонажа
            this.gamePlay.redrawPositions(this.gameState.positionedCharacters); // перерисовываем поле
          }
          this.gamePlay.deselectCell(index); // снимаем выделение с ячейки куда кликнули
        })
        for (let i = 0; i < this.gamePlay.cells.length; i++) {
          if (this.gamePlay.cells[i].childNodes.length == 0) {
            this.gamePlay.deselectCell(i); //  снимаем выделение со всех ячеек где нет персонажей
          }
        };
        this.motionComputer(); // ход соперника
      } else {
        console.log('а суда НЕможет персонаж пойти');
      }
    }
  }

  onCellEnter(index) {
    this.gameState.positionedCharacters.forEach((item) => { // перебираем (войнов + их позиции) 
      if(['vampire', 'undead', 'daemon'].includes(item.character.type)) {        // console.log(item.position);
        this.gamePlay.deselectCell(item.position); //  снимаем выделение с демонов и всякой нечести
      }
    })
    for (let i = 0; i < this.gamePlay.cells.length; i++) {
      if (this.gamePlay.cells[i].childNodes.length == 0) {
        this.gamePlay.deselectCell(i); //  снимаем выделение со всех ячеек где нет персонажей
      }
    };

    let cHarInCell = this.gamePlay.cells[index].children[0];
    if (cHarInCell) { // если у элемента есть дочерний элемент
      let arrClass = cHarInCell.className.split(' ');
      arrClass.forEach((elem) => {
        if (elem === 'character') { // если сласс = 'character'
          this.gameState.positionedCharacters.forEach((item) => { // перебираем (войнов + их позиции)
            if (item.position == index) { // если расположение совпадает c index
              this.gamePlay.showCellTooltip(
                `\u{1F396} ${item.character.level} \u{2694} ${item.character.attack} \u{1F6E1} ${item.character.defence} \u{2764} ${item.character.health}`,
                index
              );
            }
          });
        } else if (['bowman', 'swordsman', 'magician'].includes(elem)) { // console.log('свой');
          this.gamePlay.setCursor(cursors.pointer);
        } else if (['vampire', 'undead', 'daemon'].includes(elem) && this.gameState.cellWithActiveCharacter !== null) { // console.log('противник + Активный есть');
          // let possibleAttack = variantsNearBattle((this.active()).character.type, this.gameState.cellWithActiveCharacter); // может атаковать ячейки
          // console.log(this.possibleAttack());
          if (this.possibleAttack().includes(index)) {
            // console.log('может атаковать'); // ----------------------------------------------------------------------------
            this.gamePlay.setCursor(cursors.crosshair);
            this.gamePlay.selectCell(index, "red"); // выделяем ячейку -  красным  - прерывистым кругом
          } else {
            this.gamePlay.setCursor(cursors.auto);
          }
        } else if (['vampire', 'undead', 'daemon'].includes(elem)) { // console.log('противник');
          this.gamePlay.setCursor(cursors.auto);
        };
      });
    } else {      // console.log('Наведение - нет дочерних элементов, значит чистое поле');
      this.gamePlay.setCursor(cursors.notallowed); // меняем курсор на notallowed
      if (this.gameState.cellWithActiveCharacter !== null) {        // нужно получить тип активного - (this.active()).character.type
        let possibleMoves = variantsToGo((this.active()).character.type, this.gameState.cellWithActiveCharacter); // возможные ходы активного
        for (let i = 0; i < possibleMoves.length; i++) {
          if (index === possibleMoves[i]) {
            this.gamePlay.selectCell(index, "green"); // выделяем ячейку -  зелёным  - прерывистым кругом
            this.gamePlay.setCursor(cursors.pointer); // меняем курсор на pointer
          }
        }
      };
    }
  }

  onCellLeave(index) { // если мышь покидает ячейку
    // TODO: react to mouse leave
    // for (let i = 0; i < this.gamePlay.cells.length; i++) {
    //   if (this.gamePlay.cells[i].childNodes.length == 0) {
    //     this.gamePlay.deselectCell(i); //  снимаем выделение со всех ячеек где нет персонажей
    //   }
    // };

    // for (let i = 0; i < this.gamePlay.cells.length; i++) {
    //   this.gamePlay.deselectCell(i);// нужно перебрать все клетки и снять выделение this.gamePlay.cells
    // };

    // this.gameState.positionedCharacters.forEach((item) => { // перебираем (войнов + их позиции) 
    //   if(['vampire', 'undead', 'daemon'].includes(item.character.type)) {        // console.log(item.position);
    //     this.gamePlay.deselectCell(item.position); //  снимаем выделение с демонов и всякой нечести
    //   }
    // })
  }
}

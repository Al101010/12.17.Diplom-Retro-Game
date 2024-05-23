/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */

//  function* randomIntegerPlayerTypes(allowedTypes, maxLevel) {
//   while (true) {
//       yield playerTypes[Math.floor(Math.random() * (maxLevel + 1))];
//   }
// }


// import bowman from "../characters/Bowman";
// import swordsman from "../characters/Swordsman";
// import magician from "../characters/Magician";
  // const playerTypes = [bowman, swordsman, magician];

export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here

  while (true) {
    yield new allowedTypes[Math.floor(Math.random() * (maxLevel + 1))];
  }
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
}

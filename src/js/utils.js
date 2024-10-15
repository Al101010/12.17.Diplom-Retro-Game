// import GamePlay from "./GamePlay";
// import cursors from "./cursors";
// import { gameCtrl } from "./app";

export function calcTileType(index, boardSize) {
  // TODO: ваш код будет тут

  if (index === 0 && boardSize === 8) {
    return 'top-left';
  }
  if (index === 7) {
    return 'top-right';
  }
  if (index === 56) {
    return 'bottom-left';
  }
  if (index === 63) {
    return 'bottom-right';
  }
  // if (0 > index > 7) {
  if (index > 0 && index < 7) {
    return 'top';
  }
  if (index > 56 && index < 63 ) {
    return 'bottom';
  }
  if (index === 8 ||  index === 16 ||  index === 24 ||  index === 32 ||  index === 40 ||  index === 48 ) {
    return 'left';
  }
  if (index === 15 ||  index === 23 ||  index === 31 ||  index === 39 ||  index === 47 ||  index === 55 ) {
    return 'right';
  }
  //
  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}

export function variantsToGo(type, index) {
  if (type === 'bowman' || type === 'vampire') {
    if (index === 0) {
      return [1, 2, 8, 9, 16, 18]
    } else if (index === 1) {
      return [2, 3, 8, 9, 10, 17, 19, 0]
    } else if (index === 2) {
      return [3, 4, 11, 20, 10, 18, 9, 16, 1, 0]
    } else if (index === 3) {
      return [4, 5, 12, 21, 11, 19, 10, 17, 2, 1]
    } else if (index === 4) {
      return [5, 6, 13, 22, 12, 20, 11, 18, 2, 3]
    } else if (index === 5) {
      return [6, 1, 14, 23, 13, 21, 12, 19, 3, 4]
    } else if (index === 6) {
      return [7, 15, 14, 22, 13, 20, 4, 5]
    } else if (index === 7) {
      return [15, 23, 14, 21, 5, 6]
    } else if (index === 8) {
      return [0, 1, 9, 10, 17, 26, 16, 24]
    } else if (index === 9) {
      return [1, 2, 10, 11, 18, 27, 17, 25, 16, 8, 0]
    } else if (index === 10) {
      return [2, 3, 11, 12, 19, 28, 18, 26, 17, 24, 9, 8, 1]
    } else if (index === 11) {
      return [3, 4, 12, 13, 20, 29, 19, 27, 18, 25, 10, 9, 2]
    } else if (index === 12) {
      return [4, 5, 13, 14, 21, 30, 20, 28, 19, 26, 11, 10, 3]
    } else if (index === 13) {
      return [5, 6, 14, 15, 22, 31, 21, 29, 20, 27, 12, 11, 4]
    } else if (index === 14) {
      return [6, 7, 15, 23, 22, 30, 21, 28, 13, 12, 5]
    } else if (index === 15) {
      return [7, 23, 31, 22, 29, 14, 13, 6]
    } else if (index === 16) {
      return [0, 8, 2, 9, 17, 18, 25, 34, 24, 32]
    } else if (index === 17) {
      return [8, 1, 9, 3, 10, 18, 19, 26, 35, 25, 33, 24, 16]
    } else if (index === 18) {
      return [10, 2, 11, 4, 19, 20, 27, 36, 26, 34, 25, 32, 17, 16, 9, 0]
    } else if (index === 19) {
      return [11, 3, 12, 5, 20, 21, 28, 37, 27, 35, 26, 33, 18, 17, 10, 1]
    } else if (index === 20) {
      return [12, 4, 13, 6, 21, 22, 29, 38, 28, 36, 27, 34, 19, 18, 11, 2]
    } else if (index === 21) {
      return [13, 5, 14, 7, 22, 23, 30, 39, 29, 37, 28, 35, 20, 19, 12, 3]
    } else if (index === 22) {
      return [14, 6, 15, 23, 31, 30, 38, 29, 36, 21, 20, 13, 4]
    } else if (index ===23) {
      return [15, 7, 31, 39, 30, 37, 22, 21, 14, 5]
    } else if (index === 24) {
      return [8, 16, 10, 17, 25, 26, 33, 42, 32, 40]
    } else if (index === 25) {
      return [16, 9, 17, 11, 18, 26, 27, 34, 43, 33, 41, 32, 24]
    } else if (index === 26) {
      return [10, 18, 19, 12, 27, 28, 35, 44, 34, 42, 33, 40, 25, 24, 17, 8]
    } else if (index === 27) {
      return [11, 19, 20, 13, 28, 29, 36, 45, 35, 43, 34, 41, 26, 25, 18, 9]
    } else if (index === 28) {
      return [12, 20, 21, 14, 29, 30, 37, 46, 36, 44, 35, 42, 27, 26, 19, 10]
    } else if (index === 29) {
      return [13, 21, 22, 15, 30, 31, 38, 47, 37, 45, 36, 43, 28, 27, 20, 11]
    } else if (index === 30) {
      return [14, 22, 23, 31, 39, 38, 46, 37, 44, 29, 28, 21, 12]
    } else if (index === 31) {
      return [15, 23, 39, 47, 38, 45, 30, 29, 22, 13]
    } else if (index ===32) {
      return [16, 24, 18, 25, 33, 34, 41, 50, 40, 48]
    } else if (index === 33) {
      return [24, 17, 25, 19, 26, 34, 35, 42, 51, 41, 49, 40, 32]
    } else if (index === 34) {
      return [18, 26, 27, 20, 35, 36, 43, 52, 42, 50, 41, 48, 33, 32, 25, 16]
    } else if (index === 35) {
      return [19, 27, 28, 21, 36, 37, 44, 53, 43, 51, 42, 49, 34, 33, 26, 17]
    } else if (index === 36) {
      return [20, 28, 29, 22, 37, 38, 45, 54, 44, 52, 43, 50, 35, 34, 27, 18]
    } else if (index === 37) {
      return [21, 29, 30, 23, 38, 39, 46, 55, 45, 53, 44, 51, 36, 35, 28, 19]
    } else if (index === 38) {
      return [22, 30, 31, 39, 47, 46, 54, 45, 52, 37, 36, 29, 20]
    } else if (index === 39) {
      return [23, 31, 47, 55, 46, 53, 38, 37, 30, 21]
    } else if (index === 40) {
      return [24, 32, 26, 33, 41, 42, 49, 58, 48, 56]
    } else if (index === 41) {
      return [32, 25, 33, 27, 34, 42, 43, 50, 59, 49, 57, 48, 40]
    } else if (index === 42) {
      return [26, 34, 35, 28, 43, 44, 51, 60, 50, 58, 49, 56, 41, 40, 33, 24]
    } else if (index === 43) {
      return [27, 35, 36, 29, 44, 45, 52, 61, 51, 59, 50, 57, 42, 41, 34, 25]
    } else if (index === 44) {
      return [28, 36, 37, 30, 45, 46, 53, 62, 52, 60, 51, 58, 43, 42, 35, 26]
    } else if (index === 45) {
      return [29, 37, 38, 31, 46, 47, 54, 63, 53, 61, 52, 59, 44, 43, 36, 27]
    } else if (index === 46) {
      return [30, 38, 39, 47, 55, 54, 62, 53, 60, 45, 44, 37, 28]
    } else if (index ===47) {
      return [31, 39, 55, 63, 54, 61, 46, 45, 38, 29]
    } else if (index === 48) {
      return [32, 40, 34, 41, 49, 50, 57, 56]
    } else if (index === 49) {
      return [40, 33, 41, 35, 42, 50, 51, 58, 57, 56, 48]
    } else if (index === 50) {
      return [34, 42, 43, 36, 51, 52, 59, 58, 57, 49, 48, 41, 32]
    } else if (index === 51) {
      return [35, 43, 44, 37, 52, 53, 60, 59, 58, 50, 49, 42, 33]
    } else if (index === 52) {
      return [36, 44, 45, 38, 53, 54, 61, 60, 59, 51, 50, 43, 34]
    } else if (index === 53) {
      return [37, 45, 46, 39, 54, 55, 62, 61, 60, 52, 51, 44, 35]
    } else if (index === 54) {
      return [38, 46, 47, 55, 63, 62, 61, 53, 52, 45, 36]
    } else if (index === 55) {
      return [39, 47, 63, 62, 54, 53, 46, 37]
    } else if (index === 56) {
      return [40, 48, 42, 49, 57, 58]
    } else if (index === 57) {
      return [48, 41, 49, 43, 50, 58, 59, 56]
    } else if (index === 58) {
      return [42, 50, 51, 44, 59, 60, 57, 56, 49, 40]
    } else if (index === 59) {
      return [43, 51, 52, 45, 60, 61, 58, 57, 50, 41]
    } else if (index === 60) {
      return [44, 52, 53, 46, 61, 62, 59, 58, 51, 42]
    } else if (index === 61) {
      return [45, 53, 54, 47, 62, 63, 60, 59, 52, 43]
    } else if (index === 62) {
      return [46, 54, 55, 63, 61, 60, 53, 44]
    } else if (index === 63) {
      return [47, 55, 62, 61, 54, 45]
    }
  } else if (type === 'swordsman' || type === 'undead') {
    if (index === 0) {
      return [1, 2, 3, 4, 9, 18, 27, 36, 8, 16, 24, 32]
    } else if (index === 1) {
      return [2, 3, 4, 5, 10, 19, 28, 37, 9, 17, 25, 33, 8, 0]
    } else if (index === 2) {
      return [3, 4, 5, 6, 11, 20, 29, 38, 10, 18, 26, 34, 9, 16, 1, 0]
    } else if (index === 3) {
      return [4, 5, 6, 7, 12, 21, 30, 39, 11, 19, 27, 35, 10, 17, 24, 2, 1, 0]
    } else if (index === 4) {
      return [5, 6, 7, 13, 22, 31, 12, 20, 28, 36, 11, 18, 25, 32, 3, 2, 1, 0]
    } else if (index === 5) {
      return [6, 7, 14, 23, 13, 21, 29, 37, 12, 19, 26, 33, 4, 3, 2, 1]
    } else if (index === 6) {
      return [7, 15, 14, 22, 30, 38, 13, 20, 27, 34, 5, 4, 3, 2]
    } else if (index === 7) {
      return [15, 23, 31, 39, 14, 21, 28, 35, 6, 5, 4, 3]
    } else if (index === 8) {
      return [0, 1, 9, 10, 11, 12, 17, 26, 35, 44, 16, 24, 32, 40]
    } else if (index === 9) {
      return [1, 2, 10, 11, 12, 13, 18, 27, 36, 45, 17, 25, 33, 41, 16, 8, 0]
    } else if (index === 10) {
      return [2, 3, 11, 12, 13, 14, 19, 28, 37, 46, 18, 26, 34, 42, 17, 24, 9, 8, 1]
    } else if (index === 11) {
      return [3, 4, 12, 13, 14, 15, 20, 29, 38, 47, 19, 27, 35, 43, 18, 25, 32, 10, 9, 8, 2]
    } else if (index === 12) {
      return [4, 5, 13, 14, 15, 21, 30, 39, 20, 28, 36, 44, 19, 26, 33, 40, 11, 10, 9, 8, 3]
    } else if (index === 13) {
      return [5, 6, 14, 15, 22, 31, 21, 29, 37, 45, 20, 27, 34, 41, 12, 11, 10, 9, 4]
    } else if (index === 14) {
      return [6, 7, 15, 23, 22, 30, 38, 46, 21, 28, 35, 42, 13, 12, 11, 10, 5]
    } else if (index === 15) {
      return [7, 23, 31, 39, 47, 22, 29, 36, 43, 14, 13, 12, 11, 6]
    } else if (index === 16) {
      return [8, 0, 9, 2, 17, 18, 19, 20, 25, 34, 43, 52, 24, 32, 40, 48]
    } else if (index === 17) {
      return [1, 9, 10, 3, 18, 19, 20, 21, 26, 35, 44, 53, 25, 33, 41, 49, 24, 16, 8]
    } else if (index === 18) {
      return [2, 10, 11, 4, 19, 20, 21, 22, 27, 36, 45, 54, 26, 34, 42, 50, 25, 32, 17, 16, 9, 0]
    } else if (index === 19) {
      return [3, 11, 12, 5, 20, 21, 22, 23, 28, 37, 46, 55, 27, 35, 43, 51, 26, 33, 40, 18, 17, 16, 10, 1]
    } else if (index === 20) {
      return [4, 12, 13, 6, 21, 22, 23, 29, 38, 47, 28, 36, 44, 52, 27, 34, 41, 48, 19, 18, 17, 16, 11, 2]
    } else if (index === 21) {
      return [5, 13, 14, 7, 22, 23, 30, 39, 29, 37, 45, 53, 28, 35, 42, 49, 20, 19, 18, 17, 12, 3]
    } else if (index === 22) {
      return [6, 14, 15, 23, 31, 30, 38, 46, 54, 29, 36, 43, 50, 21, 20, 19, 18, 13, 4]
    } else if (index ===23) {
      return [7, 15, 31, 39, 47, 55, 30, 37, 44, 51, 22, 21, 20, 19, 14, 5]
    } else if (index === 24) {
      return [0, 8, 16, 17, 10, 3, 25, 26, 27, 28, 33, 42, 51, 60, 32, 40, 48, 56]
    } else if (index === 25) {
      return [1, 9, 17, 18, 11, 4, 26, 27, 28, 29, 34, 43, 52, 61, 33, 41, 49, 57, 32, 24, 16]
    } else if (index === 26) {
      return [2, 10, 18, 19, 12, 5, 27, 28, 29, 30, 35, 44, 53, 62, 34, 42, 50, 58, 33, 40, 25, 24, 17, 8]
    } else if (index === 27) {
      return [3, 11, 19, 20, 13, 6, 28, 29, 30, 31, 36, 45, 54, 63, 35, 43, 51, 59, 34, 41, 48, 26, 25, 24, 18, 9, 0]
    } else if (index === 28) {
      return [4, 12, 20, 21, 14, 7, 29, 30, 31, 37, 46, 55, 36, 44, 52, 60, 35, 42, 49, 56, 27, 26, 25, 24, 19, 10, 1]
    } else if (index === 29) {
      return [5, 13, 21, 22, 15, 30, 31, 38, 47, 37, 45, 53, 61, 36, 43, 50, 57, 28, 27, 26, 25, 20, 11, 2]
    } else if (index === 30) {
      return [6, 14, 22, 23, 31, 39, 38, 46, 54, 62, 37, 44, 51, 58, 29, 28, 27, 26, 21, 12, 3]
    } else if (index === 31) {
      return [7, 15, 23, 39, 47, 55, 63, 38, 45, 52, 59, 30, 29, 28, 27, 22, 13, 4]
    } else if (index ===32) {
      return [0, 8, 16, 24, 25, 18, 11, 4, 33, 34, 35, 36, 41, 50, 59, 40, 48, 56]
    } else if (index === 33) {
      return [1, 9, 17, 25, 26, 19, 12, 5, 34, 35, 36, 37, 42, 51, 60, 41, 49, 57, 40, 32, 24]
    } else if (index === 34) {
      return [2, 10, 18, 26, 27, 20, 13, 6, 35, 36, 37, 38, 43, 52, 61, 42, 50, 58, 41, 48, 33, 32, 25, 16]
    } else if (index === 35) {
      return [3, 11, 19, 27, 28, 21, 14, 7, 36, 37, 38, 39, 44, 53, 62, 43, 51, 59, 42, 49, 56, 34, 33, 32, 26, 17, 8]
    } else if (index === 36) {
      return [4, 12, 20, 28, 29, 22, 15, 37, 38, 39, 45, 54, 63, 44, 52, 60, 43, 50, 57, 35, 34, 33, 32, 27, 18, 9, 0]
    } else if (index === 37) {
      return [5, 13, 21, 29, 30, 23, 38, 39, 46, 55, 45, 53, 61, 44, 51, 58, 36, 35, 34, 33, 28, 19, 10, 1]
    } else if (index === 38) {
      return [6, 14, 22, 30, 31, 39, 47, 46, 54, 62, 45, 52, 59, 37, 36, 35, 34, 29, 20, 11, 2]
    } else if (index === 39) {
      return [7, 14, 23, 31, 47, 55, 63, 46, 53, 60, 38, 37, 36, 35, 30, 21, 12, 3]
    } else if (index === 40) {
      return [8, 16, 24, 32, 33, 26, 19, 12, 41, 42, 43, 44, 49, 58, 48, 56]
    } else if (index === 41) {
      return [9, 17, 25, 33, 34, 27, 20, 13, 42, 43, 44, 45, 50, 59, 49, 57, 48, 40, 32]
    } else if (index === 42) {
      return [10, 18, 26, 34, 35, 28, 21, 14, 43, 44, 45, 46, 51, 60, 50, 58, 49, 56, 41, 40, 33, 24]
    } else if (index === 43) {
      return [11, 19, 27, 35, 36, 29, 22, 15, 44, 45, 46, 47, 52, 61, 51, 59, 50, 57, 42, 41, 40, 34, 25, 16]
    } else if (index === 44) {
      return [12, 20, 28, 36, 37, 30, 23, 45, 46, 47, 53, 62, 52, 60, 51, 58, 43, 42, 41, 40, 35, 26, 17, 8]
    } else if (index === 45) {
      return [13, 21, 29, 37, 38, 31, 46, 47, 54, 63, 53, 61, 52, 59, 44, 43, 42, 41, 36, 27, 18, 9]
    } else if (index === 46) {
      return [14, 22, 30, 38, 39, 47, 55, 54, 62, 53, 60, 45, 44, 43, 42, 37, 28, 19, 10]
    } else if (index ===47) {
      return [15, 23, 311, 39, 55, 63, 54, 61, 46, 45, 44, 43, 38, 29, 20, 11]
    } else if (index === 48) {
      return [16, 24, 32, 40, 41, 34, 27, 20, 49, 50, 51, 52, 57, 56]
    } else if (index === 49) {
      return [17, 25, 33, 41, 42, 35, 28, 21, 50, 51, 52, 53, 58, 57, 56, 48, 40]
    } else if (index === 50) {
      return [18, 26, 34, 42, 43, 36, 29, 22, 51, 52, 53, 54, 59, 58, 57, 49, 48, 41, 32]
    } else if (index === 51) {
      return [19, 27, 35, 43, 44, 37, 30, 23, 52, 53, 54, 55, 60, 59, 58, 50, 49, 48, 42, 33, 24]
    } else if (index === 52) {
      return [20, 28, 36, 44, 45, 38, 31, 53, 54, 55, 61, 60, 59, 51, 50, 49, 48, 43, 34, 25, 16]
    } else if (index === 53) {
      return [21, 29, 37, 45, 46, , 39, 54, 55, 62, 61, 60, 52, 51, 50, 49, 44, 35, 26, 17]
    } else if (index === 54) {
      return [22, 30, 38, 46, 47, 55, 63, 62, 61, 53, 52, 51, 50, 45, 36, 27, 18]
    } else if (index === 55) {
      return [23, 31, 39, 47, 63, 62, 61, 54, 53, 52, 51, 46, 37, 28, 19]
    } else if (index === 56) {
      return [24, 32, 40, 48, 49, 42, 35, 28, 57, 58, 59, 60]
    } else if (index === 57) {
      return [25, 33, 41, 49, 50, 43, 36, 29, 58, 59, 60, 61, 56, 48]
    } else if (index === 58) {
      return [26, 34, 42, 50, 51, 44, 37, 30, 59, 60, 61, 62, 57, 56, 49, 40]
    } else if (index === 59) {
      return [27, 35, 43, 51, 52, 45, 38, 31, 60, 61, 62, 63, 58, 57, 56, 50, 41, 32]
    } else if (index === 60) {
      return [28, 36, 44, 52, 53, 46, 39, 61, 62, 63, 59, 58, 57, 56, 51, 42, 33, 24]
    } else if (index === 61) {
      return [29, 37, 45, 53, 54, 47, 62, 63, 60, 59, 58, 57, 52, 43, 34, 25]
    } else if (index === 62) {
      return [30, 38, 46, 54, 55, 63, 61, 60, 59, 58, 53, 44, 35, 26]
    } else if (index === 63) {
      return [31, 39, 47, 55, 62, 61, 60, 59, 54, 45, 36, 27]
    }
  };

  if (type === 'magician' || type === 'daemon') {
    if (index === 0) {
      return [1, 9, 8]
    } else if (index === 1) {
      return [2, 10, 9, 8, 0]
    } else if (index === 2) {
      return [3, 11, 10, 9, 1]
    } else if (index === 3) {
      return [4, 12, 11, 10, 2]
    } else if (index === 4) {
      return [5, 13, 12, 11, 3]
    } else if (index === 5) {
      return [6, 14, 13, 12, 4]
    } else if (index === 6) {
      return [7, 15, 14, 13, 5]
    } else if (index === 7) {
      return [15, 14, 6]
    } else if (index === 8) {
      return [0, 1, 9, 17, 16]
    } else if (index === 9) {
      return [0, 1, 2, 10, 18, 17, 16, 8]
    } else if (index === 10) {
      return [1, 2, 3, 11, 19, 18, 17, 9]
    } else if (index === 11) {
      return [2, 3, 4, 12, 20, 19, 18, 10]
    } else if (index === 12) {
      return [3, 4, 5, 13, 21, 20, 19, 11]
    } else if (index === 13) {
      return [4, 5, 6, 14, 22, 21, 20, 12]
    } else if (index === 14) {
      return [5, 6, 7, 15, 23, 22, 21, 13]
    } else if (index === 15) {
      return [6, 7, 23, 22, 14]
    } else if (index === 16) {
      return [8, 9, 17, 25, 24]
    } else if (index === 17) {
      return [8, 9, 10, 18, 26, 25, 24, 16]
    } else if (index === 18) {
      return [9, 10, 11, 19, 27, 26, 25, 17]
    } else if (index === 19) {
      return [10, 11, 12, 20, 28, 27, 26, 18]
    } else if (index === 20) {
      return [11, 12, 13, 21, 29, 28, 27, 19]
    } else if (index === 21) {
      return [12, 13, 14, 22, 30, 29, 28, 20]
    } else if (index === 22) {
      return [13, 14, 15, 23, 31, 30, 29, 21]
    } else if (index ===23) {
      return [14, 15, 31, 30, 22]
    } else if (index === 24) {
      return [16, 17, 25, 33, 32]
    } else if (index === 25) {
      return [16, 17, 18, 26, 34, 33, 32, 24]
    } else if (index === 26) {
      return [17, 18, 19, 27, 35, 34, 33, 25]
    } else if (index === 27) {
      return [18, 19, 20, 28, 36, 35, 34, 26]
    } else if (index === 28) {
      return [19, 20, 21, 29, 37, 36, 35, 27]
    } else if (index === 29) {
      return [20, 21, 22, 30, 38, 37, 36, 28]
    } else if (index === 30) {
      return [21, 22, 23, 31, 39, 38, 37, 29]
    } else if (index === 31) {
      return [22, 23, 39, 38, 30]
    } else if (index ===32) {
      return [24, 25, 33, 41, 40]
    } else if (index === 33) {
      return [24, 25, 26, 34, 42, 41, 40, 32]
    } else if (index === 34) {
      return [25, 26, 27, 35, 43, 42, 41, 33]
    } else if (index === 35) {
      return [26, 27, 28, 36, 44, 43, 42, 34]
    } else if (index === 36) {
      return [27, 28, 29, 37, 45, 44, 43, 35]
    } else if (index === 37) {
      return [28, 29, 30, 38, 46, 45, 44, 36]
    } else if (index === 38) {
      return [29, 30, 31, 39, 47, 46, 45, 37]
    } else if (index === 39) {
      return [30, 31, 47, 46, 38]
    } else if (index === 40) {
      return [32, 33, 41, 49, 48]
    } else if (index === 41) {
      return [32, 33, 34, 42, 50, 49, 48, 40]
    } else if (index === 42) {
      return [33, 34, 35, 43, 51, 50, 49, 41]
    } else if (index === 43) {
      return [34, 35, 36, 44, 52, 51, 50, 42]
    } else if (index === 44) {
      return [35, 36, 37, 45, 53, 52, 51, 43]
    } else if (index === 45) {
      return [36, 37, 38, 46, 54, 53, 52, 44]
    } else if (index === 46) {
      return [37, 38, 39, 47, 55, 54, 53, 45]
    } else if (index ===47) {
      return [38, 39, 55, 54, 46]
    } else if (index === 48) {
      return [40, 41, 49, 57, 56]
    } else if (index === 49) {
      return [40, 41, 42, 50, 58, 57, 56, 48]
    } else if (index === 50) {
      return [41, 42, 43, 51, 59, 58, 57, 49]
    } else if (index === 51) {
      return [42, 43, 44, 52, 60, 59, 58, 50]
    } else if (index === 52) {
      return [43, 44, 45, 53, 61, 60, 59, 51]
    } else if (index === 53) {
      return [44, 45, 46, 54, 62, 61, 60, 52]
    } else if (index === 54) {
      return [45, 46, 47, 55, 63, 62, 61, 53]
    } else if (index === 55) {
      return [46, 47, 63, 62, 54]
    } else if (index === 56) {
      return [48, 49, 57]
    } else if (index === 57) {
      return [48, 49, 50, 58, 56]
    } else if (index === 58) {
      return [49, 50, 51, 59, 57]
    } else if (index === 59) {
      return [50, 51, 52, 60, 58]
    } else if (index === 60) {
      return [51, 52, 53, 61, 59]
    } else if (index === 61) {
      return [52, 53, 54, 62, 60]
    } else if (index === 62) {
      return [53, 54, 55, 63, 61]
    } else if (index === 63) {
      return [54, 55, 62]
    }
  };
}

export function variantsNearBattle(type, index) {
  if (type === 'bowman' || type === 'vampire' || type === 'swordsman' || type === 'undead' || type === 'magician' || type === 'daemon') {
    if (index === 0) {
      return [1, 9, 8]
    } else if (index === 1) {
      return [2, 10, 9, 8, 0]
    } else if (index === 2) {
      return [3, 11, 10, 9, 1]
    } else if (index === 3) {
      return [4, 12, 11, 10, 2]
    } else if (index === 4) {
      return [5, 13, 12, 11, 3]
    } else if (index === 5) {
      return [6, 14, 13, 12, 4]
    } else if (index === 6) {
      return [7, 15, 14, 13, 5]
    } else if (index === 7) {
      return [15, 14, 6]
    } else if (index === 8) {
      return [0, 1, 9, 17, 16]
    } else if (index === 9) {
      return [0, 1, 2, 10, 18, 17, 16, 8]
    } else if (index === 10) {
      return [1, 2, 3, 11, 19, 18, 17, 9]
    } else if (index === 11) {
      return [2, 3, 4, 12, 20, 19, 18, 10]
    } else if (index === 12) {
      return [3, 4, 5, 13, 21, 20, 19, 11]
    } else if (index === 13) {
      return [4, 5, 6, 14, 22, 21, 20, 12]
    } else if (index === 14) {
      return [5, 6, 7, 15, 23, 22, 21, 13]
    } else if (index === 15) {
      return [6, 7, 23, 22, 14]
    } else if (index === 16) {
      return [8, 9, 17, 25, 24]
    } else if (index === 17) {
      return [8, 9, 10, 18, 26, 25, 24, 16]
    } else if (index === 18) {
      return [9, 10, 11, 19, 27, 26, 25, 17]
    } else if (index === 19) {
      return [10, 11, 12, 20, 28, 27, 26, 18]
    } else if (index === 20) {
      return [11, 12, 13, 21, 29, 28, 27, 19]
    } else if (index === 21) {
      return [12, 13, 14, 22, 30, 29, 28, 20]
    } else if (index === 22) {
      return [13, 14, 15, 23, 31, 30, 29, 21]
    } else if (index ===23) {
      return [14, 15, 31, 30, 22]
    } else if (index === 24) {
      return [16, 17, 25, 33, 32]
    } else if (index === 25) {
      return [16, 17, 18, 26, 34, 33, 32, 24]
    } else if (index === 26) {
      return [17, 18, 19, 27, 35, 34, 33, 25]
    } else if (index === 27) {
      return [18, 19, 20, 28, 36, 35, 34, 26]
    } else if (index === 28) {
      return [19, 20, 21, 29, 37, 36, 35, 27]
    } else if (index === 29) {
      return [20, 21, 22, 30, 38, 37, 36, 28]
    } else if (index === 30) {
      return [21, 22, 23, 31, 39, 38, 37, 29]
    } else if (index === 31) {
      return [22, 23, 39, 38, 30]
    } else if (index ===32) {
      return [24, 25, 33, 41, 40]
    } else if (index === 33) {
      return [24, 25, 26, 34, 42, 41, 40, 32]
    } else if (index === 34) {
      return [25, 26, 27, 35, 43, 42, 41, 33]
    } else if (index === 35) {
      return [26, 27, 28, 36, 44, 43, 42, 34]
    } else if (index === 36) {
      return [27, 28, 29, 37, 45, 44, 43, 35]
    } else if (index === 37) {
      return [28, 29, 30, 38, 46, 45, 44, 36]
    } else if (index === 38) {
      return [29, 30, 31, 39, 47, 46, 45, 37]
    } else if (index === 39) {
      return [30, 31, 47, 46, 38]
    } else if (index === 40) {
      return [32, 33, 41, 49, 48]
    } else if (index === 41) {
      return [32, 33, 34, 42, 50, 49, 48, 40]
    } else if (index === 42) {
      return [33, 34, 35, 43, 51, 50, 49, 41]
    } else if (index === 43) {
      return [34, 35, 36, 44, 52, 51, 50, 42]
    } else if (index === 44) {
      return [35, 36, 37, 45, 53, 52, 51, 43]
    } else if (index === 45) {
      return [36, 37, 38, 46, 54, 53, 52, 44]
    } else if (index === 46) {
      return [37, 38, 39, 47, 55, 54, 53, 45]
    } else if (index ===47) {
      return [38, 39, 55, 54, 46]
    } else if (index === 48) {
      return [40, 41, 49, 57, 56]
    } else if (index === 49) {
      return [40, 41, 42, 50, 58, 57, 56, 48]
    } else if (index === 50) {
      return [41, 42, 43, 51, 59, 58, 57, 49]
    } else if (index === 51) {
      return [42, 43, 44, 52, 60, 59, 58, 50]
    } else if (index === 52) {
      return [43, 44, 45, 53, 61, 60, 59, 51]
    } else if (index === 53) {
      return [44, 45, 46, 54, 62, 61, 60, 52]
    } else if (index === 54) {
      return [45, 46, 47, 55, 63, 62, 61, 53]
    } else if (index === 55) {
      return [46, 47, 63, 62, 54]
    } else if (index === 56) {
      return [48, 49, 57]
    } else if (index === 57) {
      return [48, 49, 50, 58, 56]
    } else if (index === 58) {
      return [49, 50, 51, 59, 57]
    } else if (index === 59) {
      return [50, 51, 52, 60, 58]
    } else if (index === 60) {
      return [51, 52, 53, 61, 59]
    } else if (index === 61) {
      return [52, 53, 54, 62, 60]
    } else if (index === 62) {
      return [53, 54, 55, 63, 61]
    } else if (index === 63) {
      return [54, 55, 62]
    }
  };
}


export function variantsFarBattle(type, index) {
  if (type === 'bowman' || type === 'vampire') {
    if (index === 0) {
      return [2, 18, 16]
    } else if (index === 1) {
      return [3, 19, 17]
    } else if (index === 2) {
      return [4, 20, 18, 16, 0]
    } else if (index === 3) {
      return [5, 21, 19, 17, 1]
    } else if (index === 4) {
      return [6, 22, 20, 18, 2]
    } else if (index === 5) {
      return [7, 23, 21, 19, 3]
    } else if (index === 6) {
      return [22, 20, 4]
    } else if (index === 7) {
      return [23, 21, 5]
    } else if (index === 8) {
      return [10, 26, 24]
    } else if (index === 9) {
      return [11, 27, 25,]
    } else if (index === 10) {
      return [12, 28, 26, 24, 8]
    } else if (index === 11) {
      return [13, 29, 27, 25, 9]
    } else if (index === 12) {
      return [14, 30, 28, 26, 10]
    } else if (index === 13) {
      return [15, 31, 29, 27, 11]
    } else if (index === 14) {
      return [30, 29, 12]
    } else if (index === 15) {
      return [31, 29, 13]
    } else if (index === 16) {
      return [0, 2, 18, 34, 32]
    } else if (index === 17) {
      return [1, 3, 19, 35, 33]
    } else if (index === 18) {
      return [2, 4, 20, 36, 34, 32, 16, 0]
    } else if (index === 19) {
      return [3, 5, 21, 37, 35, 33, 17, 1]
    } else if (index === 20) {
      return [4, 6, 22, 38, 38, 34, 18, 2]
    } else if (index === 21) {
      return [5, 7, 23, 39, 37, 35, 19, 3]
    } else if (index === 22) {
      return [6, 38, 36, 20, 4]
    } else if (index ===23) {
      return [7, 39, 37, 21, 5]
    } else if (index === 24) {
      return [8, 10, 26, 42, 40]
    } else if (index === 25) {
      return [9, 11, 27, 43, 41, ]
    } else if (index === 26) {
      return [10, 12, 28, 44, 42, 40, 24, 8]
    } else if (index === 27) {
      return [11, 13, 29, 45, 43, 41, 25, 9]
    } else if (index === 28) {
      return [12, 14, 30, 46, 44, 42, 26, 10]
    } else if (index === 29) {
      return [13, 15, 31, 47, 45, 43, 27, 11]
    } else if (index === 30) {
      return [14, 46, 44, 28, 12]
    } else if (index === 31) {
      return [15, 47, 45, 29, 13]
    } else if (index ===32) {
      return [16, 18, 34, 50, 48]
    } else if (index === 33) {
      return [17, 19, 35, 51, 49]
    } else if (index === 34) {
      return [18, 20, 36, 52, 50, 48, 32, 16]
    } else if (index === 35) {
      return [19, 21, 37, 53, 51, 49, 33, 17]
    } else if (index === 36) {
      return [20, 22, 38, 54, 52, 50, 34, 18]
    } else if (index === 37) {
      return [21, 23, 39, 55, 53, 51, 35, 19]
    } else if (index === 38) {
      return [22, 54, 52, 36, 20]
    } else if (index === 39) {
      return [23, 55, 53, 37, 21]
    } else if (index === 40) {
      return [24, 26, 42, 58, 56]
    } else if (index === 41) {
      return [25, 27, 43, 59, 57]
    } else if (index === 42) {
      return [26, 28, 44, 60, 58, 56, 40, 24]
    } else if (index === 43) {
      return [27, 29, 45, 61, 59, 57, 41, 25]
    } else if (index === 44) {
      return [28, 30, 46, 62, 60, 58, 42, 26]
    } else if (index === 45) {
      return [29, 31, 47, 63, 61, 59, 43, 27]
    } else if (index === 46) {
      return [30, 62, 60, 44, 28]
    } else if (index === 47) {
      return [31, 63, 61, 45, 29]
    } else if (index === 48) {
      return [32, 34, 50]
    } else if (index === 49) {
      return [33, 35, 51]
    } else if (index === 50) {
      return [34, 36, 52, 48, 32]
    } else if (index === 51) {
      return [35, 37, 53, 49, 33]
    } else if (index === 52) {
      return [36, 38, 54, 50, 34]
    } else if (index === 53) {
      return [37, 39, 55, 51, 35]
    } else if (index === 54) {
      return [38, 52, 36]
    } else if (index === 55) {
      return [39, 53, 37]
    } else if (index === 56) {
      return [40, 42, 58]
    } else if (index === 57) {
      return [41, 43, 59]
    } else if (index === 58) {
      return [42, 44, 60, 56, 40]
    } else if (index === 59) {
      return [43, 45, 61, 57, 41]
    } else if (index === 60) {
      return [44, 46, 62, 58, 42]
    } else if (index === 61) {
      return [45, 47, 63, 59, 43]
    } else if (index === 62) {
      return [46, 60, 44]
    } else if (index === 63) {
      return [47, 61, 45]
    }
  }

  if (type === 'magician' || type === 'daemon') {
    if (index === 0) {
      return [2, 3, 4, 18, 27, 36, 16, 24, 32]
    } else if (index === 1) {
      return [3, 4, 5, 19, 28, 37, 17, 25, 33]
    } else if (index === 2) {
      return [4, 5, 6, 20, 29, 38, 18, 26, 34, 16, 0]
    } else if (index === 3) {
      return [5, 6, 7, 21, 30, 39, 19, 27, 35, 17, 24, 1, 0]
    } else if (index === 4) {
      return [6, 7, 22, 31, 20, 28, 36, 18, 25, 32, 2, 1, 0]
    } else if (index === 5) {
      return [7, 23, 21, 29, 37, 19, 26, 33, 3, 2, 1]
    } else if (index === 6) {
      return [22, 30, 38, 20, 27, 34, 4, 3, 2]
    } else if (index === 7) {
      return [23, 31, 39, 21, 28, 35, 5, 4, 3]
    } else if (index === 8) {
      return [10, 11, 12, 26, 35, 44, 24, 32, 40]
    } else if (index === 9) {
      return [11, 12, 13, 27, 36, 45, 25, 33, 41]
    } else if (index === 10) {
      return [12, 13, 14, 28, 37, 46, 26, 34, 42, 24, 8]
    } else if (index === 11) {
      return [13, 14, 15, 29, 38, 47, 27, 35, 43, 25, 32, 9, 8]
    } else if (index === 12) {
      return [14, 15, 30, 39, 28, 36, 44, 26, 33, 40, 10, 9, 8]
    } else if (index === 13) {
      return [15, 31, 29, 37, 45, 27, 34, 41, 11, 10, 9]
    } else if (index === 14) {
      return [30, 38, 46, 28, 35, 42, 12, 11, 10]
    } else if (index === 15) {
      return [31, 39, 47, 29, 36, 43, 13, 12, 11]
    } else if (index === 16) {
      return [0, 2, 18, 19, 20, 34, 43, 52, 32, 40, 48]
    } else if (index === 17) {
      return [1, 3, 19, 20, 21, 35, 44, 53, 33, 41, 49]
    } else if (index === 18) {
      return [2, 4, 20, 21, 22, 36, 45, 54, 34, 42, 50, 32, 16, 0]
    } else if (index === 19) {
      return [3, 5, 21, 22, 23, 37, 46, 55, 35, 43, 51, 33, 40, 17, 16, 1]
    } else if (index === 20) {
      return [4, 6, 22, 23, 38, 47, 36, 44, 52, 34, 41, 48, 18, 17, 16, 2]
    } else if (index === 21) {
      return [5, 7, 23, 39, 37, 45, 53, 35, 42, 49, 19, 18, 17, 3]
    } else if (index === 22) {
      return [6, 28, 46, 54, 36, 43, 50, 20, 19, 18, 4]
    } else if (index ===23) {
      return [7, 39, 47, 55, 37, 44, 51, 21, 20, 19, 5]
    } else if (index === 24) {
      return [8, 0, 10, 3, 26, 27, 28, 42, 51, 60, 40, 48, 56]
    } else if (index === 25) {
      return [9, 1, 11, 4, 27, 28, 29, 43, 52, 61, 41, 49, 57]
    } else if (index === 26) {
      return [10, 2, 12, 5, 28, 29, 30, 44, 53, 62, 42, 50, 58, 40, 24, 8]
    } else if (index === 27) {
      return [11, 3, 13, 6, 29, 30, 31, 45, 54, 63, 43, 51, 59, 41, 48, 25, 24, 9, 0]
    } else if (index === 28) {
      return [12, 4, 14, 7, 30, 31, 46, 55, 44, 52, 60, 42, 49, 56, 26, 25, 24, 10, 1]
    } else if (index === 29) {
      return [13, 5, 15, 31, 47, 45, 53, 61, 43, 50, 57, 27, 26, 25, 11, 2]
    } else if (index === 30) {
      return [14, 6, 46, 54, 62, 44, 51, 58, 28, 27, 26, 12, 3]
    } else if (index === 31) {
      return [15, 7, 47, 55, 63, 45, 52, 59, 29, 28, 27, 13, 4]
    } else if (index ===32) {
      return [16, 8, 0, 18, 11, 4, 34, 35, 36, 50, 59, 48, 56]
    } else if (index === 33) {
      return [17, 9, 1, 19, 12, 5, 35, 36, 37, 51, 60, 49, 57]
    } else if (index === 34) {
      return [18, 10, 2, 20, 13, 6, 36, 37, 38, 52, 61, 50, 58, 48, 32, 16]
    } else if (index === 35) {
      return [19, 11, 3, 21, 14, 7, 37, 38, 39, 53, 62, 51, 59, 49, 56, 33, 32, 17, 8]
    } else if (index === 36) {
      return [20, 12, 4, 22, 15, 38, 39, 54, 63, 52, 60, 50, 57, 34, 33, 32, 18, 9, 0]
    } else if (index === 37) {
      return [21, 13, 5, 23, 39, 55, 53, 61, 51, 58, 35, 34, 33, 19, 10, 1]
    } else if (index === 38) {
      return [22, 14, 6, 54, 62, 52, 59, 36, 35, 34, 20, 11, 2]
    } else if (index === 39) {
      return [23, 15, 7, 55, 63, 53, 60, 37, 36, 35, 21, 12, 3]
    } else if (index === 40) {
      return [24, 16, 8, 26, 19, 12, 42, 43, 44, 58, 56]
    } else if (index === 41) {
      return [25, 17, 9, 27, 20, 13, 43, 44, 45, 59, 57]
    } else if (index === 42) {
      return [26, 18, 10, 28, 21, 14, 44, 45, 46, 60, 58, 56, 40, 24]
    } else if (index === 43) {
      return [27, 19, 11, 29, 22, 15, 45, 46, 47, 61, 59, 57, 41, 40, 25, 16]
    } else if (index === 44) {
      return [28, 20, 12, 30, 23, 46, 47, 62, 60, 58, 42, 41, 40, 26, 17, 8]
    } else if (index === 45) {
      return [29, 21, 13, 31, 47, 63, 61, 59, 43, 42, 41, 27, 18, 9]
    } else if (index === 46) {
      return [30, 22, 14, 62, 60, 44, 43, 42, 28, 19, 10]
    } else if (index === 47) {
      return [31, 23, 15, 63, 61, 45, 44, 43, 29, 20, 11]
    } else if (index === 48) {
      return [32, 24, 16, 34, 27, 20, 50, 51, 52]
    } else if (index === 49) {
      return [33, 25, 17, 35, 28, 21, 51, 52, 53]
    } else if (index === 50) {
      return [34, 26, 18, 36, 29, 22, 52, 53, 54, 48, 32]
    } else if (index === 51) {
      return [35, 27, 19, 37, 30, 23, 53, 54, 55, 49, 48, 33, 24]
    } else if (index === 52) {
      return [36, 28, 20, 38, 31, 54, 55, 50, 49, 48, 34, 25, 16]
    } else if (index === 53) {
      return [37, 29, 21, 39, 55, 51, 50, 49, 35, 26, 17]
    } else if (index === 54) {
      return [38, 30, 22, 52, 51, 50, 36, 27, 18]
    } else if (index === 55) {
      return [39, 31, 23, 53, 52, 51, 37, 28, 19]
    } else if (index === 56) {
      return [40, 32, 24, 42, 35, 28, 58, 59, 60]
    } else if (index === 57) {
      return [41, 33, 25, 43, 36, 29, 59, 60, 61]
    } else if (index === 58) {
      return [42, 34, 26, 44, 37, 30, 60, 61, 62, 56, 40]
    } else if (index === 59) {
      return [43, 35, 27, 45, 38, 31, 61, 62, 63, 57, 56, 41, 32]
    } else if (index === 60) {
      return [44, 36, 28, 46, 39, 62, 63, 58, 57, 56, 42, 33, 24]
    } else if (index === 61) {
      return [45, 37, 29, 47, 63, 59, 58, 57, 43, 34, 25]
    } else if (index === 62) {
      return [46, 38, 30, 60, 59, 58, 44, 35, 26]
    } else if (index === 63) {
      return [47, 39, 31, 61, 60, 59, 45, 36, 27]
    }
  }
}
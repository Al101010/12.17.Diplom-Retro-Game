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
export const getNeighborCount = (coords, universe) => {
  let result = 0;

  if (coords.y > 0 && universe[coords.y - 1][coords.x]) {
    result += 1;
  }
  if (coords.y > 0 && coords.x > 0  && universe[coords.y - 1][coords.x - 1]) {
    result += 1;
  }
  if (coords.y > 0 && coords.x < (universe.length - 1) && universe[coords.y - 1][coords.x + 1]) {
    result += 1;
  }
  if (coords.x > 0  && universe[coords.y][coords.x - 1]) {
    result += 1;
  }
  if (coords.x < (universe.length - 1) && universe[coords.y][coords.x + 1]) {
    result += 1;
  }
  if ((coords.y < universe.length - 1) && coords.x > 0 && universe[coords.y + 1][coords.x - 1]) {
    result += 1;
  }
  if ((coords.y < universe.length - 1) &&  universe[coords.y + 1][coords.x]) {
    result += 1;
  }
  if ((coords.y < universe.length - 1) && coords.x < (universe.length - 1) && universe[coords.y + 1][coords.x + 1]) {
    result += 1;
  }

  return result;
};

export const rules = (coords, universe) => {
  const neighborCount = getNeighborCount(coords, universe);

  if (!universe[coords.y][coords.x] && neighborCount === 3) {
    return true;
  } else if (universe[coords.y][coords.x] && (neighborCount < 2 || neighborCount > 3)) {
    return false;
  }

  return universe[coords.y][coords.x];
}

export const universeCycle = (universe) => {
  const universeClone = JSON.parse(JSON.stringify(universe));

  for (let y = 0; y < universe.length; y++) {
    for (let x = 0; x < universe.length; x++) {
      universeClone[y][x] = rules({ y, x }, universe);
    }
  }

  return universeClone;
};

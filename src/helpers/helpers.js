import PATTERNS from './patterns';

export const placePatternIntoUniverse = (universe, patternId, coords) => {
  const universeCopy = JSON.parse(JSON.stringify(universe));
  const patternMatrix = PATTERNS[patternId];

  for (let i = 0; i < patternMatrix[0].length; i++) {
    for (let j = 0; j < patternMatrix.length; j++) {
      universeCopy[coords.y + j][coords.x + i] = patternMatrix[j][i];
    }
  }

  return universeCopy;
};

export const previewPatternIntoUnivere = (universe, patternId, coords) => {
  const universeCopy = JSON.parse(JSON.stringify(universe));
  const patternMatrix = PATTERNS[patternId];

  for (let i = 0; i < universe.length; i++) {
    for (let j = 0; j < universe[i].length; j++) {
      if (universeCopy[i][j] === 'preview') {
        universeCopy[i][j] = false;
      }
    }
  }

  for (let i = 0; i < patternMatrix[0].length; i++) {
    for (let j = 0; j < patternMatrix.length; j++) {
      universeCopy[coords.y + j][coords.x + i] = 'preview';
    }
  }

  return universeCopy;
};

export const doesPatterFitsInUniverse = (universeSize, coords, patternId) => {
  const patternMatrix = PATTERNS[patternId];
  const width = patternMatrix[0].length;
  const height = patternMatrix.length;

  return coords.x + width <= universeSize && coords.y + height <= universeSize
}

export const removePatternShadow = (universe, patternId, coords) => {
  const universeCopy = JSON.parse(JSON.stringify(universe));
  const patternMatrix = PATTERNS[patternId];

  for (let i = 0; i < patternMatrix[0].length; i++) {
    for (let j = 0; j < patternMatrix.length; j++) {
      universeCopy[coords.y + j][coords.x + i] = false;
    }
  }

  return universeCopy;
};

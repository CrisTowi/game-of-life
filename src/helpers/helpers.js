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
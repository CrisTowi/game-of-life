<script>
import { universe, universeSize, draggingPatternId, dropCoords } from '../store';
import {
  placePatternIntoUniverse,
  doesPatterFitsInUniverse,
} from '../helpers/helpers';

let prevCoords = { y: 0, x: 0 };

const handleChangeCellStatus = ({y, x}, newStatus) => {
  universe.update((oldUniverse) => {
    const unvierseClone = JSON.parse(JSON.stringify(oldUniverse));
    unvierseClone[y][x] = newStatus === undefined ? !unvierseClone[y][x] : newStatus;
    return unvierseClone;
  });
}

const handleMouseValidAction = (e, coords) => {
  if (e.buttons === 1) {
    handleChangeCellStatus(coords, true);
  } else if (e.buttons === 2) {
    handleChangeCellStatus(coords, false);
  } else if (e.buttons === 0) {
    handleChangeCellStatus(coords);
  }
};

const handleMouseOverValidAction = (e, coords) => {
  if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    if (e.buttons === 1) {
      handleChangeCellStatus(coords, true);
    } else if (e.buttons === 2) {
      handleChangeCellStatus(coords, false);
    }
  }
};

const handleDrop = (e, coords) => {
  if (doesPatterFitsInUniverse($universeSize, coords, $draggingPatternId)) {
    const newUniverse = placePatternIntoUniverse($universe, $draggingPatternId, coords);
    universe.update(() => newUniverse);
  }
};

const handleDragOver = (e, coords) => {
  e.preventDefault();

  if (doesPatterFitsInUniverse($universeSize, coords, $draggingPatternId)) {
    if (prevCoords.x !== coords.x || prevCoords.y !== coords.y) {
      dropCoords.update(() => coords);
    }
  }
}
</script>

<style>
.Universe {
  display: grid;
  height: 100%;
  width: 100%;
}
.cell {
  cursor: pointer;
  border: 1px solid var(--gray);
  box-sizing: border-box;
}

.cell--alive {
  background-color: black;
}

.cell--preview {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>

<div class="Universe" style={`
  grid-template-columns: repeat(${$universeSize}, ${100 / $universeSize}%);
  grid-template-rows: repeat(${$universeSize}, ${100 / $universeSize}%);
`}>
  {#each $universe as universeRow, y}
    {#each universeRow as universeCell, x}
      <div
        on:drop={(e) => handleDrop(e, { x, y })}
        on:dragover={(e) => handleDragOver(e, { x, y })}
        on:mouseover={(e) => handleMouseOverValidAction(e, {y, x})}
        on:mousedown={(e) => handleMouseValidAction(e, {y, x})}
        class={`cell ${ $universe[y][x] === true ? 'cell--alive' : '' } ${ $universe[y][x] === 'preview' ? 'cell--preview' : '' }`} />
    {/each}
  {/each}
</div>
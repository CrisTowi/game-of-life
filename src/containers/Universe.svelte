<script>
import { universe, universeSize } from '../store';

const handleChangeCellStatus = ({y, x}, newStatus) => {
  universe.update((oldUniverse) => {
    const unvierseClone = JSON.parse(JSON.stringify(oldUniverse));
    unvierseClone[y][x] = newStatus;
    return unvierseClone;
  });
}

const handleMouseValidAction = (e, coords) => {
  if (e.buttons === 1) {
    handleChangeCellStatus(coords, true);
  } else if (e.buttons === 2) {
    handleChangeCellStatus(coords, false);
  }
};
</script>

<style>
.Universe {
  display: grid;
  height: 100%;
  width: 100%;
}
.cell {
  cursor: pointer;
  border: 0.1px solid #C1C1C1;
  box-sizing: border-box;
}

.cell--alive {
  background-color: black;
}
</style>

<div class="Universe" style={`
  grid-template-columns: repeat(${$universeSize}, ${100 / $universeSize}%);
  grid-template-rows: repeat(${$universeSize}, ${100 / $universeSize}%);
`}>
  {#each $universe as universeRow, y}
    {#each universeRow as universeCell, x}
      <div
        on:mouseover={(e) => handleMouseValidAction(e, {y, x})}
        on:mousedown={(e) => handleMouseValidAction(e, {y, x})}
        class={`cell ${ $universe[y][x] ? 'cell--alive' : '' }`} />
    {/each}
  {/each}
</div>
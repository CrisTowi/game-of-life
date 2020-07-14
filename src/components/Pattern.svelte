<script>
export let name;
export let patternId;
export let onDragStart;
</script>

<style>
.Pattern {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0px;
  box-sizing: border-box;
  border-top: 1px solid var(--gray);
}

</style>

<div class="Pattern">
  <img src="/img/{name}.gif" alt={`${name} pattern`} on:dragstart={(e) => onDragStart(e, patternId)}>
</div>

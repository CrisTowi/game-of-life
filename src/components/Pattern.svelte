<script>
export let displayName;
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

  display: flex;
  flex-direction: column;
}

.Pattern p {
  margin-top: 0px;
  font-weight: 600;
}

</style>

<div class="Pattern">
  <div>
    <p>{displayName}</p>
  </div>
  <img src="/img/{name}.gif" alt={`${name} pattern`} on:dragstart={(e) => onDragStart(e, patternId)}>
</div>

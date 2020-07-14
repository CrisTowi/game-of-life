<script>
export let options;
export let active;
export let onChange;
</script>

<style>

.SelectControl-options {
  display: flex
}

.SelectControl-option {
  border: 1px solid var(--gray);
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
  text-align: center;
}

.SelectControl-option--active {
  background-color: var(--background-green);
  color: white;
}

.SelectControl-option p {
  margin: 0px;
  padding: 0px;
  text-align: center;
}
</style>

<div class="SelectControl">
  <div class="SelectControl-options">
    {#each options as option}
      <div
          on:click={() => onChange(option.value)}
          class={`SelectControl-option ${option.value === active ? 'SelectControl-option--active' : ''}`}
          style={`
            width: ${100 / options.length}%;
          `}>
        <p>
          {option.label}
        </p>
      </div>
    {/each}
  </div>
</div>
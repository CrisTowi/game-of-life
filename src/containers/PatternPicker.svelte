<script>
import Pattern from '../components/Pattern.svelte';

const handleDragStart = (e, patternId) => {
  e.dataTransfer.setData("patternId", patternId);
};
</script>

<div class="PatternPicker">
  <!-- <Pattern name={'pulsar'} /> -->
  <!-- <Pattern name={'penta-decathlon'} /> -->
  <Pattern name={'glider'} patternId={'GLIDER'} onDragStart={handleDragStart} />
  <Pattern name={'pulsar'} patternId={'PULSAR'} onDragStart={handleDragStart} />
</div>
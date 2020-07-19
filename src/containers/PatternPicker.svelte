<script>
import { draggingPatternId } from '../store';
import Pattern from '../components/Pattern.svelte';

const handleDragStart = (e, patternId) => {
  draggingPatternId.update(() => patternId);
};
</script>

<style>
.PatternPicker {
  height: calc(100vh - 80px);
  overflow-y: scroll;
}

.PatternPicker h3{
  text-align: center;
}
</style>

<div class="PatternPicker">
  <div class="PatternPicker-title">
    <h3>Drag and Drop patterns inside the universe</h3>
  </div>

  <Pattern
    displayName={'Glider'}
    name={'glider'}
    patternId={'GLIDER'}
    onDragStart={handleDragStart}
  />
  <Pattern
    displayName={'Light-weight spaceship'}
    name={'lwss'}
    patternId={'LWSS'}
    onDragStart={handleDragStart}
  />
  <Pattern
    displayName={'Middle-weight spaceship'}
    name={'mwss'}
    patternId={'MWSS'}
    onDragStart={handleDragStart}
  />
  <Pattern
    displayName={'Heavy-weight spaceship'}
    name={'hwss'}
    patternId={'HWSS'}
    onDragStart={handleDragStart}
  />
  <Pattern
    displayName={'Pulsar'}
    name={'pulsar'}
    patternId={'PULSAR'}
    onDragStart={handleDragStart}
  />
  <Pattern
    displayName={'Penta decathlon'}
    name={'penta-decathlon'}
    patternId={'PENTA_DECATHLON'}
    onDragStart={handleDragStart}
  />
  <Pattern
    displayName={'Gospers Glider gun'}
    name={'gospers-glider-gun'}
    patternId={'GOSPERS_GLIDER_GUN'}
    onDragStart={handleDragStart}
  />
  <Pattern
    displayName={'Copperhead'}
    name={'copperhead'}
    patternId={'COPPERHEAD'}
    onDragStart={handleDragStart}
  />
</div>
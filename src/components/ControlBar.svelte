<script>
import { universeSize, active, interval, speed } from '../store';
import SelectControl from './SelectControl.svelte';


const handleControlChange = (value, property) => {
  switch (property) {
    case 'active':
      active.update(() => value);
      break;
    case 'speed':
      speed.update(() => value);
      break;
    case 'universeSize':
      universeSize.update(() => value);
      break;
    default:
      return;
  }
};
</script>

<style>
.ControlBar {
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 16px 16px 0px 16px;
  gap: 16px;
}
</style>

<div class="ControlBar">
  <div class="ControlBar-item">
    <SelectControl
      onChange={(value) => handleControlChange(value, 'active')}
      active={$active}
      options={[
        { value: true, label: "Active" },
        { value: false, label: "Pause" },
      ]}
    />
  </div>
  <div class="ControlBar-item">
    <SelectControl
      onChange={(value) => handleControlChange(value, 'speed')}
      active={$speed}
      options={[
        { value: 100, label: "100ms" },
        { value: 300, label: "300ms" },
        { value: 700, label: "700ms" },
        { value: 1000, label: "1s" },
      ]}
    />
  </div>
  <div class="ControlBar-item">
    <SelectControl
      onChange={(value) => handleControlChange(value, 'universeSize')}
      active={$universeSize}
      options={[
        { value: 25, label: "25" },
        { value: 50, label: "50" },
        { value: 75, label: "75" },
        { value: 100, label: "100" },
        { value: 150, label: "150" },
      ]}
    />
  </div>
</div>
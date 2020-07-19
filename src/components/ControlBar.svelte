<script>
import { universeSize, active, interval, speed } from '../store';
import SelectControl from './SelectControl.svelte';

export let visible;
export let onChangeControl;

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

  onChangeControl();
};
</script>

<style>
.ControlBar {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
  height: 50px;
  padding: 16px 16px 0px 16px;
  transition: left 0.3s;
}

@media screen and (max-width: 1024px) {
	.ControlBar {
		position: fixed;
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-around;
    background-color: #ECECEC;
    top: 0px;
    left: -285px;
	}

  .ControlBar--visible {
    left: 0px;
    top: 0px;
	}
}

</style>

<div class={`ControlBar ${visible ? 'ControlBar--visible' : ''}`}>
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
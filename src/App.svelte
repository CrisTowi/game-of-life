<script>
// Components
import ControlBar from './components/ControlBar.svelte';

// Containers
import PatternPicker from './containers/PatternPicker.svelte';
import Universe from './containers/Universe.svelte';
</script>

<style>
.AppContainer {
	display: grid;
	grid-template-columns: 2fr 1fr;
}
</style>

<div class="App">
	<ControlBar />

	<div class="AppContainer">
		<div class="AppContainer-Universe">
			<Universe />
		</div>
		<div class="AppContainer-PatternPicker">
			<PatternPicker />
		</div>
	</div>
</div>
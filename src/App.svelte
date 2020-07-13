<script>
// Store
import { universe, universeSize } from './store';

// Components
import ControlBar from './components/ControlBar.svelte';

// Containers
import PatternPicker from './containers/PatternPicker.svelte';
import Universe from './containers/Universe.svelte';

// Helpers
import { universeCycle } from './helpers/rules';

universeSize.subscribe((newUniverseSize) => {
	universe.update(() => {
		return (new Array(newUniverseSize)).fill((new Array(newUniverseSize)).fill(false));
	});
});

setInterval(() => {
	return universe.update(() => universeCycle($universe));	
}, 600);

document.addEventListener('contextmenu', event => event.preventDefault());
</script>

<style>
:global(body) {
	margin: 0px;
	padding: 0px;
}

.AppContainer {
	display: grid;
	gap: 10px;
	grid-template-columns: 3fr 1fr;
	height: calc(100vh - 50px);
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
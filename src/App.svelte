<script>
// Store
import {
	active,
	interval,
	speed,
	universe,
	universeSize,
} from './store';

// Components
import ControlBar from './components/ControlBar.svelte';

// Containers
import PatternPicker from './containers/PatternPicker.svelte';
import Universe from './containers/Universe.svelte';

// Helpers
import { universeCycle } from './helpers/rules';


active.subscribe((newActive) => {
	if (newActive) {
		interval.update(() => {
			return setInterval(() => universe.update(() => universeCycle($universe)), $speed);
		});
	} else {
		clearInterval($interval);
		interval.update(() => null);
	}
});

speed.subscribe((newSpeed) => {
	clearInterval($interval);

	if ($active){
		interval.update(() => {
			return setInterval(() => universe.update(() => universeCycle($universe)), newSpeed);
		});
	}
});

universeSize.subscribe((newUniverseSize) => {
	universe.update(() => {
		return (new Array(newUniverseSize)).fill((new Array(newUniverseSize)).fill(false));
	});
});

document.addEventListener('contextmenu', event => event.preventDefault());
</script>

<style>
:global(body) {
	margin: 0px;
	padding: 0px;
}

:global(:root){
	--background-green: #65C98B;
	--gray: #C1C1C1;
}

.AppContainer {
	display: grid;
	gap: 10px;
	/* grid-template-columns: 3fr 1fr; */
	height: calc(100vh - 50px);
}
</style>

<div class="App">
	<ControlBar />

	<div class="AppContainer">
		<div>
			<Universe />
		</div>
		<!-- <div>
			<PatternPicker />
		</div> -->
	</div>
</div>
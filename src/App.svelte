<script>
// Store
import {
	active,
	draggingPatternId,
	interval,
	speed,
	universe,
	universeSize,
	dropCoords,
} from './store';

// Components
import ControlBar from './components/ControlBar.svelte';

// Containers
import PatternPicker from './containers/PatternPicker.svelte';
import Universe from './containers/Universe.svelte';

// Helpers
import { universeCycle } from './helpers/rules';
import { previewPatternIntoUnivere, removePatternShadow } from './helpers/helpers';

let visible = false;

const handleMenuClick = () => {
	visible = !visible;
};

const handleChangeControl = () => {
	visible = !visible;
}

const handleDropInApp = (e) => {
	if (!e.target.classList.contains('cell')) {
		const newUniverse = removePatternShadow($universe, $draggingPatternId, $dropCoords);
		universe.update(() => newUniverse);
	}
}

dropCoords.subscribe((newDropCoords) => {
	if (newDropCoords) {
		const newUniverse = previewPatternIntoUnivere($universe, $draggingPatternId, newDropCoords);
		universe.update(() => newUniverse);
	}
});

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
	padding: 0px 16px 16px 16px;
	box-sizing: border-box;
	display: grid;
	gap: 10px;
	grid-template-columns: 4fr 1fr;
	height: calc(100vh - 66px);
}

.hamburger-button {
	display: none;
}

@media screen and (max-width: 1024px) {
	.PatternPicker-container {
		display: none;
	}

	.AppContainer {
		grid-template-columns: 1fr;
		height: 100vh;
	}

	.hamburger-button {
		border-radius: 50%;
		display: block;
		height: 40px;
		left: 10px;
		position: fixed;
		top: 10px;
		width: 40px;
		z-index: 1;
		background-color: #ECECEC;
		text-align: center;
		line-height: 40px;
	}
}

</style>

<div class="App"
	on:dragover={(e) => e.preventDefault()}
	on:drop={handleDropInApp}>
	<div on:click={handleMenuClick} class="hamburger-button">
		<i class="fas fa-bars"></i>
	</div>
	<ControlBar onChangeControl={handleChangeControl} visible={visible} />
	<div class="AppContainer">
		<div class="Universe-container">
			<Universe />
		</div>
		<div class="PatternPicker-container">
			<PatternPicker />
		</div>
	</div>
</div>
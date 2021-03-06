import { writable } from 'svelte/store';

export const universe = writable(null);
export const universeSize = writable(25);
export const active = writable(false);
export const interval = writable(null);
export const speed = writable(100);
export const draggingPatternId = writable(null);
export const dropCoords = writable(null);

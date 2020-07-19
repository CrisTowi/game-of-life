import { writable } from 'svelte/store';

export const universe = writable(null);
export const universeSize = writable(4);
export const active = writable(false);
export const interval = writable(null);
export const speed = writable(100);

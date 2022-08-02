import { writable } from 'svelte/store';
import type { Point } from '../types/point.type';

const point: Point = { x: 0, y: 0 };

function createPoint() {
	const { subscribe, set, update } = writable(point);

	return {
		subscribe,
		setpoint: (newPoint: Point) =>
			update((p) => {
				p.x = newPoint.x;
				p.y = newPoint.y;

				return p;
			}),
		reset: () => set({ x: 0, y: 0 })
	};
}

export const workOverlayPoint = createPoint();

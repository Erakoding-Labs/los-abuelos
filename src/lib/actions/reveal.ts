import type { Action } from 'svelte/action';

interface RevealOptions {
	/** Stagger delay in ms before the element animates in. */
	delay?: number;
	/** Translate axis: 'y' (default), 'x', or 'scale'. */
	axis?: 'y' | 'x' | 'scale';
	/** Only animate once (default true). */
	once?: boolean;
	/** Intersection threshold (0–1). */
	threshold?: number;
}

/**
 * Motion-style scroll reveal. Adds `data-reveal` state attributes that the
 * global stylesheet animates. Uses IntersectionObserver — zero runtime cost
 * once visible, and respects prefers-reduced-motion via CSS.
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options = {}) => {
	const { delay = 0, axis = 'y', once = true, threshold = 0.15 } = options;

	node.setAttribute('data-reveal', 'out');
	if (axis !== 'y') node.setAttribute('data-reveal-axis', axis);
	if (delay) node.style.transitionDelay = `${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.setAttribute('data-reveal', 'in');
					if (once) observer.unobserve(node);
				} else if (!once) {
					node.setAttribute('data-reveal', 'out');
				}
			}
		},
		{ threshold, rootMargin: '0px 0px -8% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};

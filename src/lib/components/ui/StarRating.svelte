<script lang="ts">
	import { Star } from '@lucide/svelte';
	import { cn } from '$lib/utils';

	type Props = {
		rating?: number;
		size?: number;
		class?: string;
	};

	let { rating = 5, size = 16, class: className }: Props = $props();

	// Render 5 stars; fractional last star clipped via width.
	const stars = [0, 1, 2, 3, 4];
</script>

<div
	class={cn('inline-flex items-center gap-0.5', className)}
	role="img"
	aria-label={`${rating} out of 5 stars`}
>
	{#each stars as i (i)}
		{@const fill = Math.max(0, Math.min(1, rating - i))}
		<span class="relative inline-block" style={`width:${size}px;height:${size}px`}>
			<Star {size} class="absolute inset-0 text-gold-500/30" />
			<span class="absolute inset-0 overflow-hidden" style={`width:${fill * 100}%`}>
				<Star {size} class="text-gold-500" fill="currentColor" />
			</span>
		</span>
	{/each}
</div>

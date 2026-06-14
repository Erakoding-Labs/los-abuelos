<script lang="ts">
	import type { MenuItem } from '$lib/data/menu';
	import { reveal } from '$lib/actions/reveal';
	import { Flame, Leaf } from '@lucide/svelte';
	import Badge from './ui/Badge.svelte';

	let { item, delay = 0 }: { item: MenuItem; delay?: number } = $props();
</script>

<article
	use:reveal={{ delay }}
	class="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/8 bg-white shadow-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-lift"
>
	{#if item.image}
		<div class="relative aspect-[5/4] overflow-hidden bg-cream-dark">
			<img
				src={item.image}
				alt={item.name}
				loading="lazy"
				class="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
			></div>
			{#if item.popular}
				<div class="absolute left-3 top-3">
					<Badge variant="popular"><Flame size={11} /> Popular</Badge>
				</div>
			{/if}
		</div>
	{/if}
	<div class="flex flex-1 flex-col p-5">
		<div class="flex items-start justify-between gap-3">
			<h3 class="font-display text-lg font-semibold text-charcoal">{item.name}</h3>
			<span class="shrink-0 font-display text-lg font-semibold text-terracotta-600"
				>{item.price}</span
			>
		</div>
		<p class="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">{item.description}</p>
		<div class="mt-3 flex flex-wrap gap-2">
			{#if item.popular && !item.image}
				<Badge variant="popular"><Flame size={11} /> Popular</Badge>
			{/if}
			{#if item.vegetarian}
				<Badge variant="olive"><Leaf size={11} /> Vegetarian</Badge>
			{/if}
		</div>
	</div>
</article>

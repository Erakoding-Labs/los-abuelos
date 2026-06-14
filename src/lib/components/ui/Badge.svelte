<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	type Props = {
		variant?: 'popular' | 'gold' | 'neutral' | 'olive';
		class?: string;
		children: Snippet;
	};

	let { variant = 'neutral', class: className, children }: Props = $props();

	const styles: Record<NonNullable<Props['variant']>, string> = {
		popular: 'bg-terracotta-500 text-cream',
		gold: 'bg-gold-500/15 text-gold-600 ring-1 ring-gold-500/30',
		olive: 'bg-olive-500/12 text-olive-600 ring-1 ring-olive-500/25',
		neutral: 'bg-charcoal/8 text-charcoal/70'
	};
</script>

<span
	class={cn(
		'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider',
		styles[variant],
		className
	)}
>
	{@render children()}
</span>

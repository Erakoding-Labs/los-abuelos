<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	type Props = {
		class?: string;
		children: Snippet;
	};

	let { class: className, children }: Props = $props();
</script>

<div
	class={cn(
		'rounded-2xl border border-charcoal/8 bg-white/70 shadow-soft backdrop-blur-sm',
		className
	)}
>
	{@render children()}
</div>

<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { cn } from '$lib/utils';

	type Props = {
		eyebrow?: string;
		title: string;
		description?: string;
		align?: 'left' | 'center';
		class?: string;
		titleClass?: string;
	};

	let {
		eyebrow,
		title,
		description,
		align = 'center',
		class: className,
		titleClass
	}: Props = $props();
</script>

<div
	class={cn(
		'flex flex-col gap-4',
		align === 'center' ? 'items-center text-center' : 'items-start text-left',
		className
	)}
>
	{#if eyebrow}
		<span class="eyebrow" use:reveal>
			<span class="h-px w-6 bg-terracotta-500/60"></span>
			{eyebrow}
		</span>
	{/if}
	<h2
		use:reveal={{ delay: 60 }}
		class={cn(
			'max-w-3xl text-balance text-3xl font-semibold leading-[1.08] text-charcoal sm:text-4xl md:text-5xl',
			titleClass
		)}
	>
		{title}
	</h2>
	{#if description}
		<p
			use:reveal={{ delay: 120 }}
			class={cn('max-w-2xl text-pretty text-base leading-relaxed text-charcoal/65 md:text-lg')}
		>
			{description}
		</p>
	{/if}
</div>

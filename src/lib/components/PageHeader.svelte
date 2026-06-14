<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let {
		eyebrow,
		title,
		description,
		image
	}: { eyebrow: string; title: string; description?: string; image: string } = $props();
</script>

<section class="relative isolate overflow-hidden bg-charcoal pt-16 md:pt-20">
	<div class="absolute inset-0 -z-10">
		<img src={image} alt="" aria-hidden="true" class="h-full w-full object-cover opacity-40" />
		<div class="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/75 to-charcoal"></div>
	</div>
	<div class="container-px py-20 text-center md:py-28">
		<span use:reveal class="eyebrow text-gold-400">
			<span class="h-px w-6 bg-gold-400/60"></span>
			{eyebrow}
		</span>
		<h1
			use:reveal={{ delay: 60 }}
			class="mx-auto mt-4 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] text-cream md:text-6xl"
		>
			{title}
		</h1>
		{#if description}
			<p
				use:reveal={{ delay: 120 }}
				class="mx-auto mt-5 max-w-2xl text-pretty text-lg text-cream/70"
			>
				{description}
			</p>
		{/if}
	</div>
</section>

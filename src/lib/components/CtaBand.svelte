<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { Phone, MapPin } from '@lucide/svelte';
	import { business } from '$lib/data/business';
	import Button from './ui/Button.svelte';
</script>

<section class="container-px py-20 md:py-28">
	<div
		use:reveal={{ axis: 'scale' }}
		class="relative overflow-hidden rounded-3xl bg-charcoal px-6 py-14 text-center shadow-lift md:px-16 md:py-20"
	>
		<div
			class="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-terracotta-500/25 blur-3xl"
		></div>
		<div
			class="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl"
		></div>
		<div class="relative mx-auto max-w-2xl">
			<span class="eyebrow text-gold-400"
				><span class="h-px w-6 bg-gold-400/60"></span> Come Hungry</span
			>
			<h2 class="mt-4 text-balance font-display text-3xl font-semibold text-cream md:text-4xl">
				Pull up a chair at the family table
			</h2>
			<p class="mx-auto mt-4 max-w-xl text-pretty text-cream/70">
				Dine in or swing by the drive-through. Fresh, homemade Mexican food is waiting for you in
				Menard.
			</p>
			<div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
				<Button href={business.phoneHref} variant="gold" size="lg">
					<Phone size={17} /> Call to Order
				</Button>
				<Button
					href={business.mapDirections}
					variant="outline"
					size="lg"
					class="border-cream/30 text-cream hover:border-cream hover:text-cream"
				>
					<MapPin size={17} /> Get Directions
				</Button>
			</div>
		</div>
	</div>
</section>

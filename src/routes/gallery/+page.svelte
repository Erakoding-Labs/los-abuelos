<script lang="ts">
	import { X, ChevronLeft, ChevronRight } from '@lucide/svelte';
	import { gallery } from '$lib/data/content';
	import { img } from '$lib/data/images';
	import { reveal } from '$lib/actions/reveal';

	import Seo from '$lib/components/Seo.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	let lightbox = $state<number | null>(null);

	function open(i: number) {
		lightbox = i;
	}
	function close() {
		lightbox = null;
	}
	function step(dir: number) {
		if (lightbox === null) return;
		lightbox = (lightbox + dir + gallery.length) % gallery.length;
	}
	function onKey(e: KeyboardEvent) {
		if (lightbox === null) return;
		if (e.key === 'Escape') close();
		if (e.key === 'ArrowRight') step(1);
		if (e.key === 'ArrowLeft') step(-1);
	}
</script>

<svelte:window on:keydown={onKey} />

<Seo
	title="Gallery"
	description="Step inside Los Abuelos — our dining room, our family atmosphere, and the homemade Mexican dishes we're proud to serve in Menard, TX."
	path="/gallery"
/>

<PageHeader
	eyebrow="Gallery"
	title="A look inside Los Abuelos"
	description="The food, the room, and the family moments that make us who we are."
	image={img.gAtmosphere}
/>

<section class="container-px py-20 md:py-24">
	<div class="columns-1 gap-5 sm:columns-2 lg:columns-3">
		{#each gallery as photo, i (photo.src)}
			<button
				use:reveal={{ delay: (i % 3) * 70 }}
				onclick={() => open(i)}
				class="group mb-5 block w-full overflow-hidden rounded-2xl shadow-soft transition-shadow duration-300 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
				aria-label={`View larger: ${photo.alt}`}
			>
				<img
					src={photo.src}
					alt={photo.alt}
					loading="lazy"
					class="w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
				/>
			</button>
		{/each}
	</div>
</section>

<CtaBand />

<!-- Lightbox -->
{#if lightbox !== null}
	<div
		class="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-sm"
		role="dialog"
		aria-modal="true"
		aria-label="Image viewer"
	>
		<button class="absolute inset-0 -z-10 h-full w-full cursor-zoom-out" aria-label="Close" onclick={close}
		></button>

		<button
			onclick={close}
			class="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
			aria-label="Close"
		>
			<X size={22} />
		</button>
		<button
			onclick={() => step(-1)}
			class="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 md:left-8"
			aria-label="Previous image"
		>
			<ChevronLeft size={24} />
		</button>

		<figure class="max-h-[85vh] max-w-5xl">
			<img
				src={gallery[lightbox].src}
				alt={gallery[lightbox].alt}
				class="max-h-[80vh] w-auto rounded-xl object-contain shadow-lift"
			/>
			<figcaption class="mt-3 text-center text-sm text-cream/70">
				{gallery[lightbox].alt}
			</figcaption>
		</figure>

		<button
			onclick={() => step(1)}
			class="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 md:right-8"
			aria-label="Next image"
		>
			<ChevronRight size={24} />
		</button>
	</div>
{/if}

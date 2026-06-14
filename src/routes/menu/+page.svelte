<script lang="ts">
	import { menu } from '$lib/data/menu';
	import { img } from '$lib/data/images';
	import { reveal } from '$lib/actions/reveal';
	import { cn } from '$lib/utils';

	import Seo from '$lib/components/Seo.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import DishCard from '$lib/components/DishCard.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	let active = $state(menu[0].id);
	let sections: Record<string, HTMLElement> = {};

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) active = entry.target.id;
				}
			},
			{ rootMargin: '-45% 0px -50% 0px', threshold: 0 }
		);
		for (const el of Object.values(sections)) if (el) observer.observe(el);
		return () => observer.disconnect();
	});

	function scrollTo(id: string) {
		const el = sections[id];
		if (!el) return;
		const top = el.getBoundingClientRect().top + window.scrollY - 140;
		window.scrollTo({ top, behavior: 'smooth' });
	}
</script>

<Seo
	title="Menu"
	description="Browse the Los Abuelos menu — breakfast tacos, enchiladas, chimichangas, burritos, combo plates, drinks, and desserts. Homemade Mexican food in Menard, TX."
	path="/menu"
/>

<PageHeader
	eyebrow="Our Menu"
	title="Made fresh, served generous"
	description="From sunrise breakfast tacos to hearty dinner plates — every dish is made from scratch with family recipes."
	image={img.heroPrimary}
/>

<!-- Sticky category rail -->
<nav
	class="sticky top-16 z-30 border-b border-charcoal/8 bg-cream/90 backdrop-blur-lg md:top-20"
	aria-label="Menu categories"
>
	<div class="container-px">
		<ul class="no-scrollbar flex gap-1 overflow-x-auto py-3">
			{#each menu as cat (cat.id)}
				<li class="shrink-0">
					<button
						onclick={() => scrollTo(cat.id)}
						aria-current={active === cat.id ? 'true' : undefined}
						class={cn(
							'whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
							active === cat.id
								? 'bg-terracotta-500 text-cream shadow-soft'
								: 'text-charcoal/60 hover:bg-charcoal/5 hover:text-charcoal'
						)}
					>
						{cat.title}
					</button>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<!-- Sections -->
<div class="container-px py-16 md:py-20">
	<div class="space-y-20 md:space-y-28">
		{#each menu as cat (cat.id)}
			<section id={cat.id} bind:this={sections[cat.id]} class="scroll-mt-36">
				<div class="flex flex-col gap-2 border-l-4 border-terracotta-500 pl-5">
					<h2 class="font-display text-3xl font-semibold text-charcoal md:text-4xl">
						{cat.title}
					</h2>
					<p class="max-w-xl text-charcoal/55">{cat.blurb}</p>
				</div>
				<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each cat.items as item, i (item.name)}
						<DishCard {item} delay={i * 60} />
					{/each}
				</div>
			</section>
		{/each}
	</div>

	<p use:reveal class="mt-16 text-center text-sm text-charcoal/45">
		Prices and availability may vary. Please ask your server about daily specials and allergens.
	</p>
</div>

<CtaBand />

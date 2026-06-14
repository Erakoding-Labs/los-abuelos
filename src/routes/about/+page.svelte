<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { business } from '$lib/data/business';
	import { values, timeline, team } from '$lib/data/content';
	import { img } from '$lib/data/images';

	import Seo from '$lib/components/Seo.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
</script>

<Seo
	title="Our Story"
	description="The story of Los Abuelos — a family-owned Mexican restaurant in Menard, Texas built on traditional recipes, fresh ingredients, and a warm welcome."
	path="/about"
/>

<PageHeader
	eyebrow="Our Story"
	title="Built on family, served with pride"
	description="Three generations of recipes, one welcoming table in Menard, Texas."
	image={img.storyKitchen}
/>

<!-- Intro -->
<section class="container-px py-20 md:py-28">
	<div class="grid items-center gap-12 lg:grid-cols-2">
		<div use:reveal={{ axis: 'x' }} class="relative order-2 lg:order-1">
			<div class="overflow-hidden rounded-3xl shadow-lift">
				<img
					src={img.familyAbuelos}
					alt="The family behind Los Abuelos Mexican Restaurant"
					loading="lazy"
					class="aspect-[4/3] w-full object-cover"
				/>
			</div>
		</div>
		<div class="order-1 lg:order-2">
			<SectionHeading
				align="left"
				eyebrow="Welcome to the family"
				title="More than a restaurant — it's home"
			/>
			<div use:reveal={{ delay: 120 }} class="mt-6 space-y-4 text-charcoal/70 leading-relaxed">
				<p>
					Los Abuelos was born from a simple idea: that the recipes our grandparents cooked deserve
					a place at the heart of the community. Every dish on our menu traces back to a family
					kitchen — sauces simmered slow, tortillas pressed by hand, and chiles roasted fresh.
				</p>
				<p>
					When we opened our doors on Frisco Ave, Menard welcomed us like family. Today we return
					that warmth to every guest who walks in — whether you're grabbing breakfast tacos on the
					way to work or settling in for a hearty dinner with the whole crew.
				</p>
				<p class="font-display text-lg italic text-terracotta-700">
					“Good food, made with love, shared with family.”
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Timeline -->
<section class="bg-cream-dark/60 py-20 md:py-28">
	<div class="container-px">
		<SectionHeading
			eyebrow="Our Journey"
			title="From abuela's kitchen to yours"
			description="A few chapters in the story of Los Abuelos."
		/>
		<ol class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each timeline as step, i (step.title)}
				<li use:reveal={{ delay: i * 90 }} class="relative">
					<div class="flex items-center gap-3">
						<span
							class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-terracotta-500 font-display font-semibold text-cream"
							>{i + 1}</span
						>
						<span class="h-px flex-1 bg-terracotta-300/50"></span>
					</div>
					<p class="mt-5 text-xs font-semibold uppercase tracking-wider text-terracotta-600">
						{step.year}
					</p>
					<h3 class="mt-1 font-display text-xl font-semibold text-charcoal">{step.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-charcoal/60">{step.text}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- Values -->
<section class="container-px py-20 md:py-28">
	<SectionHeading
		eyebrow="Family Values"
		title="What we stand for"
		description="The principles behind every plate we serve."
	/>
	<div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
		{#each values as v, i (v.title)}
			<div
				use:reveal={{ delay: i * 80 }}
				class="rounded-2xl border border-charcoal/8 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
			>
				<span class="grid h-12 w-12 place-items-center rounded-2xl bg-gold-500/15 text-gold-600">
					<v.icon size={22} />
				</span>
				<h3 class="mt-5 font-display text-lg font-semibold text-charcoal">{v.title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-charcoal/60">{v.text}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Team -->
<section class="bg-charcoal py-20 text-cream md:py-28">
	<div class="container-px">
		<SectionHeading
			eyebrow="Meet the Family"
			title="The people behind the plates"
			titleClass="text-cream"
			class="[&_p]:text-cream/65 [&_.eyebrow]:text-gold-400"
		/>
		<div class="mt-14 grid gap-6 md:grid-cols-3">
			{#each team as member, i (member.name)}
				<figure
					use:reveal={{ delay: i * 90 }}
					class="group overflow-hidden rounded-2xl border border-cream/10 bg-charcoal-soft"
				>
					<div class="aspect-[4/3] overflow-hidden">
						<img
							src={member.image}
							alt={member.name}
							loading="lazy"
							class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
					</div>
					<figcaption class="p-6">
						<h3 class="font-display text-xl font-semibold text-cream">{member.name}</h3>
						<p class="text-sm font-medium text-gold-400">{member.role}</p>
						<p class="mt-2 text-sm leading-relaxed text-cream/60">{member.text}</p>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

<CtaBand />

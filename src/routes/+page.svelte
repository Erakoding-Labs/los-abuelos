<script lang="ts">
	import { ArrowRight, MapPin, Star, Clock, UtensilsCrossed } from '@lucide/svelte';
	import { business } from '$lib/data/business';
	import { highlights } from '$lib/data/content';
	import { featuredDishes } from '$lib/data/menu';
	import { reviews } from '$lib/data/reviews';
	import { img } from '$lib/data/images';
	import { reveal } from '$lib/actions/reveal';

	import Seo from '$lib/components/Seo.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import StarRating from '$lib/components/ui/StarRating.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import DishCard from '$lib/components/DishCard.svelte';
	import LocationHours from '$lib/components/LocationHours.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	// Duplicate reviews for the seamless marquee ticker.
	const ticker = [...reviews, ...reviews];
</script>

<Seo
	title="Authentic Mexican Restaurant in Menard, TX"
	description={business.description}
	path="/"
/>

<!-- ===================== HERO ===================== -->
<section class="relative isolate flex min-h-[100svh] items-center overflow-hidden">
	<div class="absolute inset-0 -z-10">
		<img
			src={img.heroPrimary}
			alt="A vibrant spread of authentic Mexican dishes"
			fetchpriority="high"
			class="h-full w-full object-cover"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/30"
		></div>
		<div class="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/40"></div>
	</div>

	<div class="container-px w-full pb-16 pt-28 md:pt-32">
		<div class="max-w-2xl">
			<div
				use:reveal
				class="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-4 py-1.5 text-sm font-medium text-cream backdrop-blur-sm"
			>
				<StarRating rating={business.rating} size={15} />
				<span class="text-cream/90"
					>{business.rating} · {business.reviewCount} reviews</span
				>
			</div>

			<h1
				use:reveal={{ delay: 80 }}
				class="mt-6 text-balance font-display text-5xl font-semibold leading-[1.02] text-cream sm:text-6xl md:text-7xl"
			>
				Authentic Mexican Flavors.
				<span class="text-gold-400">Family Tradition.</span>
			</h1>

			<p
				use:reveal={{ delay: 160 }}
				class="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-cream/80 md:text-xl"
			>
				Homemade recipes, fresh ingredients, and warm hospitality — served daily in the heart of
				Menard, Texas. Come taste the difference family makes.
			</p>

			<div use:reveal={{ delay: 240 }} class="mt-9 flex flex-col gap-3 sm:flex-row">
				<Button href="/menu" variant="gold" size="lg">
					<UtensilsCrossed size={18} /> View Menu
				</Button>
				<Button
					href={business.mapDirections}
					variant="outline"
					size="lg"
					class="border-cream/40 text-cream hover:border-cream hover:bg-cream/10 hover:text-cream"
				>
					<MapPin size={18} /> Visit Us Today
				</Button>
			</div>

			<div
				use:reveal={{ delay: 320 }}
				class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream/70"
			>
				<span class="flex items-center gap-2"><Clock size={15} class="text-gold-400" /> Open daily for breakfast, lunch & dinner</span>
				<span class="flex items-center gap-2"><MapPin size={15} class="text-gold-400" /> {business.addressLine}</span>
			</div>
		</div>
	</div>

	<!-- scroll hint -->
	<div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/50">
		<div class="h-10 w-6 rounded-full border border-cream/40 p-1">
			<div class="mx-auto h-2 w-1 animate-float-slow rounded-full bg-cream/70"></div>
		</div>
	</div>
</section>

<!-- ===================== HIGHLIGHTS ===================== -->
<section class="container-px py-20 md:py-28">
	<SectionHeading
		eyebrow="Why Los Abuelos"
		title="A taste of home, made the right way"
		description="We do the small things with care — because that's what turns a meal into a tradition."
	/>
	<div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
		{#each highlights as h, i (h.title)}
			<div
				use:reveal={{ delay: i * 80 }}
				class="group rounded-2xl border border-charcoal/8 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
			>
				<span
					class="grid h-13 w-13 place-items-center rounded-2xl bg-terracotta-50 p-3 text-terracotta-600 transition-colors duration-300 group-hover:bg-terracotta-500 group-hover:text-cream"
				>
					<h.icon size={24} />
				</span>
				<h3 class="mt-5 font-display text-xl font-semibold text-charcoal">{h.title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-charcoal/60">{h.text}</p>
			</div>
		{/each}
	</div>
</section>

<!-- ===================== STORY STRIP ===================== -->
<section class="bg-cream-dark/60 py-20 md:py-28">
	<div class="container-px grid items-center gap-12 lg:grid-cols-2">
		<div use:reveal={{ axis: 'x' }} class="relative">
			<div class="overflow-hidden rounded-3xl shadow-lift">
				<img
					src={img.storyKitchen}
					alt="Hands preparing fresh ingredients in the Los Abuelos kitchen"
					loading="lazy"
					class="aspect-[4/3] w-full object-cover"
				/>
			</div>
			<div
				class="absolute -bottom-6 -right-4 hidden rounded-2xl bg-terracotta-500 px-6 py-5 text-cream shadow-lift sm:block"
			>
				<p class="font-display text-3xl font-semibold">3 gen.</p>
				<p class="text-xs uppercase tracking-wider text-cream/80">of family recipes</p>
			</div>
		</div>

		<div>
			<SectionHeading
				align="left"
				eyebrow="Our Story"
				title="Family-owned, community-loved"
				description="Los Abuelos began with abuela's recipes and a simple belief: good food brings people together. Today we still press our tortillas by hand and roast our chiles fresh — serving the Menard community the flavors we grew up on."
				class="max-w-xl"
			/>
			<div use:reveal={{ delay: 160 }} class="mt-7">
				<Button href="/about" variant="primary" size="lg">
					Read Our Story <ArrowRight size={17} class="transition-transform group-hover:translate-x-1" />
				</Button>
			</div>
		</div>
	</div>
</section>

<!-- ===================== FEATURED DISHES ===================== -->
<section class="container-px py-20 md:py-28">
	<div class="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
		<SectionHeading
			align="left"
			eyebrow="Crowd Favorites"
			title="Signature Mexican plates"
			class="sm:max-w-xl"
		/>
		<div use:reveal class="shrink-0">
			<Button href="/menu" variant="outline" size="md">
				Full Menu <ArrowRight size={16} />
			</Button>
		</div>
	</div>
	<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each featuredDishes as dish, i (dish.name)}
			<DishCard item={dish} delay={i * 70} />
		{/each}
	</div>
</section>

<!-- ===================== REVIEWS TICKER ===================== -->
<section class="overflow-hidden bg-charcoal py-20 md:py-28">
	<div class="container-px">
		<SectionHeading
			eyebrow="Loved by locals"
			title="What our guests are saying"
			description={`Rated ${business.rating} out of 5 across ${business.reviewCount} reviews.`}
			titleClass="text-cream"
			class="[&_p]:text-cream/65 [&_.eyebrow]:text-gold-400"
		/>
	</div>
	<div class="marquee-mask mt-12 flex">
		<div class="flex shrink-0 animate-marquee gap-5 pr-5">
			{#each ticker as review, i (i)}
				<figure
					class="w-[320px] shrink-0 rounded-2xl border border-cream/10 bg-charcoal-soft p-6"
				>
					<StarRating rating={review.rating} size={14} />
					<blockquote class="mt-3 text-sm leading-relaxed text-cream/80">“{review.quote}”</blockquote>
					<figcaption class="mt-4 flex items-center gap-3">
						<span
							class="grid h-9 w-9 place-items-center rounded-full bg-terracotta-500/90 text-xs font-semibold text-cream"
							>{review.initials}</span
						>
						<div>
							<p class="text-sm font-semibold text-cream">{review.name}</p>
							<p class="text-xs text-cream/50">{review.location}</p>
						</div>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
	<div class="container-px mt-12 text-center">
		<Button href="/reviews" variant="cream" size="md">
			Read All Reviews <ArrowRight size={16} />
		</Button>
	</div>
</section>

<!-- ===================== LOCATION & HOURS ===================== -->
<section class="container-px py-20 md:py-28">
	<SectionHeading
		eyebrow="Find Us"
		title="Location & hours"
		description="Right on Frisco Ave in Menard. Dine in or hit the drive-through."
		class="mb-12"
	/>
	<LocationHours />
</section>

<CtaBand />

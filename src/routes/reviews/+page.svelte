<script lang="ts">
	import { ExternalLink } from '@lucide/svelte';
	import { reviews, reviewStats } from '$lib/data/reviews';
	import { business } from '$lib/data/business';
	import { img } from '$lib/data/images';
	import { reveal } from '$lib/actions/reveal';

	import Seo from '$lib/components/Seo.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ReviewCard from '$lib/components/ReviewCard.svelte';
	import StarRating from '$lib/components/ui/StarRating.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
</script>

<Seo
	title="Reviews"
	description={`Read what guests say about Los Abuelos Mexican Restaurant — rated ${business.rating}/5 across ${business.reviewCount} reviews in Menard, TX.`}
	path="/reviews"
/>

<PageHeader
	eyebrow="Reviews"
	title="Loved by the Menard community"
	description="Don't just take our word for it — here's what our guests have to say."
	image={img.gDining}
/>

<!-- Stats -->
<section class="container-px py-20 md:py-24">
	<div class="grid gap-6 lg:grid-cols-3">
		<!-- Overall -->
		<div
			use:reveal
			class="flex flex-col items-center justify-center rounded-2xl border border-charcoal/8 bg-white p-8 text-center shadow-soft"
		>
			<p class="font-display text-6xl font-semibold text-charcoal">{reviewStats.average}</p>
			<StarRating rating={reviewStats.average} size={22} class="mt-2" />
			<p class="mt-2 text-sm text-charcoal/55">Based on {reviewStats.total} reviews</p>
		</div>

		<!-- Distribution -->
		<div
			use:reveal={{ delay: 80 }}
			class="rounded-2xl border border-charcoal/8 bg-white p-8 shadow-soft"
		>
			<h3 class="font-display text-lg font-semibold text-charcoal">Rating breakdown</h3>
			<ul class="mt-4 space-y-2.5">
				{#each reviewStats.distribution as d (d.stars)}
					<li class="flex items-center gap-3 text-sm">
						<span class="w-10 shrink-0 text-charcoal/60">{d.stars} ★</span>
						<span class="h-2 flex-1 overflow-hidden rounded-full bg-charcoal/8">
							<span
								class="block h-full rounded-full bg-gold-500"
								style={`width:${d.percent}%`}
							></span>
						</span>
						<span class="w-9 shrink-0 text-right tabular-nums text-charcoal/50">{d.percent}%</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Highlights -->
		<div
			use:reveal={{ delay: 160 }}
			class="rounded-2xl border border-charcoal/8 bg-white p-8 shadow-soft"
		>
			<h3 class="font-display text-lg font-semibold text-charcoal">What guests love</h3>
			<ul class="mt-4 space-y-4">
				{#each reviewStats.highlights as h (h.label)}
					<li class="flex items-center justify-between">
						<span class="text-sm text-charcoal/65">{h.label}</span>
						<span class="font-display text-2xl font-semibold text-terracotta-600">{h.value}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<!-- Review grid -->
<section class="container-px pb-20 md:pb-28">
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each reviews as review, i (review.name)}
			<ReviewCard {review} delay={(i % 3) * 80} />
		{/each}
	</div>

	<div use:reveal class="mt-14 flex flex-col items-center gap-4 text-center">
		<p class="text-charcoal/60">Have you dined with us? We'd love to hear about it.</p>
		<Button href={business.reviewsUrl} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
			Review us on Google <ExternalLink size={16} />
		</Button>
	</div>
</section>

<CtaBand />

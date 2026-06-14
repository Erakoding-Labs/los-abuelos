<script lang="ts">
	import type { Review } from '$lib/data/reviews';
	import { reveal } from '$lib/actions/reveal';
	import { Quote } from '@lucide/svelte';
	import StarRating from './ui/StarRating.svelte';

	let { review, delay = 0 }: { review: Review; delay?: number } = $props();
</script>

<figure
	use:reveal={{ delay }}
	class="flex h-full flex-col rounded-2xl border border-charcoal/8 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift"
>
	<Quote size={28} class="text-terracotta-200" />
	<blockquote class="mt-3 flex-1 text-[0.95rem] leading-relaxed text-charcoal/80">
		“{review.quote}”
	</blockquote>
	<figcaption class="mt-5 flex items-center gap-3 border-t border-charcoal/8 pt-4">
		<span
			class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-terracotta-100 font-display text-sm font-semibold text-terracotta-700"
			aria-hidden="true">{review.initials}</span
		>
		<div class="min-w-0 flex-1">
			<p class="font-semibold text-charcoal">{review.name}</p>
			<p class="text-xs text-charcoal/50">{review.location} · {review.date}</p>
		</div>
		<StarRating rating={review.rating} size={14} />
	</figcaption>
</figure>

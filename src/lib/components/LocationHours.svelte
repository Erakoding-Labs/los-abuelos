<script lang="ts">
	import { MapPin, Phone, Clock, Car, UtensilsCrossed, Check, X } from '@lucide/svelte';
	import { business, hours } from '$lib/data/business';
	import { reveal } from '$lib/actions/reveal';
	import Button from './ui/Button.svelte';

	// Today highlight (0 = Sunday). Order array starts Monday.
	let todayIndex = $state(-1);
	$effect(() => {
		const js = new Date().getDay(); // 0 Sun .. 6 Sat
		todayIndex = js === 0 ? 6 : js - 1;
	});

	const services = [
		{ icon: UtensilsCrossed, label: 'Dine-In', on: business.services.dineIn },
		{ icon: Car, label: 'Drive-Through', on: business.services.driveThrough },
		{ icon: Check, label: 'Takeout', on: business.services.takeout },
		{ icon: X, label: 'Delivery', on: business.services.delivery }
	];
</script>

<div class="grid gap-6 lg:grid-cols-2">
	<!-- Map -->
	<div
		use:reveal
		class="overflow-hidden rounded-2xl border border-charcoal/8 shadow-soft min-h-[320px]"
	>
		<iframe
			title="Map to Los Abuelos Mexican Restaurant"
			src={business.mapEmbed}
			class="h-full min-h-[320px] w-full"
			style="border:0"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>

	<!-- Details -->
	<div use:reveal={{ delay: 80 }} class="flex flex-col gap-5">
		<div class="rounded-2xl border border-charcoal/8 bg-white p-6 shadow-soft">
			<div class="space-y-4">
				<div class="flex gap-3">
					<span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-terracotta-50">
						<MapPin size={18} class="text-terracotta-600" />
					</span>
					<div>
						<p class="text-xs font-semibold uppercase tracking-wider text-charcoal/45">Address</p>
						<p class="text-charcoal">{business.addressLine}</p>
					</div>
				</div>
				<div class="flex gap-3">
					<span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-terracotta-50">
						<Phone size={18} class="text-terracotta-600" />
					</span>
					<div>
						<p class="text-xs font-semibold uppercase tracking-wider text-charcoal/45">Phone</p>
						<a href={business.phoneHref} class="text-charcoal hover:text-terracotta-600"
							>{business.phone}</a
						>
					</div>
				</div>
			</div>
			<div class="mt-5 flex flex-wrap gap-2">
				{#each services as s (s.label)}
					<span
						class={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${s.on ? 'bg-olive-500/12 text-olive-600' : 'bg-charcoal/5 text-charcoal/40 line-through'}`}
					>
						<s.icon size={13} />
						{s.label}
					</span>
				{/each}
			</div>
			<Button href={business.mapDirections} variant="primary" size="md" class="mt-5 w-full">
				<MapPin size={16} /> Get Directions
			</Button>
		</div>

		<div class="rounded-2xl border border-charcoal/8 bg-white p-6 shadow-soft">
			<h3 class="flex items-center gap-2 font-display text-lg font-semibold text-charcoal">
				<Clock size={18} class="text-terracotta-600" /> Hours
			</h3>
			<ul class="mt-4 space-y-1">
				{#each hours as h, i (h.day)}
					<li
						class={`flex items-center justify-between rounded-lg px-3 py-1.5 text-sm ${i === todayIndex ? 'bg-terracotta-50 font-semibold text-terracotta-700' : 'text-charcoal/70'}`}
					>
						<span>{h.day}{i === todayIndex ? ' · Today' : ''}</span>
						<span class="tabular-nums">{h.open} – {h.close}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

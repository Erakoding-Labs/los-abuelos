<script lang="ts">
	import { MapPin, Phone, Clock, Mail } from '@lucide/svelte';
	import { business, hours } from '$lib/data/business';
	import Social from './Social.svelte';

	const links = [
		{ href: '/menu', label: 'Menu' },
		{ href: '/about', label: 'Our Story' },
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/reviews', label: 'Reviews' },
		{ href: '/contact', label: 'Contact' }
	];

	const year = 2026;
</script>

<footer class="relative overflow-hidden bg-charcoal text-cream/80">
	<div
		class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-terracotta-500/20 blur-3xl"
	></div>
	<div class="container-px relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
		<!-- Brand -->
		<div class="lg:col-span-1">
			<div class="flex items-center gap-3">
				<span
					class="grid h-11 w-11 place-items-center rounded-full bg-terracotta-500 font-display text-lg font-semibold text-cream"
					>LA</span
				>
				<span class="font-display text-xl font-semibold text-cream">Los Abuelos</span>
			</div>
			<p class="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
				{business.description}
			</p>
			<div class="mt-5 flex gap-3">
				<Social class="h-10 w-10 bg-cream/10 hover:bg-terracotta-500 hover:text-cream" />
			</div>
		</div>

		<!-- Explore -->
		<div>
			<h3 class="font-display text-base font-semibold text-cream">Explore</h3>
			<ul class="mt-4 space-y-2.5 text-sm">
				{#each links as link (link.href)}
					<li>
						<a href={link.href} class="link-underline text-cream/65 hover:text-cream">{link.label}</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Visit -->
		<div>
			<h3 class="font-display text-base font-semibold text-cream">Visit Us</h3>
			<ul class="mt-4 space-y-3 text-sm">
				<li class="flex gap-3">
					<MapPin size={18} class="mt-0.5 shrink-0 text-terracotta-300" />
					<span class="text-cream/65">{business.addressLine}</span>
				</li>
				<li class="flex gap-3">
					<Phone size={18} class="mt-0.5 shrink-0 text-terracotta-300" />
					<a href={business.phoneHref} class="text-cream/65 hover:text-cream">{business.phone}</a>
				</li>
				<li class="flex gap-3">
					<Mail size={18} class="mt-0.5 shrink-0 text-terracotta-300" />
					<a href={`mailto:${business.email}`} class="text-cream/65 hover:text-cream"
						>{business.email}</a
					>
				</li>
			</ul>
		</div>

		<!-- Hours -->
		<div>
			<h3 class="flex items-center gap-2 font-display text-base font-semibold text-cream">
				<Clock size={16} class="text-terracotta-300" /> Hours
			</h3>
			<ul class="mt-4 space-y-1.5 text-sm">
				{#each hours as h (h.day)}
					<li class="flex justify-between gap-4 text-cream/65">
						<span>{h.day}</span>
						<span class="tabular-nums">{h.open} – {h.close}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="border-t border-cream/10">
		<div
			class="container-px flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream/50 sm:flex-row"
		>
			<p>© {year} {business.name}. All rights reserved.</p>
			<p>Made with love in Menard, Texas 🌶️</p>
		</div>
	</div>
</footer>

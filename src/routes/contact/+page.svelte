<script lang="ts">
	import { Phone, Mail, MapPin, Send, Check } from '@lucide/svelte';
	import { business } from '$lib/data/business';
	import { img } from '$lib/data/images';
	import { reveal } from '$lib/actions/reveal';

	import Seo from '$lib/components/Seo.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import LocationHours from '$lib/components/LocationHours.svelte';
	import Social from '$lib/components/Social.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	let form = $state({ name: '', email: '', phone: '', message: '' });
	let submitted = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		// Static site: hand off to a mail client. Swap for a real endpoint
		// (Formspree, Resend, etc.) when a backend is available.
		const subject = encodeURIComponent(`Website inquiry from ${form.name || 'a guest'}`);
		const body = encodeURIComponent(
			`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
		);
		window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
		submitted = true;
	}

	const field =
		'w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/35 transition-colors focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/20';
</script>

<Seo
	title="Contact"
	description={`Get in touch with Los Abuelos Mexican Restaurant in Menard, TX. Call ${business.phone}, find our hours, or send us a message.`}
	path="/contact"
/>

<PageHeader
	eyebrow="Contact"
	title="Come say hola"
	description="Questions, big-group plans, or just want to say hi? We're always happy to hear from you."
	image={img.storyTable}
/>

<!-- Quick contact cards -->
<section class="container-px py-20 md:py-24">
	<div class="grid gap-5 sm:grid-cols-3">
		{#each [{ icon: Phone, label: 'Call Us', value: business.phone, href: business.phoneHref }, { icon: Mail, label: 'Email Us', value: business.email, href: `mailto:${business.email}` }, { icon: MapPin, label: 'Visit Us', value: business.addressLine, href: business.mapDirections }] as c, i (c.label)}
			<a
				href={c.href}
				use:reveal={{ delay: i * 80 }}
				class="group flex flex-col items-center gap-3 rounded-2xl border border-charcoal/8 bg-white p-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
			>
				<span
					class="grid h-12 w-12 place-items-center rounded-full bg-terracotta-50 text-terracotta-600 transition-colors group-hover:bg-terracotta-500 group-hover:text-cream"
				>
					<c.icon size={22} />
				</span>
				<span class="text-xs font-semibold uppercase tracking-wider text-charcoal/45">{c.label}</span
				>
				<span class="font-medium text-charcoal">{c.value}</span>
			</a>
		{/each}
	</div>
</section>

<!-- Form + info -->
<section class="container-px pb-20 md:pb-28">
	<div class="grid gap-10 lg:grid-cols-2">
		<!-- Form -->
		<div use:reveal class="rounded-3xl border border-charcoal/8 bg-white p-7 shadow-soft md:p-9">
			<h2 class="font-display text-2xl font-semibold text-charcoal">Send us a message</h2>
			<p class="mt-2 text-sm text-charcoal/55">
				Fill out the form and we'll get back to you as soon as we can.
			</p>

			{#if submitted}
				<div
					class="mt-6 flex items-center gap-3 rounded-xl bg-olive-500/10 p-5 text-olive-600"
					role="status"
				>
					<Check size={22} class="shrink-0" />
					<p class="text-sm">
						Thanks! Your message is ready in your email app — just hit send and we'll be in touch.
					</p>
				</div>
			{:else}
				<form class="mt-6 space-y-4" onsubmit={handleSubmit}>
					<div class="grid gap-4 sm:grid-cols-2">
						<div>
							<label for="name" class="mb-1.5 block text-sm font-medium text-charcoal/70">Name</label
							>
							<input id="name" type="text" required bind:value={form.name} class={field} placeholder="Your name" />
						</div>
						<div>
							<label for="phone" class="mb-1.5 block text-sm font-medium text-charcoal/70">Phone</label
							>
							<input id="phone" type="tel" bind:value={form.phone} class={field} placeholder="(optional)" />
						</div>
					</div>
					<div>
						<label for="email" class="mb-1.5 block text-sm font-medium text-charcoal/70">Email</label>
						<input id="email" type="email" required bind:value={form.email} class={field} placeholder="you@example.com" />
					</div>
					<div>
						<label for="message" class="mb-1.5 block text-sm font-medium text-charcoal/70"
							>Message</label
						>
						<textarea
							id="message"
							required
							rows="5"
							bind:value={form.message}
							class={`${field} resize-none`}
							placeholder="How can we help?"
						></textarea>
					</div>
					<Button type="submit" variant="primary" size="lg" class="w-full">
						Send Message <Send size={16} />
					</Button>
				</form>
			{/if}

			<div class="mt-7 border-t border-charcoal/8 pt-6">
				<p class="text-xs font-semibold uppercase tracking-wider text-charcoal/45">Follow us</p>
				<div class="mt-3 flex gap-3">
					<Social
						class="h-11 w-11 bg-charcoal/5 text-charcoal/70 hover:bg-terracotta-500 hover:text-cream"
					/>
				</div>
			</div>
		</div>

		<!-- Map + hours -->
		<div class="flex flex-col">
			<LocationHours />
		</div>
	</div>
</section>

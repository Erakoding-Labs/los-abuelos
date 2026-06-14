<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { restaurantSchema } from '$lib/seo';

	let { children } = $props();

	// Site-wide LocalBusiness / Restaurant structured data. Per-page <Seo>
	// owns titles, descriptions, and Open Graph tags.
	const schema = JSON.stringify(restaurantSchema());
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${schema}<\/script>`}
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navbar />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>

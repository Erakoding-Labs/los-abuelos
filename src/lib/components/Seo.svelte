<script lang="ts">
	import { buildSeo, type SeoInput } from '$lib/seo';

	let { title, description, path = '/', image, jsonLd }: SeoInput & { jsonLd?: object } =
		$props();

	const seo = $derived(buildSeo({ title, description, path, image }));
</script>

<svelte:head>
	<title>{seo.fullTitle}</title>
	<meta name="description" content={seo.desc} />
	<link rel="canonical" href={seo.url} />

	<!-- Open Graph -->
	<meta property="og:type" content="restaurant" />
	<meta property="og:site_name" content="Los Abuelos Mexican Restaurant" />
	<meta property="og:title" content={seo.fullTitle} />
	<meta property="og:description" content={seo.desc} />
	<meta property="og:url" content={seo.url} />
	<meta property="og:image" content={seo.image} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.fullTitle} />
	<meta name="twitter:description" content={seo.desc} />
	<meta name="twitter:image" content={seo.image} />

	{#if jsonLd}
		{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`}
	{/if}
</svelte:head>

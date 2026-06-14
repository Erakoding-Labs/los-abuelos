<script lang="ts">
	import { page } from '$app/stores';
	import { Menu, X, Phone } from '@lucide/svelte';
	import { business } from '$lib/data/business';
	import Button from './ui/Button.svelte';
	import { cn } from '$lib/utils';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/menu', label: 'Menu' },
		{ href: '/about', label: 'About' },
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/reviews', label: 'Reviews' },
		{ href: '/contact', label: 'Contact' }
	];

	let scrolled = $state(false);
	let open = $state(false);

	const current = $derived($page.url.pathname);

	function onScroll() {
		scrolled = window.scrollY > 24;
	}

	$effect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<svelte:window on:scroll={onScroll} />

<header
	class={cn(
		'fixed inset-x-0 top-0 z-50 transition-all duration-300',
		scrolled || open
			? 'border-b border-charcoal/8 bg-cream/85 backdrop-blur-lg shadow-soft'
			: 'border-b border-transparent bg-transparent'
	)}
>
	<nav class="container-px flex h-16 items-center justify-between md:h-20" aria-label="Main">
		<a href="/" class="group flex items-center gap-2.5" onclick={() => (open = false)}>
			<span
				class="grid h-10 w-10 place-items-center rounded-full bg-terracotta-500 font-display text-lg font-semibold text-cream shadow-soft transition-transform duration-300 group-hover:rotate-6"
				aria-hidden="true">LA</span
			>
			<span class="flex flex-col leading-none">
				<span class="font-display text-lg font-semibold text-charcoal">Los Abuelos</span>
				<span class="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-terracotta-600"
					>Mexican Restaurant</span
				>
			</span>
		</a>

		<!-- Desktop -->
		<ul class="hidden items-center gap-1 lg:flex">
			{#each links as link (link.href)}
				<li>
					<a
						href={link.href}
						aria-current={current === link.href ? 'page' : undefined}
						class={cn(
							'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
							current === link.href
								? 'text-terracotta-600'
								: 'text-charcoal/70 hover:text-charcoal'
						)}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-2">
			<Button href={business.phoneHref} variant="primary" size="sm" class="hidden sm:inline-flex">
				<Phone size={15} />
				Call
			</Button>
			<button
				class="grid h-11 w-11 place-items-center rounded-full text-charcoal transition-colors hover:bg-charcoal/5 lg:hidden"
				onclick={() => (open = !open)}
				aria-label={open ? 'Close menu' : 'Open menu'}
				aria-expanded={open}
			>
				{#if open}<X size={22} />{:else}<Menu size={22} />{/if}
			</button>
		</div>
	</nav>
</header>

<!-- Mobile drawer -->
{#if open}
	<button
		class="fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm lg:hidden"
		aria-label="Close menu"
		onclick={() => (open = false)}
	></button>
	<div
		class="fixed inset-x-0 top-16 z-40 origin-top animate-[fadeDown_0.25s_ease] border-b border-charcoal/8 bg-cream px-5 pb-8 pt-4 shadow-lift lg:hidden md:top-20"
	>
		<ul class="flex flex-col gap-1">
			{#each links as link (link.href)}
				<li>
					<a
						href={link.href}
						onclick={() => (open = false)}
						aria-current={current === link.href ? 'page' : undefined}
						class={cn(
							'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
							current === link.href
								? 'bg-terracotta-50 text-terracotta-700'
								: 'text-charcoal/80 hover:bg-charcoal/5'
						)}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
		<Button href={business.phoneHref} variant="primary" size="lg" class="mt-4 w-full">
			<Phone size={17} />
			{business.phone}
		</Button>
	</div>
{/if}

<style>
	@keyframes fadeDown {
		from {
			opacity: 0;
			transform: translateY(-8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>

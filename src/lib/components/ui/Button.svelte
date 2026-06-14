<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';

	export const buttonVariants = tv({
		base: 'group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50',
		variants: {
			variant: {
				primary:
					'bg-terracotta-500 text-cream shadow-soft hover:bg-terracotta-600 hover:shadow-lift hover:-translate-y-0.5',
				gold: 'bg-gold-500 text-charcoal shadow-soft hover:bg-gold-400 hover:shadow-lift hover:-translate-y-0.5',
				outline:
					'border border-charcoal/20 bg-transparent text-charcoal hover:border-terracotta-500 hover:text-terracotta-600',
				ghost: 'bg-transparent text-charcoal hover:bg-charcoal/5',
				cream:
					'bg-cream text-charcoal shadow-soft hover:bg-white hover:shadow-lift hover:-translate-y-0.5'
			},
			size: {
				sm: 'h-9 px-4 text-sm',
				md: 'h-11 px-6 text-sm',
				lg: 'h-13 px-8 text-base py-3.5'
			}
		},
		defaultVariants: { variant: 'primary', size: 'md' }
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
	export type ButtonSize = VariantProps<typeof buttonVariants>['size'];
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type Props = {
		variant?: ButtonVariant;
		size?: ButtonSize;
		href?: string;
		class?: string;
		children: Snippet;
	} & HTMLButtonAttributes &
		HTMLAnchorAttributes;

	let {
		variant = 'primary',
		size = 'md',
		href,
		class: className,
		children,
		...rest
	}: Props = $props();
</script>

{#if href}
	<a {href} class={cn(buttonVariants({ variant, size }), className)} {...rest}>
		{@render children()}
	</a>
{:else}
	<button class={cn(buttonVariants({ variant, size }), className)} {...rest}>
		{@render children()}
	</button>
{/if}

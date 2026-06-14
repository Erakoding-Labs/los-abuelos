import { img } from './images';
import {
	HeartHandshake,
	Salad,
	Sunrise,
	Users,
	Leaf,
	HandPlatter,
	Soup,
	Flame
} from '@lucide/svelte';

/** Home highlights / value props. */
export const highlights = [
	{
		icon: HeartHandshake,
		title: 'Family-Owned',
		text: 'Three generations behind the stove, serving Menard like family since day one.'
	},
	{
		icon: Salad,
		title: 'Fresh Ingredients Daily',
		text: 'Salsas, tortillas, and sauces made from scratch every single morning.'
	},
	{
		icon: Sunrise,
		title: 'Breakfast, Lunch & Dinner',
		text: 'From early breakfast tacos to hearty dinner plates — open all day.'
	},
	{
		icon: Users,
		title: 'Friendly Local Service',
		text: 'Warm, unhurried hospitality that treats every guest like a regular.'
	}
];

/** About-page family values. */
export const values = [
	{
		icon: Leaf,
		title: 'Made From Scratch',
		text: 'No shortcuts. We roast our chiles, press our tortillas, and simmer our sauces low and slow.'
	},
	{
		icon: HandPlatter,
		title: 'Generous by Nature',
		text: 'Plates that fill you up and prices that feel fair. That’s how abuela would have it.'
	},
	{
		icon: Soup,
		title: 'Recipes With Roots',
		text: 'Dishes passed down through our family, cooked the traditional way every time.'
	},
	{
		icon: Flame,
		title: 'Cooked With Heart',
		text: 'You can taste when food is made with love. That’s the only way we know how.'
	}
];

/** Story timeline for the About page. */
export const timeline = [
	{
		year: 'The Beginning',
		title: 'A kitchen full of family',
		text: 'It started with abuela’s recipes and a small family kitchen — comal always warm, door always open.'
	},
	{
		year: 'Putting Down Roots',
		title: 'Welcomed to Menard',
		text: 'We brought those recipes to 1010 Frisco Ave, and the Menard community made us their own.'
	},
	{
		year: 'A Local Tradition',
		title: 'Morning regulars & big plates',
		text: 'Breakfast tacos before work, enchilada plates after church — we became part of everyday life here.'
	},
	{
		year: 'Today',
		title: 'Still family, still from scratch',
		text: 'Rated 4.5 stars across 142 reviews. The recipes haven’t changed, and neither has the welcome.'
	}
];

/** Team / family members. */
export const team = [
	{
		name: 'The Abuelos',
		role: 'Founders & Recipe Keepers',
		text: 'The heart of the kitchen and the namesake of everything we serve.',
		image: img.familyAbuelos
	},
	{
		name: 'Our Cocineros',
		role: 'Kitchen Family',
		text: 'Hand-pressing tortillas and roasting chiles before sunrise, every day.',
		image: img.storyKitchen
	},
	{
		name: 'The Front of House',
		role: 'Your Hosts',
		text: 'The smiling faces who remember your order and your name.',
		image: img.storyTable
	}
];

/** Gallery items with masonry span hints. */
export const gallery = [
	{ src: img.gAtmosphere, alt: 'Warm dining room interior at Los Abuelos', span: 'tall' },
	{ src: img.gPlate2, alt: 'A spread of authentic Mexican tacos', span: 'wide' },
	{ src: img.gDining, alt: 'Guests enjoying a meal together', span: 'normal' },
	{ src: img.gPlate3, alt: 'Cheese enchiladas in red chile sauce', span: 'tall' },
	{ src: img.gDrinks, alt: 'House margarita with a salted rim', span: 'normal' },
	{ src: img.gPlate1, alt: 'Loaded breakfast tacos on a plate', span: 'tall' },
	{ src: img.gPatio, alt: 'Cozy seating at the restaurant', span: 'tall' },
	{ src: img.gPlate4, alt: 'The Los Abuelos combo special plate', span: 'wide' },
	{ src: img.gChef, alt: 'Chef preparing food in the kitchen', span: 'normal' },
	{ src: img.gFamily, alt: 'A family table set for dinner', span: 'normal' }
] as const;

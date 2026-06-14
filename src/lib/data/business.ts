/** Single source of truth for NAP (name/address/phone) + hours. */
export const business = {
	name: 'Los Abuelos Mexican Restaurant',
	shortName: 'Los Abuelos',
	tagline: 'Authentic Mexican Flavors. Family Tradition.',
	description:
		'Family-owned Mexican restaurant in Menard, Texas serving homemade recipes, fresh ingredients, and warm hospitality for breakfast, lunch, and dinner.',
	category: 'Mexican Restaurant',
	priceRange: '$10–20',
	rating: 4.5,
	reviewCount: 142,
	phone: '+1 469-956-4066',
	phoneHref: 'tel:+14699564066',
	email: 'hello@losabuelosmenard.com',
	address: {
		street: '1010 Frisco Ave',
		city: 'Menard',
		state: 'TX',
		zip: '76859',
		country: 'United States'
	},
	get addressLine() {
		return `${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zip}`;
	},
	geo: { lat: 30.9182, lng: -99.7837 },
	mapEmbed:
		'https://www.google.com/maps?q=1010+Frisco+Ave,+Menard,+TX+76859&output=embed',
	mapDirections:
		'https://www.google.com/maps/dir/?api=1&destination=1010+Frisco+Ave,+Menard,+TX+76859',
	reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Los+Abuelos+Mexican+Restaurant+Menard+TX',
	services: { dineIn: true, driveThrough: true, delivery: false, takeout: true },
	social: {
		facebook: 'https://www.facebook.com/',
		instagram: 'https://www.instagram.com/',
		google: 'https://www.google.com/maps'
	}
} as const;

export interface Hours {
	day: string;
	open: string;
	close: string;
	/** ISO weekday short codes for schema.org */
	schema: string;
}

export const hours: Hours[] = [
	{ day: 'Monday', open: '7:00 AM', close: '9:00 PM', schema: 'Mo' },
	{ day: 'Tuesday', open: '7:00 AM', close: '9:00 PM', schema: 'Tu' },
	{ day: 'Wednesday', open: '7:00 AM', close: '9:00 PM', schema: 'We' },
	{ day: 'Thursday', open: '7:00 AM', close: '9:00 PM', schema: 'Th' },
	{ day: 'Friday', open: '7:00 AM', close: '10:00 PM', schema: 'Fr' },
	{ day: 'Saturday', open: '7:00 AM', close: '10:00 PM', schema: 'Sa' },
	{ day: 'Sunday', open: '8:00 AM', close: '3:00 PM', schema: 'Su' }
];

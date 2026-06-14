export interface Review {
	name: string;
	location: string;
	rating: number;
	date: string;
	quote: string;
	initials: string;
}

export const reviews: Review[] = [
	{
		name: 'Marcus R.',
		location: 'Menard, TX',
		rating: 5,
		date: 'March 2026',
		quote: 'Great local spot for breakfast and lunch with friendly service. The breakfast tacos are the real deal.',
		initials: 'MR'
	},
	{
		name: 'Linda G.',
		location: 'San Angelo, TX',
		rating: 5,
		date: 'February 2026',
		quote: 'Traditional mom-and-pop restaurant with delicious food and a welcoming atmosphere. Felt like eating at family.',
		initials: 'LG'
	},
	{
		name: 'Daniel V.',
		location: 'Brady, TX',
		rating: 5,
		date: 'February 2026',
		quote: 'Excellent service, authentic Mexican flavors, and great value. The chimichanga is huge and incredible.',
		initials: 'DV'
	},
	{
		name: 'Sofia M.',
		location: 'Menard, TX',
		rating: 4,
		date: 'January 2026',
		quote: 'Cozy little place with generous portions. Their house salsa has the perfect amount of heat.',
		initials: 'SM'
	},
	{
		name: 'James T.',
		location: 'Junction, TX',
		rating: 5,
		date: 'December 2025',
		quote: 'We stop here every time we pass through Menard. Consistent, hearty, and the staff treats you like a regular.',
		initials: 'JT'
	},
	{
		name: 'Carolyn P.',
		location: 'Mason, TX',
		rating: 4,
		date: 'November 2025',
		quote: 'Enchilada plate was outstanding and the horchata is made fresh. A genuine small-town gem.',
		initials: 'CP'
	}
];

/** Aggregated stats for the reviews page. */
export const reviewStats = {
	average: 4.5,
	total: 142,
	distribution: [
		{ stars: 5, percent: 72 },
		{ stars: 4, percent: 19 },
		{ stars: 3, percent: 6 },
		{ stars: 2, percent: 2 },
		{ stars: 1, percent: 1 }
	],
	highlights: [
		{ label: 'Friendly service', value: '96%' },
		{ label: 'Food quality', value: '94%' },
		{ label: 'Would return', value: '92%' }
	]
};

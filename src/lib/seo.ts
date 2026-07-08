import { business, hours } from './data/business';

export const SITE_URL = 'https://www.losabuelosmenard.com';
// Falls back to the hero photo until owned OG art is added at /og-image.jpg.
export const OG_IMAGE = 'https://www.losabuelosmenard.com/og-image.jpg';

export interface SeoInput {
	title: string;
	description?: string;
	path?: string;
	image?: string;
}

export function buildSeo({ title, description, path = '/', image = OG_IMAGE }: SeoInput) {
	const fullTitle =
		path === '/' ? `${business.name} | Menard, TX` : `${title} | ${business.shortName}`;
	const desc = description ?? business.description;
	const url = `${SITE_URL}${path}`;
	return { fullTitle, desc, url, image };
}

/** LocalBusiness / Restaurant schema.org JSON-LD. */
export function restaurantSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Restaurant',
		name: business.name,
		description: business.description,
		url: SITE_URL,
		image: OG_IMAGE,
		telephone: business.phone,
		priceRange: business.priceRange,
		servesCuisine: 'Mexican',
		address: {
			'@type': 'PostalAddress',
			streetAddress: business.address.street,
			addressLocality: business.address.city,
			addressRegion: business.address.state,
			postalCode: business.address.zip,
			addressCountry: 'US'
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: business.geo.lat,
			longitude: business.geo.lng
		},
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: business.rating,
			reviewCount: business.reviewCount,
			bestRating: 5
		},
		openingHoursSpecification: hours.map((h) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: h.schema,
			opens: to24h(h.open),
			closes: to24h(h.close)
		})),
		acceptsReservations: false,
		hasMenu: `${SITE_URL}/menu`
	};
}

function to24h(t: string): string {
	const [time, mer] = t.split(' ');
	let [h, m] = time.split(':').map(Number);
	if (mer === 'PM' && h !== 12) h += 12;
	if (mer === 'AM' && h === 12) h = 0;
	return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

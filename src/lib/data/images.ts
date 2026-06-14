/**
 * Centralized image references. Uses the Unsplash image CDN with sizing
 * params so we ship appropriately-scaled, compressed assets without bundling
 * large binaries. Swap `id`s for owned photography before launch.
 */
function ux(id: string, w = 1200, h?: number) {
	const crop = h ? `&h=${h}&fit=crop` : '&fit=max';
	return `https://images.unsplash.com/photo-${id}?auto=format&q=72&w=${w}${crop}`;
}

export const img = {
	heroPrimary: ux('1565299624946-b28f40a0ae38', 1920, 1280), // tacos spread
	heroPlate: ux('1599974579688-8dbdd335c77f', 900, 1100), // enchiladas
	storyKitchen: ux('1556910103-1c02745aae4d', 1200, 900), // kitchen hands
	storyTable: ux('1414235077428-338989a2e8c0', 1200, 900), // dining table
	familyAbuelos: ux('1556909212-d5b604d0c90d', 1100, 900),
	ingredients: ux('1604908176997-125f25cc6f3d', 1100, 900),

	// Dishes
	chimichanga: ux('1626700051175-6818013e1d4f', 800, 640),
	enchiladas: ux('1599974579688-8dbdd335c77f', 800, 640),
	breakfastTacos: ux('1551504734-5ee1c4a1479b', 800, 640),
	salsa: ux('1600335895229-6e75511892c8', 800, 640),
	burrito: ux('1626700051175-6818013e1d4f', 800, 640),
	combo: ux('1565299507177-b0ac66763828', 800, 640),
	guacamole: ux('1600326145552-327c4df2c246', 800, 640),
	quesadilla: ux('1618040996337-56904b7850b9', 800, 640),
	tacosBirria: ux('1565299585323-38d6b0865b47', 800, 640),
	margarita: ux('1556679343-c7306c1976bc', 800, 640),
	flan: ux('1488477181946-6428a0291777', 800, 640),
	huevos: ux('1525351484163-7529414344d8', 800, 640),
	nachos: ux('1582169296194-e4d644c48063', 800, 640),
	fajitas: ux('1574484284002-952d92456975', 800, 640),
	churros: ux('1624471339379-cd9b7e3e07d4', 800, 640),
	horchata: ux('1541658016709-82535e94bc69', 800, 640),

	// Gallery / atmosphere
	gAtmosphere: ux('1517248135467-4c7edcad34c4', 1000, 1200),
	gDining: ux('1466978913421-dad2ebd01d17', 1000, 800),
	gPlate1: ux('1551504734-5ee1c4a1479b', 1000, 1100),
	gPlate2: ux('1565299624946-b28f40a0ae38', 1000, 800),
	gPlate3: ux('1599974579688-8dbdd335c77f', 1000, 1200),
	gPlate4: ux('1565299507177-b0ac66763828', 1000, 800),
	gPatio: ux('1559339352-11d035aa65de', 1000, 1100),
	gDrinks: ux('1556679343-c7306c1976bc', 1000, 800),
	gFamily: ux('1414235077428-338989a2e8c0', 1000, 1100),
	gChef: ux('1556910103-1c02745aae4d', 1000, 800)
} as const;

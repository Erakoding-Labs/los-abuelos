import { img } from './images';

export interface MenuItem {
	name: string;
	description: string;
	price: string;
	image?: string;
	popular?: boolean;
	vegetarian?: boolean;
}

export interface MenuCategory {
	id: string;
	title: string;
	blurb: string;
	items: MenuItem[];
}

export const menu: MenuCategory[] = [
	{
		id: 'breakfast',
		title: 'Breakfast',
		blurb: 'Served hot from open till 11am — the way abuela intended.',
		items: [
			{
				name: 'Huevos Rancheros',
				description:
					'Two farm eggs over crispy corn tortillas, smothered in our roasted ranchero salsa, with refried beans and rice.',
				price: '$10.50',
				image: img.huevos,
				popular: true
			},
			{
				name: 'Machacado con Huevo',
				description: 'Dried shredded beef scrambled with eggs, tomato, onion, and jalapeño.',
				price: '$11.00'
			},
			{
				name: 'Chilaquiles Verdes',
				description:
					'Tortilla chips simmered in tangy tomatillo salsa, topped with eggs, queso fresco, and crema.',
				price: '$10.75',
				vegetarian: true
			},
			{
				name: 'Breakfast Burrito',
				description: 'Eggs, potato, cheese, and your choice of bacon, chorizo, or sausage.',
				price: '$9.25'
			}
		]
	},
	{
		id: 'breakfast-tacos',
		title: 'Breakfast Tacos',
		blurb: 'Hand-pressed flour tortillas, griddled to order. A Menard morning staple.',
		items: [
			{
				name: 'Bacon & Egg',
				description: 'Crispy bacon, fluffy eggs, and melted cheese in a warm flour tortilla.',
				price: '$3.25',
				image: img.breakfastTacos,
				popular: true
			},
			{
				name: 'Chorizo & Egg',
				description: 'House chorizo scrambled with egg and a touch of potato.',
				price: '$3.50'
			},
			{
				name: 'Potato & Egg',
				description: 'Golden potato, egg, and cheese — simple and satisfying.',
				price: '$2.95',
				vegetarian: true
			},
			{
				name: 'Barbacoa Taco',
				description: 'Slow-cooked barbacoa with onion and cilantro. Weekends only.',
				price: '$3.95'
			}
		]
	},
	{
		id: 'appetizers',
		title: 'Appetizers',
		blurb: 'Made to share — or not.',
		items: [
			{
				name: 'House Salsa & Chips',
				description: 'Our signature fire-roasted salsa with warm, crisp tortilla chips.',
				price: '$4.50',
				image: img.salsa,
				popular: true,
				vegetarian: true
			},
			{
				name: 'Fresh Guacamole',
				description: 'Hand-mashed avocado, lime, cilantro, onion, and serrano.',
				price: '$6.95',
				image: img.guacamole,
				vegetarian: true
			},
			{
				name: 'Loaded Nachos',
				description: 'Crispy chips, melted cheese, beans, jalapeños, pico, and crema.',
				price: '$9.50',
				image: img.nachos
			},
			{
				name: 'Queso Fundido',
				description: 'Bubbling melted cheese with chorizo, served with tortillas.',
				price: '$8.25'
			}
		]
	},
	{
		id: 'enchiladas',
		title: 'Enchiladas',
		blurb: 'Rolled by hand, baked in our family chile sauces.',
		items: [
			{
				name: 'Enchilada Plate',
				description:
					'Three cheese enchiladas in red chile gravy with rice and refried beans.',
				price: '$12.95',
				image: img.enchiladas,
				popular: true
			},
			{
				name: 'Enchiladas Verdes',
				description: 'Chicken enchiladas in tomatillo salsa, topped with crema and queso fresco.',
				price: '$13.50'
			},
			{
				name: 'Enchiladas Suizas',
				description: 'Creamy green sauce, melted Monterey Jack, and tender chicken.',
				price: '$13.95'
			}
		]
	},
	{
		id: 'chimichangas',
		title: 'Chimichangas',
		blurb: 'Golden, crisp, and generous — a house favorite.',
		items: [
			{
				name: 'Beef Chimichanga',
				description:
					'Seasoned shredded beef fried golden, topped with queso, lettuce, pico, and crema.',
				price: '$13.95',
				image: img.chimichanga,
				popular: true
			},
			{
				name: 'Chicken Chimichanga',
				description: 'Tender chicken, beans, and cheese in a crisp flour tortilla.',
				price: '$13.50'
			},
			{
				name: 'Veggie Chimichanga',
				description: 'Grilled peppers, onion, squash, and beans. Lightly fried.',
				price: '$12.50',
				vegetarian: true
			}
		]
	},
	{
		id: 'burritos',
		title: 'Burritos',
		blurb: 'Stuffed full, rolled tight, smothered if you like.',
		items: [
			{
				name: 'Smothered Burrito',
				description:
					'Big flour tortilla packed with beef, beans, and rice, covered in chile con queso.',
				price: '$12.25',
				image: img.burrito,
				popular: true
			},
			{
				name: 'Carne Asada Burrito',
				description: 'Grilled steak, guacamole, pico, and rice.',
				price: '$13.25'
			},
			{
				name: 'Bean & Cheese Burrito',
				description: 'Refried beans and melted cheese — comfort in every bite.',
				price: '$8.50',
				vegetarian: true
			}
		]
	},
	{
		id: 'combo-plates',
		title: 'Combo Plates',
		blurb: 'Can’t decide? We built these for you.',
		items: [
			{
				name: 'Los Abuelos Special',
				description:
					'One enchilada, one taco, one tamale, with rice, beans, and guacamole.',
				price: '$15.95',
				image: img.combo,
				popular: true
			},
			{
				name: 'Fajitas for Two',
				description: 'Sizzling steak & chicken with peppers, onions, and all the fixings.',
				price: '$28.95',
				image: img.fajitas
			},
			{
				name: 'Taco & Enchilada Plate',
				description: 'Crispy taco and cheese enchilada with rice and beans.',
				price: '$12.50'
			}
		]
	},
	{
		id: 'drinks',
		title: 'Drinks',
		blurb: 'House-made and ice cold.',
		items: [
			{
				name: 'House Margarita',
				description: 'Fresh lime, tequila, and a salted rim. On the rocks or frozen.',
				price: '$7.50',
				image: img.margarita,
				popular: true
			},
			{
				name: 'Horchata',
				description: 'Creamy rice & cinnamon agua fresca, made fresh daily.',
				price: '$3.25',
				image: img.horchata,
				vegetarian: true
			},
			{
				name: 'Jarritos',
				description: 'Mexican soda — tamarind, mandarin, lime, or guava.',
				price: '$2.75',
				vegetarian: true
			}
		]
	},
	{
		id: 'desserts',
		title: 'Desserts',
		blurb: 'Save room — abuela insists.',
		items: [
			{
				name: 'Tres Leches',
				description: 'Sponge cake soaked in three milks, topped with cinnamon cream.',
				price: '$5.95',
				image: img.flan,
				popular: true,
				vegetarian: true
			},
			{
				name: 'Churros',
				description: 'Crisp cinnamon-sugar churros with warm chocolate dipping sauce.',
				price: '$4.95',
				image: img.churros,
				vegetarian: true
			},
			{
				name: 'Flan Casero',
				description: 'Silky vanilla custard with caramel — a family recipe.',
				price: '$4.50',
				vegetarian: true
			}
		]
	}
];

/** Curated featured dishes for the home page. */
export const featuredDishes: MenuItem[] = [
	menu.find((c) => c.id === 'chimichangas')!.items[0],
	menu.find((c) => c.id === 'enchiladas')!.items[0],
	menu.find((c) => c.id === 'breakfast-tacos')!.items[0],
	menu.find((c) => c.id === 'appetizers')!.items[0],
	menu.find((c) => c.id === 'combo-plates')!.items[0]
];

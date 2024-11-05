StartupEvents.registry('item', event => {

//pizzas and dough
	event.create("cheese_pizza")
		.displayName("Cheese Pizza")
		.texture("kubejs:item/food/cheese_pizza")
		.food(food => {
			food
			.hunger(15)
			.saturation(0.5)
		})
	event.create("strength_pizza")	
		.displayName("Meatlover's Pizza")
		.texture("kubejs:item/food/strength_pizza")
		.food(food => {
			food
			.hunger(15)
			.saturation(0.5)
			.effect("minecraft:strength",9600,0,1)
		})
	event.create("fire_pizza")	
		.displayName("Spicy Pizza")
		.texture("kubejs:item/food/fire_pizza")
		.food(food => {
			food
			.hunger(15)
			.saturation(0.5)
			.effect("minecraft:fire_resistance",9600,0,1)
		})	
	event.create("gapple_pizza")	
	.texture("kubejs:item/food/gapple_pizza")
		.displayName("Extra Cheesy Pizza")
		.food(food => {
			food
			.hunger(15)
			.saturation(0.5)
			.effect("minecraft:absorption",4800,2,1)
			.effect("minecraft:regeneration",40,2,1)
		})
	event.create("heal_pizza")	
		.displayName("Stuffed Pizza With Honey")
		.texture("kubejs:item/food/heal_pizza")
		.food(food => {
			food
			.hunger(15)
			.saturation(0.5)
			.effect("minecraft:regeneration",1800,0,1)
		})
	event.create("water_breathing_pizza")	
		.displayName("Anchovy Pizza")
		.texture("kubejs:item/food/water_breathing_pizza")
		.food(food => {
			food
			.hunger(15)
			.saturation(0.5)
			.effect("minecraft:water_breathing",9600,0,1)
		})
	event.create("speed_pizza")	
		.displayName("Veggie Balsamic Pizza")
		.texture("kubejs:item/food/speed_pizza")
		.food(food => {
			food
			.hunger(15)
			.saturation(0.5)
			.effect("minecraft:speed",9600,0,1)
		})
	event.create('cheese').displayName('Cheese')
		.texture("kubejs:item/food/cheese")
		.food(food => {
			food
			.hunger(3)
			.saturation(0.3)
		})
	event.create('incomplete_pizza1').displayName('Pizza Dough')
		.texture("kubejs:item/food/incomplete_pizza1")
	event.create('incomplete_pizza2').displayName('Sauced Pizza Dough')
		.texture("kubejs:item/food/incomplete_pizza2")
	event.create('incomplete_pizza3').displayName('Uncooked Pizza')
		.texture("kubejs:item/food/incomplete_pizza3")
})


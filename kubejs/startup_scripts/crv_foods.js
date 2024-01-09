StartupEvents.registry('item', event => {

//pizzas and dough
	event.create("cheese_pizza")
		.displayName("Cheese Pizza")
		.food(food => {
			food
			.hunger(15)
			.saturation(0.5)
		})
	event.create("strength_pizza")	
		.displayName("Meatlover's Pizza")
		.food(food => {
			food
			.hunger(15)
			.saturation(0.5)
			.effect("minecraft:strength",120,0,1)
		})
	event.create("absorption_pizza")	
		.displayName("Extra Cheesy Pizza")
		.food(food => {
			food
			.hunger(15)
			.saturation(0.5)
			.effect("minecraft:absorption",300,2,1)
		})
	event.create("heal_pizza")	
		.displayName("Stuffed Pizza With Honey")
		.food(food => {
			food
			.hunger(15)
			.saturation(0.5)
			.effect("minecraft:instant_health",0,2,1)
		})
		
})
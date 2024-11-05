ServerEvents.recipes(event => {

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{fluid: 'minecraft:milk', amount: 1000}  // Using liquid milk instead of milk bucket
		],
		results: [
			{item: 'kubejs:cheese'}
		],
		heatRequirement: 'heated'  // Recipe requires heat
	})
	
	//pizza, non-sequenced
	event.custom({
		type: 'create:pressing',
		ingredients: [{item: 'create:dough'}],
		results: [{item: 'kubejs:incomplete_pizza1'}]
	})
	event.custom({
		type: 'create:filling',
		ingredients: [{item: 'kubejs:incomplete_pizza1'},{fluid: 'create_central_kitchen:tomato_sauce', amount: 250}],
		results: [{item: 'kubejs:incomplete_pizza2'}]
	})
	event.custom({
		type: 'create:deploying',
		ingredients: [{item: 'kubejs:incomplete_pizza2'},{item: 'kubejs:cheese'}],
		results: [{item: 'kubejs:incomplete_pizza3'}]
	})
	event.custom({
		type: 'minecraft:smoking',
		ingredient: [{item: 'kubejs:incomplete_pizza3'}],
		result:'kubejs:cheese_pizza'
	})
	
	//pizzas as a receptacle for potions
	event.custom({
		type:"create:filling",
		ingredients: [{item:"kubejs:cheese_pizza"},{fluid:'create:potion', amount:250 , nbt: {"Bottle": "REGULAR" , "Potion":"minecraft:long_fire_resistance"}}],
		results: [{item:"kubejs:fire_pizza"}]
	})
	event.custom({
		type:"create:filling",
		ingredients: [{item:"kubejs:cheese_pizza"},{fluid:'create:potion', amount:250 , nbt: {"Bottle": "REGULAR" , "Potion":"minecraft:long_strength"}}],
		results: [{item:"kubejs:strength_pizza"}]
	})
	event.custom({
		type:"create:filling",
		ingredients: [{item:"kubejs:cheese_pizza"},{fluid:'create:potion', amount:250 , nbt: {"Bottle": "REGULAR" , "Potion":"minecraft:regeneration"}}],
		results: [{item:"kubejs:heal_pizza"}]
	})
	event.custom({
		type:"create:filling",
		ingredients: [{item:"kubejs:cheese_pizza"},{fluid:'create:potion', amount:250 , nbt: {"Bottle": "REGULAR" , "Potion":"minecraft:long_water_breathing"}}],
		results: [{item:"kubejs:water_breathing_pizza"}]
	})
	event.custom({
		type:"create:filling",
		ingredients: [{item:"kubejs:cheese_pizza"},{fluid:'create:potion', amount:250 , nbt: {"Bottle": "REGULAR" , "Potion":"minecraft:long_swiftness"}}],
		results: [{item:"kubejs:speed_pizza"}]
	})
	
	event.custom({
		type:"create:deploying",
		ingredients: [{item:"kubejs:cheese_pizza"},{item:"minecraft:golden_apple", count: 2}],
		results: [{item:"kubejs:gapple_pizza"}]
	})

/*
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: {item: 'create:dough'},
		transitionalItem: {item: 'kubejs:incomplete_pizza1'},
		transitionalItem: {item: 'kubejs:incomplete_pizza2'},
		transitionalItem: {item: 'kubejs:incomplete_pizza3'},
		sequence: [
			{
				type: 'create:pressing',
				ingredients: [{item: 'create:dough'}],
				results: [{item: 'kubejs:incomplete_pizza1'}]
			},
			{
				type: 'create:filling',
				ingredients: [{item: 'kubejs:incomplete_pizza1'},{fluid: 'create_central_kitchen:tomato_sauce', amount: 250}],
				results: [{item: 'kubejs:incomplete_pizza2'}]
			},
			{
				type: 'create:deploying',
				ingredients: [{item: 'kubejs:incomplete_pizza2'},{item: 'kubejs:cheese'}],
				results: [{item: 'kubejs:cheese_pizza3'}]
			},
			{
				type: 'create:smoking',
				ingredient: [{item: 'kubejs:incomplete_pizza'}],
				result:'kubejs:incomplete_pizza'
			}
		],
		results: [{item: 'kubejs:cheese_pizza'}],
		loops: 1
	})
*/

})
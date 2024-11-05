ServerEvents.recipes(event => {
	//Kerosene creation w/ dragons breath item & fluid
	event.custom({
		type: 'create:mixing',
		ingredients: [{item: 'kubejs:powdered_coal'},{item: 'kubejs:raw_sulfur', count:5},{item: 'kubejs:resin'},{item: 'minecraft:dragon_breath'}],
		results: [{fluid: 'kubejs:kerosene', amount: 144}],
		heatRequirement: 'superheated'
	})
	event.custom({
		type: 'create:mixing',
		ingredients: [{item: 'kubejs:powdered_coal'},{item: 'kubejs:raw_sulfur', count:5},{item: 'kubejs:resin'},{fluid: 'create_central_kitchen:dragon_breath', amount: 250}],
		results: [{fluid: 'kubejs:kerosene', amount: 144}],
		heatRequirement: 'superheated'
	})
	
	//refined fuel from Kerosene
	event.custom({
		type:'create:mixing',
		ingredients: [{fluid: 'kubejs:kerosene', amount:144},{item: 'minecraft:charcoal'},{item: 'kubejs:resin'}],
		results: [{item: 'kubejs:refined_fuel'}],
		heatRequirement: 'superheated'
	})
})
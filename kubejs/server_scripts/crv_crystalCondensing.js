ServerEvents.recipes(event => {
	
	//lapis pressing
	event.custom({
		type:'create:compacting',
		ingredients: [
			{item:"kubejs:charged_crystal_base"},{item: "minecraft:lapis_block"},
			{fluid:"kubejs:liquid_crystal_slurry", amount:100}
		],
		results: [
			{item: "minecraft:lapis_lazuli"},
			{item: "2x minecraft:lapis_lazuli", chance:0.5},
			{item: "minecraft:lapis_block"}
		]
	})
	
	//echo salting
	event.custom({
		type:'create:sequenced_assembly',
		ingredient: {item:'kubejs:charged_crystal_growth_plate'},
		transitionalItem: {item:'kubejs:coated_crystal_plate'},
		sequence: [
			{
				type: 'create:filling',
				ingredients:[
					{item:'kubejs:charged_crystal_growth_plate'},
					{fluid:'kubejs:liquid_crystal_slurry', amount:50, nbt:{}}
				],
				results:[{item:'kubejs:coated_crystal_plate'}]
				
			},
			{
				type: 'create:deploying',
				ingredients:[{item:'kubejs:coated_crystal_plate'},{item:'minecraft:echo_shard'}],
				results:[{item:'kubejs:echo_plate'}]
				
			},	
		],
		results:[{item:'kubejs:echo_plate'}],
		loops:1
	})
	
	//echo sawing
	event.custom({
		type: 'create:cutting',
		ingredients: [{item:'kubejs:echo_plate'}],
		results: [{item:'4x minecraft:echo_shard'}]
	})
	
})
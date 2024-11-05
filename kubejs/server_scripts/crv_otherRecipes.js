ServerEvents.recipes(event => {
	//Slag compacting
	event.custom({
			type:'create:compacting',
			ingredients: [
				{item: "kubejs:slag", count:16}
			],
			results: [
				{item: "kubejs:slag_block"}
			]
	})
	
	//ash block
	event.shapeless('kubejs:ash_block','9x kubejs:ash')
	event.shapeless('9x kubejs:ash','kubejs:ash_block')
	
	//deepslate from cobble+basalt
	event.custom({
			type:'create:compacting',
			ingredients: [
				{item: "minecraft:basalt", count:2},
				{item: "minecraft:cobblestone", count:2}
			],
			results: [
				{item: "minecraft:cobbled_deepslate", count:2}
			]
	})
	
	//leaf compacting
	event.custom({
		type:'create:compacting',
		ingredients: [
			{item: '#minecraft:leaves'}
		],
		results: [
			{fluid: "minecraft:water", amount:100}
		]
	})
	
	//chest minecart disassembly
	event.shapeless('minecraft:chest',
		[
			'minecraft:chest_minecart'
		]
	).replaceIngredient('minecraft:chest_minecart','minecraft:minecart')
	
	//slab sawing & bark woof woof
	const woodTypes = ['oak','dark_oak','spruce','birch','jungle','acacia','crimson','warped']
	let slabChanges = (woodType) => {
		event.custom({
			type:"create:cutting",
			ingredients: [{item: 'minecraft:' + woodType + '_planks'}],
			results: [{item: '2x minecraft:' + woodType + '_slab'}]
		})
		event.custom({
			type:"create:cutting",
			ingredients: [{item: 'minecraft:' + woodType + '_planks'}],
			results: [{item: '2x minecraft:' + woodType + '_slab'}]
		})
		/*
		event.custom({
			type:"create:cutting",
			ingredients: [{item: 'minecraft:' + woodType + '_log'}],
			results: [{item: '6x minecraft:' + woodType + '_planks'},{item: 'farmersdelight:tree_bark']
		})
		*/
	}
	for(let i = 0; i < woodTypes.length; i++) {
		slabChanges(woodTypes[i])
	}
	
	//leather to belts
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: {item: 'minecraft:leather'},
		transitionalItem: {item: 'kubejs:incomplete_leather_strip'},
		sequence: [
			{
				type: 'create:pressing',
				ingredients: [{item: 'minecraft:leather'}],
				results: [{item: 'kubejs:incomplete_leather_strip'}]
			},
			{
				type: 'create:cutting',
				ingredients: [{item: 'minecraft:leather_strip'}],
				results: [{item: 'create:belt_connector', count:4}]
			}
		],
		results: [{item: 'create:belt_connector', count: 4}],
		loops: 1
	})
	
	//leather => leather strips (ineffecient)
	event.custom({
		type: "create:cutting",
		ingredients: [{item: "minecraft:leather"}],
		results: [{item: "kubejs:leather_strip", count: 4}]
	})
	
	//leather strips => bound fletching & bound arrows
	event.shapeless("6x kubejs:bound_fletching",
	[
		"minecraft:feather",
		"minecraft:feather",
		"minecraft:feather",
		"kubejs:leather_strip",
		"kubejs:leather_strip",
		"kubejs:leather_strip"
	])
	event.shaped("4x minecraft:arrow",
	[
		"F",
		"S",
		"B"
	],
	{
		F: "minecraft:flint",
		S: "minecraft:stick",
		B: "kubejs:bound_fletching"
	})
	
	//sulfur + ash = gunpowder
	event.custom({
		type:"create:mixing",
		ingredients: [
			{item:"kubejs:ash"},
			{item:"kubejs:raw_sulfur"}
		],
		results: [
			{item:"2x minecraft:gunpowder"},
			{item:"minecraft:gunpowder", chance: 0.5}
		]
	})
	event.shapeless('2x minecraft:gunpowder', 
		[
			'kubejs:ash',
			'kubejs:raw_sulfur'
		]
	)
	
	
	//change washing gravel to zinc ingots w/ a higher chance
	event.remove({id:"create:splashing/gravel"})
	event.custom({
		type: 'create:splashing',
		ingredients: [{item: "minecraft:gravel"}],
		results: [{item:"create:zinc_nugget", chance: 0.5},{item:"minecraft:flint",chance:0.25}]
	})
})



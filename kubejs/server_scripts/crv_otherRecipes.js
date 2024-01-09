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
	
	//leaf compacting
	event.custom({
		type:'create:compacting',
		ingredients: [
			{item: "#forge:leaves"}
		],
		results: [
			{fluid: "minecraft:water", amount:100}
		]
	})
	
	//egg haunting for sulfur
	event.custom({
		type:"create:haunting",
		ingredients:[{item:"minecraft:egg"}],
		results:[{item:'kubejs:raw_sulfur'}]
	})
	
	//smelt bark for ash
	event.smelting("kubejs:ash","farmersdelight:tree_bark")
	
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
	
	event.shapeless('minecraft:chest',
		[
			'minecraft:chest_minecart'
		]
	).replaceIngredient('minecraft:chest_minecart','minecraft:minecart')
	
	//slab sawing
	const woodTypes = ['oak','dark_oak','spruce','birch','jungle','acacia','crimson','warped']
	let slabChanges = (woodType) => {
		event.custom({
			type:"create:cutting",
			ingredients: [{item: 'minecraft:' + woodType + '_planks'}],
			results: [{item: '2x minecraft:' + woodType + '_slab'}]
		})
		event.custom({
			type:"create:cutting",
			ingredients: [{item: 'minecraft:' + woodType + '_slab'}],
			results: [{item: '2x minecraft:stick'}]
		})
	}
	for(let i = 0; i < woodTypes.length; i++) {
		slabChanges(woodTypes[i])
	}
})
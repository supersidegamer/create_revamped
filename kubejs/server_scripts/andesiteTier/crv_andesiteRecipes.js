ServerEvents.recipes(event => {
	const preOreTypes = ['minecraft:raw_iron','minecraft:raw_gold','minecraft:raw_copper','minecraft:coal','create:raw_zinc']
	const oreTypes = ['iron','gold','copper','coal','zinc']
	const smelts = ["minecraft:iron_ingot","minecraft:gold_ingot","minecraft:copper_ingot","minecraft:charcoal","create:zinc_ingot"]
	
	//remove millstone crafting recipe
	event.remove({output:'create:millstone'})
	
	//millstone w andesite balls
	event.shaped( 'create:millstone', [
		'GAG',
		'BSB',
		'FFF'
	],
	{
		G: 'create:cogwheel',
		A: 'create:andesite_casing',
		B: 'kubejs:andesite_ball',
		S: 'create:shaft',
		F: '#forge:stone'
	}
	)
	
	//ball milled ores 1/3 + milled
	let millOre = (preOreType,oreType,smelt) => {
		event.custom({
			type:'create:mixing',
			ingredients: [
				{item: preOreType},
				{item: 'kubejs:andesite_ball'}
			],
			results: [
				{item: 'kubejs:milled_' + oreType},
				{item: 'kubejs:milled_' + oreType, chance:0.5},
				{item: '8x kubejs:slag'},
				{item: 'kubejs:andesite_ball', chance:0.6}
			]
		})
		//&normal mill
		event.custom({
			type: "create:milling",
			ingredients: [{item:preOreType}],
			results: [{item:"kubejs:milled_" + oreType}]
		})
		event.smelting(smelt, "kubejs:milled_" + oreType)
	}
	event.blasting('6x kubejs:ash','kubejs:milled_coal')
	
	
	
	//andesite_ball crafting
	event.shapeless('kubejs:andesite_ball',
		[
			"create:andesite_alloy","minecraft:iron_pickaxe"
		]
	).damageIngredient('minecraft:iron_pickaxe', 5)
	event.custom({
		type: "create:milling",
		ingredients: [{item:"create:andesite_alloy"}],
		results: [{item:"kubejs:andesite_ball", chance: 0.8}]
	})
	
	for(let i = 0; i < oreTypes.length; i++) {
		millOre(preOreTypes[i],oreTypes[i],smelts[i])
	}
})
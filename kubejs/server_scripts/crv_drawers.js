ServerEvents.recipes(event => {
	const woodTypes = ['oak','dark_oak','spruce','birch','jungle','acacia','crimson','warped']
	
	//remove storagedrawers recipes
	let drawerRemove = (removeDrawerWoodType) => {
		event.remove({output: 'storagedrawers:' + removeDrawerWoodType + '_full_drawers_1'})
		event.remove({output: 'storagedrawers:' + removeDrawerWoodType + '_full_drawers_2'})
		event.remove({output: 'storagedrawers:' + removeDrawerWoodType + '_full_drawers_4'})
		event.remove({output: 'storagedrawers:' + removeDrawerWoodType + '_half_drawers_1'})
		event.remove({output: 'storagedrawers:' + removeDrawerWoodType + '_half_drawers_2'})
		event.remove({output: 'storagedrawers:' + removeDrawerWoodType + '_half_drawers_4'})
	}
	
	//storagedrawers crafting recipes
	let drawerChanges = (CreateDrawerWoodType) => {
		event.shaped( '3x storagedrawers:' + CreateDrawerWoodType + '_full_drawers_1' ,
			[
				"DAD",
				"ABA",
				"DCD"
			],
			{
				A: "create:cogwheel" ,
				C: "create:andesite_alloy" ,
				B: "create:item_vault" ,
				D: 'minecraft:' + CreateDrawerWoodType + '_planks'
			})
		event.shapeless( 'storagedrawers:' + CreateDrawerWoodType + '_full_drawers_2',
			[
				'storagedrawers:' + CreateDrawerWoodType + '_full_drawers_1'
			])
		event.shapeless( 'storagedrawers:' + CreateDrawerWoodType + '_full_drawers_4',
			[
				'storagedrawers:' + CreateDrawerWoodType + '_full_drawers_2'
			])
		event.shapeless( 'storagedrawers:' + CreateDrawerWoodType + '_full_drawers_1',
			[
				'storagedrawers:' + CreateDrawerWoodType + '_full_drawers_4'
			])	
		event.custom({
			type: 'create:cutting',
			ingredients: [{
				item: 'storagedrawers:' + CreateDrawerWoodType + '_full_drawers_1'
			}],
			results: [{
				item: 'storagedrawers:' + CreateDrawerWoodType + '_half_drawers_1',
				count: 2
			}]
		})
		event.custom({
			type: 'create:cutting',
			ingredients: [{
				item: 'storagedrawers:' + CreateDrawerWoodType + '_full_drawers_2'
			}],
			results: [{
				item: 'storagedrawers:' + CreateDrawerWoodType + '_half_drawers_2',
				count: 2
			}]
		})
		event.custom({
			type: 'create:cutting',
			ingredients: [{
				item: 'storagedrawers:' + CreateDrawerWoodType + '_full_drawers_4'
			}],
			results: [{
				item: 'storagedrawers:' + CreateDrawerWoodType + '_half_drawers_4',
				count: 2
			}]
		})
		event.shapeless('2x storagedrawers:' + CreateDrawerWoodType + '_full_drawers_1',
			[
				'2x storagedrawers:' + CreateDrawerWoodType + '_half_drawers_1'
			])
		event.shapeless('storagedrawers:' + CreateDrawerWoodType + '_full_drawers_2',
			[
				'2x storagedrawers:' + CreateDrawerWoodType + '_half_drawers_2'
			])
		event.shapeless('2x storagedrawers:' + CreateDrawerWoodType + '_full_drawers_4',
			[
				'2x storagedrawers:' + CreateDrawerWoodType + '_half_drawers_4'
			])
		event.custom({
				type: "create:mechanical_crafting",
				pattern: [
				" FEF ",
				"CDMDC"
				],
				key: {
					M: {item:'create:precision_mechanism'},
					E: {item:'create:electron_tube'},
					F: {item:'create:brass_funnel'},
					C: {item:'create:cogwheel'},
					D: {item:'storagedrawers:' + CreateDrawerWoodType + '_full_drawers_1'}
				},
				result: {
					item: 'storagedrawers:controller'
				}
			})			
	}
	
	//actually replace all the recipes
	for(let i = 0; i < woodTypes.length; i++) {
		drawerRemove(woodTypes[i])
	}
	event.remove({output:'storagedrawers:controller'})
	
	for(let i = 0; i < woodTypes.length; i++) {
		drawerChanges(woodTypes[i])
	}
	
	
	
}) 
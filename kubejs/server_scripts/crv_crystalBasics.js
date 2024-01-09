ServerEvents.recipes(event => {
	//cleanup for unwanted recipes
	event.remove({id: 'create:crushing/amethyst_block'})
	
	//amethyst lava filling
	event.custom({
		type:'create:filling',
		ingredients: [{item:'minecraft:amethyst_shard'},{fluid:'minecraft:lava', nbt:{} ,amount:100}],
		results: [{item:'minecraft:amethyst_block'}]
	})
	
	//amethyst dust crushing
	event.custom({
		type: 'create:crushing',
		ingredients:[
			{item:"minecraft:amethyst_block"}
		],
		results: [
			{item:"kubejs:amethyst_dust"},
			{item:"minecraft:amethyst_shard", chance: 0.9},
			{item:"minecraft:amethyst_shard", chance: 0.03}
		]
	})
	
	//crystal base mixing
	event.custom({
		type:'create:mixing',
		ingredients: [{item:"kubejs:amethyst_dust"},{item:'create:powdered_obsidian'}],
		results: [{item:'kubejs:crystal_base'}]
	})
	//crystal base charging
	event.custom({
		type:'create:mixing',
		ingredients: [{item:'kubejs:crystal_base'},{fluid:"create_enchantment_industry:experience", amount: 50}],
		results: [{item:'kubejs:charged_crystal_base'}],
		heatRequirement: "superheated"
	})
	
	//amethyst bud infusion
	event.custom({
		type:'create:mixing',
		ingredients: [
			{item:'minecraft:amethyst_block'},
			{item:'kubejs:charged_crystal_base'},
			{fluid:"kubejs:liquid_crystal_slurry", amount:100}
		],
		results: [{item:'minecraft:budding_amethyst'}]
	})
	
	//growth plate assembly
	event.custom({
		type:'create:sequenced_assembly',
		ingredient: {item:'create:sturdy_sheet'},
		transitionalItem: {item:'kubejs:incomplete_charged_crystal_growth_plate'},
		sequence: [
			{
				type: 'create:filling',
				ingredients:[
					{item:'kubejs:incomplete_charged_crystal_growth_plate'},
					{fluid:'create:potion', amount:10 , nbt: {"Bottle": "REGULAR" , "Potion":"minecraft:thick"}}
				],
				results:[{item:'kubejs:incomplete_charged_crystal_growth_plate'}]
				
			},
			{
				type: 'create:deploying',
				ingredients:[{item:'kubejs:incomplete_charged_crystal_growth_plate'},{item:'kubejs:charged_crystal_base'}],
				results:[{item:'kubejs:incomplete_charged_crystal_growth_plate'}]
				
			},
			{
				type: 'create:filling',
				ingredients:[
					{item:'kubejs:incomplete_charged_crystal_growth_plate'},
					{fluid:"minecraft:lava", amount:10, nbt:{}}
				],
				results:[{item:'kubejs:incomplete_charged_crystal_growth_plate'}]
				
			},
			{
				type: 'create:pressing',
				ingredients:[{item:'kubejs:incomplete_charged_crystal_growth_plate'}],
				results:[{item:'kubejs:incomplete_charged_crystal_growth_plate'}]
			}
			
		],
		results:[{item:'kubejs:charged_crystal_growth_plate'}],
		loops:3
		
	})
	
	//primed blaze rod
	event.custom({
		type:'create:compacting',
		ingredients:[
			{item: 'minecraft:blaze_rod'},{item: 'minecraft:blaze_rod'},{item: 'minecraft:blaze_rod'},
			{item: '4x minecraft:blaze_powder'},{item: '4x minecraft:blaze_powder'},{item: '4x minecraft:blaze_powder'},
			{fluid:'create:potion', amount:50 , nbt: {"Bottle": "REGULAR" , "Potion":"minecraft:regeneration"}}
		],
		results: [
			{item: 'kubejs:primed_blaze_rod'},
			{item: 'kubejs:primed_blaze_rod', chance: 0.5},
			{item: 'kubejs:primed_blaze_rod', chance: 0.1},
		]
	})
	
	//liquid crystal slurry
	event.custom({
		type:'create:mixing',
		ingredients:[
			{item:'kubejs:primed_blaze_rod'},
			{item:'create:powdered_obsidian'},
			{fluid:'minecraft:lava', amount: 250, nbt: {}},
			{fluid:'create:potion', amount: 500 , nbt: {"Bottle": "REGULAR" , "Potion":"minecraft:thick"}}
		],
		results: [
			{item: 'kubejs:slag'},
			{fluid:'kubejs:liquid_crystal_slurry', amount: 500},
			{item: 'kubejs:primed_blaze_rod', chance:0.8}
		],
		heatRequirement: 'heated'
	})
	
	//this one is weird, but its for hyperexp
	//create ink sacs from ink & leather
	event.custom({
		type:'create:sequenced_assembly',
		ingredient: {item:'minecraft:leather'},
		transitionalItem: {item:'kubejs:incomplete_ink_sac'},
		sequence: [
			{
				type: 'create:filling',
				ingredients:[
					{item:'minecraft:leather'},
					{fluid:'create_enchantment_industry:ink', amount:250, nbt:{}}
				],
				results:[{item:'kubejs:incomplete_ink_sac'}]
				
			},
			{
				type: 'create:deploying',
				ingredients:[{item:'kubejs:incomplete_ink_sac'},{item:'minecraft:leather'}],
				results:[{item:'kubejs:incomplete_ink_sac'}]
				
			},
			{
				type: 'create:pressing',
				ingredients:[{item:'kubejs:incomplete_ink_sac'}],
				results:[{item:'minecraft:ink_sac'}]
			}
			
		],
		results:[{item:'minecraft:ink_sac'}],
		loops:1
		
	})
})
//{fluid:'create:potion', amount:10 , nbt: {"Bottle": "REGULAR" , "Potion":"minecraft:thick"}}
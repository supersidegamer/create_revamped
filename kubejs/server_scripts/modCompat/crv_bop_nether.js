ServerEvents.recipes(event => {
	//bop rose quartz -> create quartz + exp
	event.custom({
		type: 'create:mixing',
		ingredients:[
			{item: 'biomesoplenty:rose_quartz_chunk'},
			{item: 'biomesoplenty:rose_quartz_chunk'},
			{item: 'biomesoplenty:rose_quartz_chunk'},
			{item: 'biomesoplenty:rose_quartz_chunk'},
			{item: 'biomesoplenty:rose_quartz_chunk'},
			{item: 'biomesoplenty:rose_quartz_chunk'},
			{item: 'biomesoplenty:rose_quartz_chunk'},
			{item: 'biomesoplenty:rose_quartz_chunk'},
			{fluid: 'minecraft:water', nbt: {}, amount: 100}	
		],
		results: [
			{item: 'create:rose_quartz'},
			{fluid: 'create_enchantment_industry:experience', amount: 5}
		]
	})
	
	//brimstone crushing
	event.custom({
		type: 'create:crushing',
		ingredients:[
			{item:"biomesoplenty:brimstone"}
		],
		results: [
			{item:"3x kubejs:raw_sulfur"},
			{item:"minecraft:iron_nugget", chance: 0.5},
			{item:"minecraft:gunpowder", chance: 0.1},
			{item:"minecraft:blaze_powder", chance: 0.05}
		]
	})
	
	//flesh compacting to blood
	event.custom({
		type:'create:compacting',
		ingredients: [{item:"biomesoplenty:flesh"}],
		results: [{fluid:"biomesoplenty:blood", amount: 5},{item:'minecraft:rotten_flesh', amount:1}]
	})
	event.custom({
		type:'create:compacting',
		ingredients: [{item:"biomesoplenty:porous_flesh"}],
		results: [{fluid:"biomesoplenty:blood", amount: 2},{item:'minecraft:rotten_flesh', amount:1},{item:'minecraft:string', amount:1}]
	})
	event.custom({
		type:'create:compacting',
		ingredients: [{item:"biomesoplenty:pus_bubble"}],
		results: [{fluid:"biomesoplenty:blood", amount: 20},{item:'minecraft:rotten_flesh', amount:1}]
	})
	event.custom({
		type:'create:compacting',
		ingredients: [{item:"biomesoplenty:eyebulb"}],
		results: [{fluid:"biomesoplenty:blood", amount: 5},{item:'minecraft:spider_eye', amount:1}]
	})
	
	//blood superheating to liquid exp
	event.custom({
		type:'create:mixing',
		ingredients: [{fluid:"biomesoplenty:blood", amount: 500},{item:'create:experience_nugget', amount:1}],
		results: [{fluid:"create_enchantment_industry:experience", amount: 25},{item:'create:experience_nugget', amount: 1, chance:0.8}],
		heatRequirement: "heated"
	})
	
	//rotten flesh to slime
	event.custom({
		type:'create:mixing',
		ingredients: [{fluid:"create_things_and_misc:slime", amount: 5},{item:'minecraft:rotten_flesh', amount:1}],
		results: [{fluid:"create_things_and_misc:slime", amount: 25}],
		heatRequirement: "heated"
	})
	
	//slime filling
	event.custom({
		type:'create:filling',
		ingredients: [{item:'minecraft:barrel'},{fluid:'create_things_and_misc:slime', nbt:{} ,amount:900}],
		results: [{item:'minecraft:slime_block'}]
	})
})
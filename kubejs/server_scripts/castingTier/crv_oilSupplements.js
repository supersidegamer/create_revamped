ServerEvents.recipes(event => {
	//ash+honey = resin
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{fluid: 'create:honey', amount: 100},
			{item: 'kubejs:ash'}  // Added ash as a required ingredient
		],
		results: [
			{item: 'kubejs:resin'}
		],
		heatRequirement: 'heated'  // Recipe now requires heat
	})

	//egg haunting for sulfur
	event.custom({
		type:"create:haunting",
		ingredients:[{item:"minecraft:egg"}],
		results:[{item:'kubejs:raw_sulfur'}]
	})
	
	//smelt bark for ash
	event.smelting("kubejs:ash","farmersdelight:tree_bark")
	event.smelting("kubejs:ash",'#minecraft:saplings')
	
	//kerosene lamps
	event.custom({
		type:'create:filling',
		ingredients: [
			{fluid:"kubejs:kerosene", amount: 144},
			{item: "minecraft:iron_ingot"}
		],
		results: [
			{item:'minecraft:lantern',count: 3}
		]
	})
	
	//refined fuel <-> fuel block 
})
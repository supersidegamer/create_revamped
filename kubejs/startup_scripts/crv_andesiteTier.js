StartupEvents.registry('item', event => {
	//Andesite grinding Ball
	event.create('andesite_ball')
		.displayName('Andesite Grinding Ball')
		.maxStackSize(32)
		//.maxDamage(16)
		
	//milled ores
	event.create('milled_iron')
		.displayName('Milled Raw Iron')
	event.create('milled_gold')
		.displayName('Milled Raw Gold')
	event.create('milled_copper')
		.displayName('Milled Raw Copper')
	event.create('milled_zinc')
		.displayName('Milled Raw Zinc')
	event.create('milled_coal')
		.displayName('Milled Coal')
		.burnTime(3200)
})
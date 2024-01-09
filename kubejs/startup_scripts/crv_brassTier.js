StartupEvents.registry('item', event => {
	//Andesite grinding Ball
	event.create('brass_ball')
		.displayName('Brass Grinding Ball')
		.maxStackSize(32)
		//.maxDamage(16)
		
	//crushed coal
	event.create('crushed_raw_coal')
		.displayName('Crushed Coal')
		.burnTime(6400)
})
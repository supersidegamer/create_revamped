StartupEvents.registry('item', event => {
	//amethyst_dust
	event.create('amethyst_dust')
		.displayName('Amethyst Dust')
	
	//crystal_base
	event.create('crystal_base')
		.displayName('Crystal Base')
		
	//charged_crystal_base
	event.create('charged_crystal_base')
		.displayName('Charged Crystal Base').glow(true)
		
	//charged_crystal_growth_plate
	event.create('charged_crystal_growth_plate')
		.displayName('Charged Grow Plate')
		.glow(true)
		
	//primed blaze rod
	event.create('primed_blaze_rod')
		.displayName('Primed Blaze Rod')
		
	//used items
	//echo plate
	event.create('echo_plate')
		.displayName('Echo Plate')
		
		
	//sequenced assembly transitional items
	//incomplete_charged_crystal_growth_plate
	event.create('incomplete_charged_crystal_growth_plate')
		.displayName('Compressed Crystal Base')
		
	//incomplete_ink_sac
	event.create('incomplete_ink_sac')
		.displayName('Inked Flesh')
		
	//coated crystal plate
	event.create('coated_crystal_plate')
		.displayName('Coated Crystal Plate')
		
})

StartupEvents.registry('fluid', event => {
	//liquid crystal slurry
	event.create('liquid_crystal_slurry')
		.displayName('Crystal Slurry')
		.noBucket()
		.noBlock()
		.stillTexture('kubejs:block/liquid_crystal_slurry')
})
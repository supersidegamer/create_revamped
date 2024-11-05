StartupEvents.registry('item', event => {	
	//ash
	event.create("ash")
		.displayName("Ash")
		
	//sulfur
	event.create("raw_sulfur")
		.displayName("Raw Sulfur")
		
	//resin
	event.create("resin")
		.displayName("Resin")
		
	//refined fuel
	event.create("refined_fuel")
		.displayName("Refined Fuel")
		.burnTime(12800)
		.tooltip("Highly refined fuel- it lasts for an entire stack of items")
})

StartupEvents.registry('block', event => {
	//ash block
	event.create('ash_block')
		.displayName("Ash Block")
		.material("sand")
		.soundType('sand')
		.texture("up", 'kubejs:block/ash_block/ash_block_top').texture('down','kubejs:block/ash_block/ash_block_top')
		.texture("north", 'kubejs:block/ash_block/ash_block_side').texture("east", 'kubejs:block/ash_block/ash_block_side').texture("south", 'kubejs:block/ash_block/ash_block_side').texture("west", 'kubejs:block/ash_block/ash_block_side')
		//.particle("kubejs:block/ash_block/ash_block_side")
		//.model('kubejs:block/ash_block.json')
	
	//fuel block
	event.create('refined_fuel_block')
		.displayName("Block of Refined Fuel")
		.textureAll('kubejs:block/ash_block/ash_block_top')
		.soundType('stone')
		.item(i => {
			i.burnTime(115200)
	})
})

StartupEvents.registry('fluid', event => {	
	//kerosene
	event.create('kerosene')
		.displayName('Kerosene')
		.stillTexture('kubejs:block/kerosene/kerosene_still')
})
// Redeclare the oreTypes list
let oreTypes = ['iron', 'gold', 'copper', 'zinc', 'coal', 'brass'];

// Function to add dusted ores
function addDustedOres(event, ore) {
    //let oreName = ore === 'coal' ? 'kubejs:crushed_raw_coal' : 'create:crushed_raw_' + ore;
    let itemName = ore === 'coal' ? 'powdered_coal' : 'powdered_' + ore;

    event.create(itemName)
        .displayName(ore.charAt(0).toUpperCase() + ore.slice(1)+ ' Dust')
        .texture('kubejs:item/powdered_ores/powdered_' + ore);
}

StartupEvents.registry('item', event => {
	//Brass grinding Ball
	event.create('brass_ball')
		.displayName('Brass Grinding Ball')
		.maxStackSize(32)
		.texture("kubejs:item/processing/brass_ball")
		//.maxDamage(16)
		
	oreTypes.forEach(ore => {
        addDustedOres(event, ore);
    });
	
	//remelting catalyst, so that we cant just melt ingots & nuggies without advancing correctly
	event.create('melt_catalyst')
		.displayName('Remelting Anode')
		.texture("kubejs:item/processing/melt_catalyst")
		
	//casting templates
	event.create('sheet_template')
		.displayName('Sheet Casting Template')
		.maxStackSize(128)
		.texture("kubejs:item/processing/sheet_template")
	event.create('ingot_template')
		.displayName('Ingot Casting Template')
		.maxStackSize(128)
		.texture("kubejs:item/processing/ingot_template")
	event.create('nugget_template')
		.displayName('Nugget Casting Template')
		.maxStackSize(128)
		.texture("kubejs:item/processing/nugget_template")
	event.create('armor_template')
		.displayName('Armor Set Casting Template')
		.maxStackSize(128)
		.texture("kubejs:item/processing/armor_template")
		
	//special templates, used for advanced recipes
	event.create('ball_template')
		.displayName('Ball Casting Template')
		.maxStackSize(128)
		.texture("kubejs:item/processing/ball_template")
})

StartupEvents.registry('block', event => {	
	//dropcast basin
	event.create('cast_basin')
		.displayName("Dropcasting Basin")
		.soundType('sand')
		//.texture("up", 'kubejs:block/ash_block/ash_block_top').texture('down','kubejs:block/ash_block/ash_block_top')
		//.texture("north", 'kubejs:block/ash_block/ash_block_side').texture("east", 'kubejs:block/ash_block/ash_block_side').texture("south", 'kubejs:block/ash_block/ash_block_side').texture("west", 'kubejs:block/ash_block/ash_block_side')
		//.particle("kubejs:block/ash_block/ash_block_side")
		//.model('kubejs:block/ash_block.json')
})

StartupEvents.registry('fluid', event => {	
	//molten metals
	const metalTypes = ['iron','gold','copper','zinc','brass']
	const metalColors = [0xC9D3DA,0xFFCE77,0xFFA477,0x76F2F2,0xFF9136];
	let moltenMetal = (metalType, metalColor) => {
		event.create('molten_' + metalType)
			.displayName('Molten ' + metalType)
			.thickTexture(metalColor)
			//.bucketColor(0xFF0000)
			//.stillTexture('kubejs:block/molten_metal/' + metalType + '_still')
			//.flowingTexture('kubejs:block/molten_metal/' + metalType + '_flowing')
			.noBucket()
			//.tagFluid("minecraft:lava")
	}
	for(let i = 0; i < metalTypes.length; i++) {
		moltenMetal(metalTypes[i],metalColors[i])
	}
})


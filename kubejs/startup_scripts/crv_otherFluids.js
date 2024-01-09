StartupEvents.registry('fluid', event => {
	//kerosene
	event.create('kerosene')
		.displayName('Kerosene')
		.stillTexture('kubejs:block/kerosene/kerosene_still')
	
	//molten metals
	const metalTypes = ['iron','gold','copper','zinc','brass']
	let moltenMetal = (metalType) => {
		event.create('molten_' + metalType)
			.displayName('Molten ' + metalType)
			.thickTexture(0xFF0000)
			.bucketColor(0xFF0000)
			//.stillTexture('kubejs:block/molten_metal/' + metalType + '_still')
			//.flowingTexture('kubejs:block/molten_metal/' + metalType + '_flowing')
			.noBucket()
	}
	for(let i = 0; i < metalTypes.length; i++) {
		moltenMetal(metalTypes[i])
	}
})

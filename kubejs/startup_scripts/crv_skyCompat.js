StartupEvents.registry('item', event => {	
	//flesh strips for leather + string
	event.create('leather_strip')
		.displayName('Leather Strip')
	event.create('incomplete_leather_strip')
		.displayName('Processed Flesh')

})
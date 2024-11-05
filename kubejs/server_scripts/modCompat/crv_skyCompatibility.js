ServerEvents.recipes(event => {
	//leather strips
	event.custom({
		type:'create:sequenced_assembly',
		ingredient: {item:'minecraft:rotten_flesh'},
		transitionalItem: {item:'kubejs:incomplete_leather_strip'},
		sequence: [
			{
				type: 'create:filling',
				ingredients:[
					{item:'minecraft:rotten_flesh'},
					{fluid:'create:honey', amount:50, nbt:{}}
				],
				results:[{item:'kubejs:incomplete_leather_strip'}]
				
			},
			{
				type: 'create:pressing',
				ingredients:[{item:'kubejs:incomplete_leather_strip'}],
				results:[{item:'kubejs:incomplete_leather_strip'}]
				
			},
			{
				type: 'create:filling',
				ingredients:[
					{item:'kubejs:incomplete_leather_strip'},
					{fluid:'minecraft:water', amount:50, nbt:{}}
				],
				results:[{item:'kubejs:incomplete_leather_strip'}]
				
			},	
			{
				type: 'create:cutting',
				ingredients:[
					{item:'kubejs:incomplete_leather_strip'}
				],
				results:[{item:'4x kubejs:leather_strip'}]
			}
		],
		results:[{item:'4x kubejs:leather_strip'}],
		loops:1
	})
	event.shapeless('2x minecraft:rabbit_hide','4x kubejs:leather_strip')
})
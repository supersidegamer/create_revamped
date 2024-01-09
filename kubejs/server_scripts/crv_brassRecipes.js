ServerEvents.recipes(event => {
	
	//remove the fan recipe and replace it with brass
	event.remove({id:'create:crafting/kinetics/encased_fan'})
	event.shaped('create:encased_fan',
		[
			"cgc",
			"csc",
			"bpb"
		],
		{
			c: 'create:brass_casing',
			g: 'create:cogwheel',
			s: 'create:shaft',
			b: 'create:brass_bars',
			p: 'create:propeller'
		}
	)
	
	//remove windmill bearing and replace it with brass
	event.remove({id:'create:crafting/kinetics/windmill_bearing'})
	event.shaped('create:windmill_bearing',
		[
			"www",
			"gcg",
			" s "
		],
		{
			c: 'create:brass_casing',
			g: 'create:cogwheel',
			s: 'create:shaft',
			w: '#minecraft:wooden_slabs'
		}
	)
	
	//remove raw crushing & add milled crushing
	const oreTypes = ['iron','gold','copper','zinc']
	for(let i = 0; i < oreTypes.length; i++) {
		event.remove({id:"create:crushing/raw_" + oreTypes[i]})
		event.remove({id:"create:crushing/raw_" + oreTypes[i] + "_block"})
		
		event.custom({
			type:"create:crushing",
			ingredients: [{item:"kubejs:milled_" + oreTypes[i]}],
			results: [{item:"create:crushed_raw_" + oreTypes[i]},{item:"2x create:crushed_raw_" + oreTypes[i], chance: 0.5}]
		})
	}
	//add back coal, for fun
	event.custom({
			type:"create:crushing",
			ingredients: [{item:"kubejs:milled_coal"}],
			results: [{item:"kubejs:crushed_raw_coal"},{item:"2x kubejs:crushed_raw_coal", chance: 0.5}]
	})
})
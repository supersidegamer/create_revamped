// Function to modify crushing recipes for metals
function modifyCrushingRecipes(event, metal) {
    // Remove existing raw crushing recipes
    event.remove({ id: 'create:crushing/raw_' + metal });
    event.remove({ id: 'create:crushing/raw_' + metal +'_block' });

    // Add new crushing recipes with milled items
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: 'kubejs:milled_' + metal }],
        results: [
            { item: 'create:crushed_raw_' + metal},
            { item: 'create:crushed_raw_' + metal , chance: 0.5 }
        ]
    });
}

// Metal types array
const metalTypes = ['iron', 'gold', 'copper', 'zinc'];
const oreTypes = ['iron', 'gold', 'copper', 'zinc','coal'];

ServerEvents.recipes(event => {
	//crushed metal
	metalTypes.forEach(metal => {
        modifyCrushingRecipes(event, metal);
    });
	//and coal
	event.custom({
        type: "create:crushing",
        ingredients: [{ item: "kubejs:milled_coal" }],
        results: [
            { item: "kubejs:crushed_raw_coal" },
            { item: "2x kubejs:crushed_raw_coal", chance: 0.5 }
        ]
    });
	
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
	
	
	
	
})
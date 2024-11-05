//dusting
function addDustingRecipes(event, ore) {
	let crushedName = ore === 'coal' ? 'kubejs:crushed_raw_coal' : 'create:crushed_raw_' + ore;
    let dustedName = 'kubejs:powdered_' + ore;
    // Add new mixing recipes with dusted items
    event.custom({
        type: "create:mixing",
        ingredients: [{ item: crushedName}, { item: 'kubejs:brass_ball' }],
        results: [
            { item: dustedName },
            { item: dustedName, chance: 0.5 },
			{ item: 'kubejs:brass_ball', chance: 0.8}
        ]
    });
}

function addMeltRecipes(event, metal) {
	let ingotName = metal === 'zinc' ? 'create:zinc_ingot' : (metal === 'brass' ? 'create:brass_ingot' : 'minecraft:' + metal + '_ingot');
    let dustedName = 'kubejs:powdered_' + metal;
	let moltenName = 'kubejs:molten_' + metal;
    // Add new melting recipes with dusted items
    event.custom({
        type: "create:mixing",
        ingredients: [{item: dustedName}],
        results: [
            { fluid: moltenName, amount: 144 }
        ],
		heatRequirement: "superheated"
    })
	event.custom({
		type: 'create:mixing',
		ingredients:[{item: ingotName},{item: "kubejs:melt_catalyst"}],
		results: [
			{fluid: moltenName, amount: 144},
			{item: "kubejs:melt_catalyst", chance: 0.90}
		],
		heatRequirement: "superheated"
	})
}

function addIngotRecipes(event, metal) {
	let moltenName = 'kubejs:molten_' + metal;
	let ingotName = metal === 'zinc' ? 'create:zinc_ingot' : (metal === 'brass' ? 'create:brass_ingot' : 'minecraft:' + metal + '_ingot');
	let nuggetName = metal === 'copper' ? 'create:copper_nugget' : (metal === 'zinc' ? 'create:zinc_nugget' : (metal === 'brass' ? 'create:brass_nugget' : 'minecraft:' + metal + '_nugget'));
	let blockName = metal === 'zinc' ? 'create:zinc_block' : (metal === 'brass' ? 'create:brass_block' : 'minecraft:' + metal + '_block');
	//ingot making
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: {item: 'kubejs:ingot_template'},
		transitionalItem: {item: 'kubejs:ingot_template'},
		sequence: [
			{
				type: 'create:filling',
				ingredients: [{item: 'kubejs:ingot_template'},{fluid: moltenName, amount:144}],
				results: [{item: 'kubejs:ingot_template'}]
			},
			{
				type: 'create:pressing',
				ingredients: [{item: 'kubejs:ingot_template'}],
				results: [{item: 'kubejs:ingot_template'}]
			}
		],
		results: [{item: ingotName}],
		loops:1
	})
	
	//nugget making
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: {item: 'kubejs:nugget_template'},
		transitionalItem: {item: 'kubejs:nugget_template'},
		sequence: [
			{
				type: 'create:filling',
				ingredients: [{item: 'kubejs:nugget_template'},{fluid: moltenName, amount:16}],
				results: [{item: 'kubejs:nugget_template'}]
			},
			{
				type: 'create:pressing',
				ingredients: [{item: 'kubejs:nugget_template'}],
				results: [{item: 'kubejs:nugget_template'}]
			}
		],
		results: [{item: nuggetName}],
		loops:1
	}),
	
	//block making
	event.custom({
		type: 'create:compacting',
		ingredients: [{fluid: moltenName, amount: 1296}],
		results: [{item: blockName}]
	})
}
// Metal types array
const meltTypes = ['iron', 'gold', 'copper', 'zinc', 'brass'];
const dustOres = ['iron', 'gold', 'copper', 'zinc', 'coal'];

ServerEvents.recipes(event => {
	//melt + cast time for everything :)
	meltTypes.forEach(metal => {
        addMeltRecipes(event, metal);
		addIngotRecipes(event, metal);
    });
	
	//powdered :)
	dustOres.forEach(ore => {
        addDustingRecipes(event, ore);
    });
	
	//casting balls ( ͡° ͜ʖ ͡°)
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: {item: 'kubejs:ball_template'},
		transitionalItem: {item: 'kubejs:ball_template'},
		sequence: [
			{
				type: 'create:filling',
				ingredients: [{item: 'kubejs:ball_template'},{fluid: "kubejs:molten_brass", amount:144}],
				results: [{item: 'kubejs:ball_template'}]
			},
			{
				type: 'create:pressing',
				ingredients: [{item: 'kubejs:ball_template'}],
				results: [{item: 'kubejs:ball_template'}]
			}
		],
		results: [{item: "kubejs:brass_ball"}],
		loops: 1
	})
	
	//casting sheets
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: {item: 'kubejs:sheet_template'},
		transitionalItem: {item: 'kubejs:sheet_template'},
		sequence: [
			{
				type: 'create:filling',
				ingredients: [{item: 'kubejs:sheet_template'},{fluid: "kubejs:molten_iron", amount:144}],
				results: [{item: 'kubejs:sheet_template'}]
			},
			{
				type: 'create:pressing',
				ingredients: [{item: 'kubejs:sheet_template'}],
				results: [{item: 'kubejs:sheet_template'}]
			}
		],
		results: [{item: "create:iron_sheet"}],
		loops: 1
	})
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: {item: 'kubejs:sheet_template'},
		transitionalItem: {item: 'kubejs:sheet_template'},
		sequence: [
			{
				type: 'create:filling',
				ingredients: [{item: 'kubejs:sheet_template'},{fluid: "kubejs:molten_copper", amount:144}],
				results: [{item: 'kubejs:sheet_template'}]
			},
			{
				type: 'create:pressing',
				ingredients: [{item: 'kubejs:sheet_template'}],
				results: [{item: 'kubejs:sheet_template'}]
			}
		],
		results: [{item: "create:copper_sheet"}],
		loops: 1
	})
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: {item: 'kubejs:sheet_template'},
		transitionalItem: {item: 'kubejs:sheet_template'},
		sequence: [
			{
				type: 'create:filling',
				ingredients: [{item: 'kubejs:sheet_template'},{fluid: "kubejs:molten_brass", amount:144}],
				results: [{item: 'kubejs:sheet_template'}]
			},
			{
				type: 'create:pressing',
				ingredients: [{item: 'kubejs:sheet_template'}],
				results: [{item: 'kubejs:sheet_template'}]
			}
		],
		results: [{item: "create:brass_sheet"}],
		loops: 1
	})
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: {item: 'kubejs:sheet_template'},
		transitionalItem: {item: 'kubejs:sheet_template'},
		sequence: [
			{
				type: 'create:filling',
				ingredients: [{item: 'kubejs:sheet_template'},{fluid: "kubejs:molten_gold", amount:144}],
				results: [{item: 'kubejs:sheet_template'}]
			},
			{
				type: 'create:pressing',
				ingredients: [{item: 'kubejs:sheet_template'}],
				results: [{item: 'kubejs:sheet_template'}]
			}
		],
		results: [{item: "create:golden_sheet"}],
		loops: 1
	})
	
})

ServerEvents.tags('fluid', event => {
	for(let i = 0; i < meltTypes.length; i++) {
		//console.info('kubejs:molten_' + meltTypes[i]);
		event.add('minecraft:lava', 'kubejs:molten_' + meltTypes[i])
	}
})
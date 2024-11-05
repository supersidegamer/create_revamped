StartupEvents.registry('item', event => {		
	//slag
	event.create("slag")
		.displayName("slag")
		
	//bound fletching
	event.create("bound_fletching")
		.displayName("Bound Fletching")
})

StartupEvents.registry('block', event => {
	//slag block
	event.create('slag_block')
		.displayName('Slag Block')
		.material('stone')
		.soundType('gravel')
		.hardness(2.5)
		.resistance(50)
		.speedFactor(0.8)
		.texture("up", 'kubejs:block/slag_block/slag_block_top').texture('down','kubejs:block/slag_block/slag_block_top')
		.texture("north", 'kubejs:block/slag_block/slag_block_side').texture("east", 'kubejs:block/slag_block/slag_block_side').texture("south", 'kubejs:block/slag_block/slag_block_side').texture("west", 'kubejs:block/slag_block/slag_block_side')
		//.particle("kubejs:block/slag_block/slag_block_side")
		//.model('kubejs:block/slag_block.json')		
})
/*
ServerEvents.tags('item', event => {
	let leaves = ["minecraft:oak_leaves","minecraft:spruce_leaves","minecraft:birch_leaves","minecraft:jungle_leaves","minecraft:acacia_leaves","minecraft:dark_oak_leaves","minecraft:mangrove_leaves","minecraft:cherry_leaves","minecraft:azalea_leaves","minecraft:flowering_azalea_leaves"]
	let leavesAdd = (leaf) => {
		event.add('forge:leaves', leaf)
	}
	for(let i = 0; i < leaves.length; i++) {
		leavesAdd(leaves[i])
	}
})
*/
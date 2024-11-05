ServerEvents.recipes(event => {
	//ok first off we need a way to make the initial setup
	//remelting catalyst
	event.shapeless('kubejs:melt_catalyst', [
	  'minecraft:gold_nugget',
	  '2x minecraft:crying_obsidian',
	  'minecraft:dragon_breath',
	])
	
	//now casting template making
	event.shapeless('8x kubejs:sheet_template', [
		'8x kubejs:resin',
		'create:iron_sheet'
	]).keepIngredient('create:iron_sheet')
	event.shapeless('8x kubejs:ingot_template', [
		'8x kubejs:resin',
		'minecraft:iron_ingot'
	]).keepIngredient('minecraft:iron_ingot')
	event.shapeless('8x kubejs:nugget_template', [
		'8x kubejs:resin',
		'minecraft:iron_nugget'
	]).keepIngredient('minecraft:iron_nugget')
	event.shapeless('kubejs:armor_template',
	[
		'#forge:armors/helmets',
		'#forge:armors/chestplates',
		'#forge:armors/leggings',
		'#forge:armors/boots',
		'8x kubejs:resin'
	])
	
	//ball template making
	event.shapeless('8x kubejs:ball_template', [
		'8x kubejs:resin',
		'kubejs:andesite_ball'
	])
})
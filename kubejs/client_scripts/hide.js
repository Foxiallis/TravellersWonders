// priority: 0

JEIEvents.hideItems(event => {
	event.hide([
		'createdeco:cast_iron_ingot',
		'graveyard:dark_iron_block',
		'graveyard:dark_iron_ingot',
		'immersiveengineering:armor_steel_head',
        'immersiveengineering:armor_steel_chest',
        'immersiveengineering:armor_steel_legs',
        'immersiveengineering:armor_steel_feet',
        'immersiveengineering:pickaxe_steel',
        'immersiveengineering:axe_steel',
        'immersiveengineering:shovel_steel',
        'immersiveengineering:hoe_steel',
        'immersiveengineering:sword_steel'
	])
})

JEIEvents.removeCategories(event => {
	[
	'create:draining',
	'create:automatic_shapeless',
	'create:automatic_shaped',
	'create:automatic_packaging',
	'create:automatic_packing'
	].forEach((catid) => {event.remove(catid)})
})



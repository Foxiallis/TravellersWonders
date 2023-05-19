ServerEvents.recipes(event => {
    [
        //Dark iron unification
        'born_in_chaos_v1:pileof_dark_metal_d',
        'born_in_chaos_v1:pileof_dark_metal_k2',
        'graveyard:dark_iron_ingot',
        'graveyard:dark_iron_block',

        //Duplicate items
        'immersiveengineering:crafting/armor_steel_head',
        'immersiveengineering:crafting/armor_steel_chest',
        'immersiveengineering:crafting/armor_steel_legs',
        'immersiveengineering:crafting/armor_steel_feet',
        'immersiveengineering:crafting/pickaxe_steel',
        'immersiveengineering:crafting/axe_steel',
        'immersiveengineering:crafting/shovel_steel',
        'immersiveengineering:crafting/hoe_steel',
        'immersiveengineering:crafting/sword_steel'
    ].forEach((recipeID) => event.remove({id: recipeID}));
});
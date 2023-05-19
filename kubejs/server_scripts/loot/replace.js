LootJS.modifiers(event => {
    [
        ['createdeco:cast_iron_ingot', 'createbigcannons:cast_iron_ingot'],
        ['graveyard:dark_iron_ingot', 'born_in_chaos_v1:dark_metal_ingot'],
        ['immersiveengineering:pickaxe_steel', 'alloyed:steel_pickaxe'],
        ['immersiveengineering:axe_steel', 'alloyed:steel_axe'],
        ['immersiveengineering:shovel_steel', 'alloyed:steel_shovel'],
        ['immersiveengineering:hoe_steel', 'alloyed:steel_hoe'],
        ['immersiveengineering:sword_steel', 'alloyed:steel_sword'],
    ].forEach((pair) => event.addLootTableModifier(/.*/)
        .replaceLoot(pair[0], pair[1]))
})
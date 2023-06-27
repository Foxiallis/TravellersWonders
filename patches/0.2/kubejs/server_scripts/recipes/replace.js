// Listen to the event that allows modifying recipes
ServerEvents.recipes(event => {
    //Create cast iron
    event.replaceInput({}, 'createdeco:cast_iron_ingot', 'createbigcannons:cast_iron_ingot');

    //Dark metal
    event.replaceInput({}, 'graveyard:dark_iron_ingot', 'born_in_chaos_v1:dark_metal_ingot');

    ['helmet', 'chestplate', 'leggings', 'boots'].forEach((armor) => {
      event.replaceInput({output: `born_in_chaos_v1:dark_metal_armor_${armor}`}, `minecraft:netherite_${armor}`, `deeperdarker:warden_${armor}`)
      event.replaceInput({output: `cataclysm:ignitium_${armor}`}, `minecraft:netherite_${armor}`, `born_in_chaos_v1:dark_metal_armor_${armor}`)
      event.replaceInput({output: `majruszsdifficulty:enderium_${armor}`}, `minecraft:netherite_${armor}`, `born_in_chaos_v1:dark_metal_armor_${armor}`)
    });
    
    event.replaceInput({output: 'cataclysm:monstrous_helm'}, 'minecraft:netherite_helmet', 'born_in_chaos_v1:dark_metal_armor_helmet')
    event.replaceInput({output: 'youre_seeing_dungeons:hellmetium_helmet'}, 'minecraft:netherite_helmet', 'born_in_chaos_v1:dark_metal_armor_helmet')

    event.replaceInput({not: {id: 'upgrade_aquatic:trident'}}, 'upgrade_aquatic:thrasher_tooth', '#forge:tooth')
  });
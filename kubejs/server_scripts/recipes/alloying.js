ServerEvents.recipes(event => {

    const alloy = (output, inputs) => {
        // Create
        event.recipes.createMixing(output, inputs).heated();
        // Immersive Engineering & Mekanism
        if (inputs.length == 2) {
          event.recipes.immersiveengineeringAlloy(output, inputs[0], inputs[1]);
        }
      };

    [
        'create:mixing/brass_ingot',
        'immersiveengineering:alloysmelter/brass',
        'immersiveengineering:alloysmelter/bronze',
        'immersiveengineering:alloysmelter/constantan',
        'immersiveengineering:alloysmelter/electrum',
      ].forEach((recipeID) => event.remove({id: recipeID}));
    
      // Minecraft
      alloy('minecraft:netherite_ingot', [
        'minecraft:netherite_scrap', 
        'minecraft:netherite_scrap', 
        'minecraft:netherite_scrap', 
        'minecraft:netherite_scrap', 
        '#forge:ingots/gold',
        '#forge:ingots/gold',
        '#forge:ingots/gold',
        '#forge:ingots/gold'
    ]);
    
      // Create
      alloy('2x create:brass_ingot', ['#forge:ingots/copper', '#forge:ingots/zinc']);
      
      // Immersive Engineering
      alloy('2x immersiveengineering:ingot_constantan', ['#forge:ingots/copper', '#forge:ingots/nickel']);
      alloy('2x immersiveengineering:ingot_constantan', ['#forge:dusts/copper', '#forge:dusts/nickel']);
      alloy('2x immersiveengineering:ingot_electrum', ['#forge:ingots/gold', '#forge:ingots/silver']);
      alloy('2x immersiveengineering:ingot_electrum', ['#forge:dusts/gold', '#forge:dusts/silver']);

      //Other
      alloy('art_of_forging:forged_steel_ingot', [
        'tetra:metal_scrap', 
        'tetra:metal_scrap', 
        'tetra:metal_scrap', 
        'tetra:metal_scrap', 
        'minecraft:netherite_scrap', 
        'minecraft:netherite_scrap', 
        'minecraft:iron_ingot',
        'minecraft:iron_ingot'
    ])
})
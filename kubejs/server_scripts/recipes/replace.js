// Listen to the event that allows modifying recipes
ServerEvents.recipes(event => {
    //Create cast iron
    event.replaceInput({}, 'createdeco:cast_iron_ingot', 'createbigcannons:cast_iron_ingot')

    //Dark metal
    event.replaceInput({}, 'graveyard:dark_iron_ingot', 'born_in_chaos_v1:dark_metal_ingot')
  });
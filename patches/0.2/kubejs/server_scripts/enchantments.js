// function removeEnchantment (item, name) 
// {
//     if (item.hasEnchantment(name, 1)) {
//         let nbt = item.getNbt()
//         let ench = nbt.get("Enchantments").filter(item => item.id != name)
//         nbt.remove("Enchantments")
//         nbt = nbt.merge({Enchantments: ench})
//         item.setNbt(nbt)
//     }
// }

// ItemEvents.firstLeftClicked(/.*/, event => {
//     removeEnchantment(event.item, "the_bumblezone:neurotoxins")
//     removeEnchantment(event.item, "ensorcellation:soulbound")
// })

// ItemEvents.firstRightClicked(/.*/, event => {
//     removeEnchantment(event.item, "the_bumblezone:neurotoxins")
//     removeEnchantment(event.item, "ensorcellation:soulbound")
// })

// PlayerEvents.inventoryChanged(/.*/, event => {
//     removeEnchantment(event.item, "the_bumblezone:neurotoxins")
//     removeEnchantment(event.item, "ensorcellation:soulbound")
// })
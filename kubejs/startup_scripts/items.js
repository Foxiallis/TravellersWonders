StartupEvents.registry('item', event => {
    event.create('eoe').displayName('Essence of Everything')
})

ItemEvents.modification(event => {
    ['helmet', 'chestplate', 'leggings', 'boots'].forEach((armor) => {
        event.modify(`deeperdarker:warden_${armor}`, item => {
            item.armorKnockbackResistance = 0.1
        });
        event.modify(`born_in_chaos_v1:dark_metal_armor_${armor}`, item => {
            item.armorToughness = 4;
            item.armorKnockbackResistance = 0.2;
            //TODO reduce armor
        });
        event.modify(`cataclysm:ignitium_${armor}`, item => {
            item.armorToughness = 5;
            item.armorKnockbackResistance = 0.3;
        });
        event.modify(`majruszsdifficulty:enderium_${armor}`, item => {
            item.armorToughness = 5;
            item.armorKnockbackResistance = 0.3;
            if (armor == 'chestplate') {
                item.armorProtection = 10;
            }
            else if (armor == 'leggings') {
                item.armorProtection = 7;
            }
        });
    });

    event.modify('cataclysm:incinerator', item => {
        item.attackDamage = 14
    })
})
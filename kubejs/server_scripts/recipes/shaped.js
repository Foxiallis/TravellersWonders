ServerEvents.recipes(event => {
    event.shaped('born_in_chaos_v1:pileof_dark_metal', [
        'DDD',
        'DCD',
        'DDD'
    ], {
        D: 'born_in_chaos_v1:pieceofdarkmetal',
        C: 'graveyard:corruption'
    })

    event.shaped('createaddition:diamond_grit_sandpaper', [
        ' D ',
        'DPD',
        ' D '
    ], {
        D: 'spelunkery:rough_diamond_shard',
        P: 'minecraft:paper'
    })

    event.shaped('enigmaticlegacy:the_cube', [
        'ABC',
        'DEF',
        'GBI'
    ], {
        A: 'enigmaticlegacy:golem_heart',
        C: 'enigmaticlegacy:eye_of_nebula',
        D: 'enigmaticlegacy:blazing_core',
        E: 'kubejs:eoe',
        F: 'enigmaticlegacy:ocean_stone',
        G: 'enigmaticlegacy:void_pearl',
        I: 'enigmaticlegacy:angel_blessing',
        B: 'enigmaticlegacy:cosmic_heart'
    })

    event.shaped('tempad:tempad', [
        'QQQ',
        'CSG',
        'QQQ'
    ], {
        Q: 'minecraft:quartz',
        C: 'minecraft:clock',
        G: 'minecraft:glowstone',
        S: 'minecraft:nether_star'
    })
});
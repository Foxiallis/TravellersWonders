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
});
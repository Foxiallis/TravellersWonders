ServerEvents.tags('item', event => {
    event.add('forge:tooth', /.*tooth.*/);

    [
        'vinery:red_grape',
        'vinery:white_grape',
        'vinery:savanna_grapes_red',
        'vinery:taiga_grapes_red',
        'vinery:jungle_grapes_red',
        'vinery:savanna_grapes_white',
        'vinery:taiga_grapes_white',
        'vinery:jungle_grapes_white'
    ].forEach((itemID) => event.add('forge:fruits/grape', itemID));

    event.add('forge:fruits/cherry', 'vinery:cherry')
    event.add('forge:fruits/cherry', 'vinery:cherry')
    event.add('forge:crops/coconut', 'ecologics:coconut_slice')
})
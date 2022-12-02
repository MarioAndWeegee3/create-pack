ServerEvents.recipes(event => {
    event.shaped('4x minecraft:chest', [
        'lll',
        'l l',
        'lll',
    ], {
        l: '#minecraft:logs',
    })

    event.shaped('16x minecraft:stick', [
        'l',
        'l',
    ], {
        l: '#minecraft:logs',
    })
})
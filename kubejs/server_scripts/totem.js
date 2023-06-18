// This script adds a crafting recipe for Totems of Undying

ServerEvents.recipes(event => {
    event.shaped("minecraft:totem_of_undying", [
        ' e ',
        'gsg',
        ' g ',
    ], {
        e: 'minecraft:emerald_block',
        g: 'minecraft:gold_block',
        s: 'minecraft:nether_star',
    })
})
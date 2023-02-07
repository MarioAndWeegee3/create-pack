// This script adds an alternative way of obtaining a wither skeleton skull

ServerEvents.recipes(event => {
    event.custom({
        type: 'create:haunting',
        ingredients: [
            {
                item: 'minecraft:bone_block',
            }
        ],
        results: [
            {
                item: 'minecraft:wither_skeleton_skull',
                chance: 0.2,
            },
            {
                item: 'minecraft:nether_star',
                chance: 0.001,
            },
            {
                item: 'minecraft:wither_rose',
                chance: 0.7,
            },
        ],
    })
})
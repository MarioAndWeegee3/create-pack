// This script makes Shulker Shells craftable. You still need to go to the end
// to make them.

ServerEvents.recipes(event => {
    event.shaped("2x minecraft:shulker_shell", [
        'cc',
        'cc',
    ], {
        c: 'minecraft:popped_chorus_fruit',
    })

    event.custom({
        type: 'create:pressing',
        ingredients: [
            Ingredient.of('minecraft:popped_chorus_fruit').toJson(),
        ],
        results: [
            Item.of('minecraft:shulker_shell', 2).toResultJson(),
        ],
    })
})
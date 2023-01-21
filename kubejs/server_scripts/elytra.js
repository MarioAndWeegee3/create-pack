// This script makes Elytra craftable using Phantom Membranes and
// Popped Chorus Fruit.

ServerEvents.recipes(event => {
    event.shaped("minecraft:elytra", [
        'p p',
        'pcp',
        'pcp',
    ], {
        p: 'minecraft:phantom_membrane',
        c: 'minecraft:popped_chorus_fruit',
    })
})
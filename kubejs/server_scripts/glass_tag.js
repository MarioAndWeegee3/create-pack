// For some reason, vanilla glass isn't in the c:colorless_glass tag.
// This script fixes that.

ServerEvents.tags('item', event => {
    event.add('c:colorless_glass', 'minecraft:glass')
})

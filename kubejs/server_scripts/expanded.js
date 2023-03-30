// This script disables all recipes from the `expandedstorage` mod.

ServerEvents.recipes(event => {
    event.remove({
        mod: 'expandedstorage'
    })
})
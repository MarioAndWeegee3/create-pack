// For some reason, vanilla glass isn't in the c:glass/colorless tag.
// This script fixes that.

onEvent('tags.items', event => {
    
    event.add('c:glass/colorless', 'minecraft:glass')
});
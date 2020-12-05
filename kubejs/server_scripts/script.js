// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Loading Chapter 1 recipes...')

// Recipe Factory 
/*
    event.shaped(item.of('item', 1), [
    '   ',
    '   ',
    '   '
  	], {
    A: ,
    B: ,
    C: ,
    D: ,
    E: ,
    F: ,
    G: ,
    H: ,
    I:
    })
*/


events.listen('recipes', event => {
    event.remove({output: 'exnihilosequentia:sieve'})
    event.remove({output: 'exnihilosequentia:mesh_string'})
    event.remove({output: 'exnihilosequentia:mesh_flint'})
    event.remove({output: 'exnihilosequentia:mesh_iron'})
    event.shaped(item.of('exnihilosequentia:sieve', 1), [
    'A A',
    'BCB',
    'D D'
  	], {
    A: 'naturesaura:ancient_log',
    B: 'naturesaura:ancient_planks',
    C: 'naturesaura:ancient_slab',
    D: 'naturesaura:ancient_stick'
    })
    event.shaped(item.of('exnihilosequentia:mesh_string', {Damage:0}), [
    'ACA',
    'CBC',
    'ACA'
  	], {
    A: 'minecraft:string',
    B: item.of('naturesaura:aura_bottle', {stored_type:"naturesaura:overworld"}),
    C: item.of(item.of('pickletweaks:mesh', {Damage:0}))
    })
})

events.listen('item.tags', event => {
  // Change item tags here
})
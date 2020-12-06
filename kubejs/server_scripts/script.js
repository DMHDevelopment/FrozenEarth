// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info('Loading Chapter 1 recipes...');

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
    event.remove({output: 'exnihilosequentia:sieve'});
    event.remove({output: 'exnihilosequentia:mesh_string'});
    event.remove({output: 'exnihilosequentia:mesh_flint'});
    event.remove({output: 'exnihilosequentia:mesh_iron'});
    event.shaped(item.of('exnihilosequentia:sieve', 1), [
        'A A',
        'BCB',
        'D D'
    ], {
        A: 'naturesaura:ancient_log',
        B: 'naturesaura:ancient_planks',
        C: 'naturesaura:ancient_slab',
        D: 'naturesaura:ancient_stick'
    });
    event.shaped(item.of('exnihilosequentia:mesh_string', 1), [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: 'minecraft:string',
        B: item.of('naturesaura:aura_bottle', {stored_type: "naturesaura:overworld"}),
        C: item.of(item.of('pickletweaks:mesh', {Damage: 0}))
    });
    event.shaped(item.of('exnihilosequentia:mesh_flint', 1), [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:flint',
        B: 'moreplates:flint_gear',
        C: item.of('exnihilosequentia:mesh_string', {Damage: 0})
    });
    event.shaped(item.of('exnihilosequentia:mesh_iron', 1), [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'create:iron_sheet',
        B: 'naturesaura:infused_iron',
        C: item.of('exnihilosequentia:mesh_flint', {Damage: 0})
    });

    // Change receipt for "Iron chests" mod
    event.remove({mod: 'ironchest'});

    event.shaped(item.of('ironchest:dirt_chest', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#industrialforegoing:sludge',
        B: '#forge:chests/wooden'
    });

    event.shaped(item.of('ironchest:copper_chest', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'create:copper_sheet',
        B: '#forge:chests/wooden'
    });

    event.shaped(item.of('ironchest:iron_chest', 1), [
        'AAA',
        ' B ',
        'AAA'
    ], {
        A: 'create:iron_sheet',
        B: 'ironchest:copper_chest'
    });

    event.shaped(item.of('ironchest:iron_chest', 1), [
        'AAA',
        'CBC',
        'AAA'
    ], {
        A: 'create:iron_sheet',
        B: '#forge:chests/wooden',
        C: 'create:andesite_alloy'
    });

    event.shaped(item.of('ironchest:gold_chest', 1), [
        'AAA',
        ' B ',
        'AAA'
    ], {
        A: 'create:gold_sheet',
        B: 'ironchest:iron_chest'
    });

    event.shaped(item.of('ironchest:gold_chest', 1), [
        'AAA',
        'CBC',
        'AAA'
    ], {
        A: 'create:gold_sheet',
        B: 'ironchest:iron_chest',
        C: 'exnihilosequentia:chunk_gold'
    });

    event.shaped(item.of('ironchest:silver_chest', 1), [
        'CAC',
        'ABC',
        'CAC'
    ], {
        A: 'immersiveengineering:plate_silver',
        B: 'ironchest:iron_chest',
        C: '#forge:nuggets/silver'
    });

    event.shaped(item.of('ironchest:silver_chest', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'immersiveengineering:plate_silver',
        B: 'ironchest:copper_chest'
    });

    event.shaped(item.of('ironchest:diamond_chest', 1), [
        'A A',
        ' B ',
        'A A'
    ], {
        A: 'moreplates:diamond_plate',
        B: 'ironchest:silver_chest'
    });

    event.shaped(item.of('ironchest:diamond_chest', 1), [
        ' A',
        'ABA',
        ' A '
    ], {
        A: 'moreplates:diamond_plate',
        B: 'ironchest:silver_chest'
    });

    event.shaped(item.of('ironchest:diamond_chest', 1), [
        ' A ',
        ' B ',
        ' A '
    ], {
        A: 'moreplates:diamond_plate',
        B: 'ironchest:gold_chest'
    });

    event.shaped(item.of('ironchest:diamond_chest', 1), [
        '   ',
        'ABA',
        '   '
    ], {
        A: 'moreplates:diamond_plate',
        B: 'ironchest:gold_chest'
    });

    event.shaped(item.of('ironchest:obsidian_chest', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:obsidian',
        B: 'ironchest:diamond_chest'
    });

    event.shaped(item.of('ironchest:crystal_chest', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:glass',
        B: 'ironchest:diamond_chest'
    });

    event.shaped(item.of('ironchest:wood_to_iron_chest_upgrade', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'create:iron_sheet',
        B: '#minecraft:planks'
    });

    event.shaped(item.of('ironchest:wood_to_copper_chest_upgrade', 1), [
        'AAA',
        ' B ',
        'AAA'
    ], {
        A: 'create:copper_sheet',
        B: '#minecraft:planks'
    });

    event.shaped(item.of('ironchest:copper_to_iron_chest_upgrade', 1), [
        'AAA',
        'CBC',
        'AAA'
    ], {
        A: 'create:iron_sheet',
        B: 'create:copper_sheet',
        C: 'create:andesite_alloy'
    });

    event.shaped(item.of('ironchest:copper_to_silver_chest_upgrade', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'immersiveengineering:plate_silver',
        B: 'create:copper_sheet'
    });

    event.shaped(item.of('ironchest:silver_to_gold_chest_upgrade', 1), [
        'A A',
        ' B ',
        'A A'
    ], {
        A: 'create:gold_sheet',
        B: 'immersiveengineering:plate_silver'
    });

    event.shaped(item.of('ironchest:iron_to_gold_chest_upgrade', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'create:gold_sheet',
        B: 'create:iron_sheet'
    });

    event.shaped(item.of('ironchest:gold_to_diamond_chest_upgrade', 1), [
        '   ',
        'ABA',
        '   '
    ], {
        A: 'moreplates:diamond_plate',
        B: 'create:gold_sheet'
    });

    event.shaped(item.of('ironchest:gold_to_diamond_chest_upgrade', 1), [
        ' A ',
        ' B ',
        ' A '
    ], {
        A: 'moreplates:diamond_plate',
        B: 'create:gold_sheet'
    });

    event.shaped(item.of('ironchest:diamond_to_crystal_chest_upgrade', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:glass',
        B: 'moreplates:diamond_plate'
    });

    event.shaped(item.of('ironchest:diamond_to_obsidian_chest_upgrade', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:obsidian',
        B: 'moreplates:diamond_plate'
    });
});

events.listen('item.tags', event => {
    // Change item tags here
});

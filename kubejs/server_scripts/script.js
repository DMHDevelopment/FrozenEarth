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
        A: '#forge:plates/copper',
        B: '#forge:chests/wooden'
    });

    event.shaped(item.of('ironchest:iron_chest', 1), [
        'AAA',
        ' B ',
        'AAA'
    ], {
        A: '#forge:plates/iron',
        B: 'ironchest:copper_chest'
    });

    event.shaped(item.of('ironchest:iron_chest', 1), [
        'AAA',
        'CBC',
        'AAA'
    ], {
        A: '#forge:plates/iron',
        B: '#forge:chests/wooden',
        C: 'create:andesite_alloy'
    });

    event.shaped(item.of('ironchest:gold_chest', 1), [
        'AAA',
        ' B ',
        'AAA'
    ], {
        A: '#forge:plates/gold',
        B: 'ironchest:iron_chest'
    });

    event.shaped(item.of('ironchest:gold_chest', 1), [
        'AAA',
        'CBC',
        'AAA'
    ], {
        A: '#forge:plates/gold',
        B: 'ironchest:silver_chest',
        C: 'minecraft:light_weighted_pressure_plate'
    });

    event.shaped(item.of('ironchest:silver_chest', 1), [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: '#forge:plates/silver',
        B: 'ironchest:iron_chest',
        C: '#forge:nuggets/silver'
    });

    event.shaped(item.of('ironchest:silver_chest', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:plates/silver',
        B: 'ironchest:copper_chest'
    });

    event.shaped(item.of('ironchest:diamond_chest', 1), [
        'A A',
        ' B ',
        'A A'
    ], {
        A: '#forge:gears/diamond',
        B: 'ironchest:silver_chest'
    });

    event.shaped(item.of('ironchest:diamond_chest', 1), [
        ' A',
        'ABA',
        ' A '
    ], {
        A: '#forge:gears/diamond',
        B: 'ironchest:silver_chest'
    });

    event.shaped(item.of('ironchest:diamond_chest', 1), [
        ' A ',
        ' B ',
        ' A '
    ], {
        A: '#forge:gears/diamond',
        B: 'ironchest:gold_chest'
    });

    event.shaped(item.of('ironchest:diamond_chest', 1), [
        '   ',
        'ABA',
        '   '
    ], {
        A: '#forge:gears/diamond',
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
        A: '#forge:plates/iron',
        B: '#minecraft:planks'
    });

    event.shaped(item.of('ironchest:wood_to_copper_chest_upgrade', 1), [
        'AAA',
        ' B ',
        'AAA'
    ], {
        A: '#forge:plates/copper',
        B: '#minecraft:planks'
    });

    event.shaped(item.of('ironchest:copper_to_iron_chest_upgrade', 1), [
        'AAA',
        'CBC',
        'AAA'
    ], {
        A: '#forge:plates/iron',
        B: '#forge:plates/copper',
        C: 'create:andesite_alloy'
    });

    event.shaped(item.of('ironchest:copper_to_silver_chest_upgrade', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:plates/silver',
        B: '#forge:plates/copper'
    });

    event.shaped(item.of('ironchest:silver_to_gold_chest_upgrade', 1), [
        'A A',
        ' B ',
        'A A'
    ], {
        A: '#forge:plates/gold',
        B: '#forge:plates/silver'
    });

    event.shaped(item.of('ironchest:iron_to_gold_chest_upgrade', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:plates/gold',
        B: '#forge:plates/iron'
    });

    event.shaped(item.of('ironchest:gold_to_diamond_chest_upgrade', 1), [
        '   ',
        'ABA',
        '   '
    ], {
        A: '#forge:gears/diamond',
        B: '#forge:plates/gold'
    });

    event.shaped(item.of('ironchest:gold_to_diamond_chest_upgrade', 1), [
        ' A ',
        ' B ',
        ' A '
    ], {
        A: '#forge:gears/diamond',
        B: '#forge:plates/gold'
    });

    event.shaped(item.of('ironchest:diamond_to_crystal_chest_upgrade', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:glass',
        B: '#forge:gears/diamond'
    });

    event.shaped(item.of('ironchest:diamond_to_obsidian_chest_upgrade', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:obsidian',
        B: '#forge:gears/diamond'
    });
});

events.listen('item.tags', event => {
    // Change item tags here
});

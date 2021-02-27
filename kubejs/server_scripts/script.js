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
    event.remove({id: 'waystones:mossy_waystone'})
    event.remove({id: 'waystones:mossy_waystone_convert'})
    event.remove({id: 'waystones:sandy_waystone'})
    event.remove({id: 'rankine:ender_element_transmuter'})
    event.remove({id: 'rankine:ghast_element_transmuter'})
    event.remove({id: 'rankine:nether_element_transmuter'})
    event.remove({id: 'assemblylinemachines:alloying/alloying_steel_coal'})
    event.remove({id: 'assemblylinemachines:alloying/alloying_steel_charcoal'})
    event.remove({id: 'assemblylinemachines:bath/steel/mixer_steel_coal'})
    event.remove({id: 'assemblylinemachines:bath/steel/mixer_steel_charcoal'})
    event.remove({id: 'futurepack:escenner_0'})
    event.remove({id: 'silentgear:azure_silver_block'})
    event.remove({id: 'silentgear:azure_electrum_block'})
    event.remove({id: 'silents_mechanisms:basic_crusher'})
    event.remove({id: 'silents_mechanisms:coal_generator'})
    event.remove({id: 'silents_mechanisms:basic_alloy_smelter'})
    event.remove({id: 'industrialforegoing:machine_frame_pity'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/simple_machine_frame'})       
    event.remove({id: 'industrialforegoing:dissolution_chamber/advanced_machine_frame'})       
    event.remove({id: 'industrialforegoing:dissolution_chamber/supreme_machine_frame'})       
    event.remove({id: 'simplyjetpacks:vanilla/jetpack_vanilla1'})
    event.remove({id: 'simplyjetpacks:vanilla/jetpack_vanilla2'})
    event.remove({id: 'simplyjetpacks:vanilla/jetpack_vanilla3'})
    event.remove({id: 'simplyjetpacks:vanilla/jetpack_vanilla4'})
    event.remove({id: 'voluminousenergy:vanilla_crafting/microchips/silver_microchip'})
    event.remove({id: 'voluminousenergy:vanilla_crafting/microchips/gold_microchip'})
    event.remove({id: 'voluminousenergy:vanilla_crafting/aluminum_machine_casing'})
    event.remove({id: 'voluminousenergy:vanilla_crafting/titanium_machine_casing'})
    event.remove({id: 'voluminousenergy:vanilla_crafting/carbon_shielded_aluminum_machine_frame'})
    event.remove({id: 'voluminousenergy:vanilla_crafting/aluminum_shell'})
    event.remove({id: 'thermal:machine_frame'})
    event.remove({id: 'thermal:rf_coil'})
    event.remove({id: 'silents_mechanisms:alloy_machine_frame'})
    event.remove({id: 'silents_mechanisms:upgrade_case'})
    event.remove({id: 'silents_mechanisms:wire'})
    event.remove({id: 'extendedcrafting:redstone_ingot'})

    event.remove({mod: 'appliedenergistics2'})
    event.remove({mod: 'ae2extras'})

    event.shaped(item.of('appliedenergistics2:wooden_gear', 1), [
        ' A ',
        'A A',
        ' A '
    ], {
        A: '#forge:rods/wooden'
    });

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

import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.data.StringData;

import mods.stone_age.FlintWorkbenchManager;

FlintWorkbenchManager.INSTANCE.addRecipe("crafting_table", <item:minecraft:crafting_table>, 
[[<item:stone_age:leather_strip>, <item:stone_age:stone_pickaxe>.withTag({Damage: 0 as int, additionalModifiers: {}}), <item:stone_age:leather_strip>], 
[<item:stone_age:stone_axe>.withTag({Damage: 0 as int, additionalModifiers: {}}), <item:stone_age:stone_chest>, <item:stone_age:stone_shovel>.withTag({Damage: 0 as int, additionalModifiers: {}})],
[<item:appliedenergistics2:wooden_gear>, <item:stone_age:thatch_block>, <item:appliedenergistics2:wooden_gear>]], <item:stone_age:stone_hammer>);

FlintWorkbenchManager.INSTANCE.addRecipe("wooden_gear", <item:appliedenergistics2:wooden_gear>, 
[[<item:minecraft:air> * 0, <tag:forge:rods/wooden>, <item:minecraft:air> * 0], 
[<tag:forge:rods/wooden>, <item:minecraft:air> * 0, <tag:forge:rods/wooden>],
[<item:minecraft:air> * 0, <tag:forge:rods/wooden>, <item:minecraft:air> * 0]], <item:minecraft:stick>);

FlintWorkbenchManager.INSTANCE.addRecipe("clay_bucket", <item:ceramics:unfired_clay_bucket>, 
[[<item:minecraft:air> * 0, <item:minecraft:air> * 0, <item:minecraft:air> * 0], 
[<item:ceramics:unfired_clay_plate>, <item:minecraft:air> * 0, <item:ceramics:unfired_clay_plate>],
[<item:minecraft:air> * 0, <item:ceramics:unfired_clay_plate>, <item:minecraft:air> * 0]], <item:minecraft:stick>);

FlintWorkbenchManager.INSTANCE.addRecipe("flint_sword", <item:pickletweaks:flint_sword>.withTag({Damage: 0 as int}), 
[[<item:minecraft:air> * 0, <item:minecraft:flint>, <item:minecraft:air> * 0], 
[<item:minecraft:air> * 0, <item:minecraft:flint>, <item:minecraft:air> * 0],
[<item:minecraft:air> * 0, <item:minecraft:stick>, <item:minecraft:air> * 0]], <item:minecraft:stick>);

FlintWorkbenchManager.INSTANCE.addRecipe("flint_pickaxe", <item:pickletweaks:flint_pickaxe>.withTag({Damage: 0 as int}), 
[[<item:minecraft:flint>, <item:minecraft:flint>, <item:minecraft:flint>], 
[<item:minecraft:air> * 0, <item:minecraft:stick>, <item:minecraft:air> * 0],
[<item:minecraft:air> * 0, <item:minecraft:stick>, <item:minecraft:air> * 0]], <item:minecraft:stick>);

FlintWorkbenchManager.INSTANCE.addRecipe("flint_axe", <item:pickletweaks:flint_axe>.withTag({Damage: 0 as int}), 
[[<item:minecraft:flint>, <item:minecraft:flint>, <item:minecraft:air> * 0], 
[<item:minecraft:flint>, <item:minecraft:stick>, <item:minecraft:air> * 0],
[<item:minecraft:air> * 0, <item:minecraft:stick>, <item:minecraft:air> * 0]], <item:minecraft:stick>);

//FlintWorkbenchManager.INSTANCE.addRecipe("flint_shovel", <item:pickletweaks:flint_shovel>.withTag({Damage: 0 as int}), 
//[[<item:minecraft:air> * 0, <item:minecraft:flint>, <item:minecraft:air> * 0], 
//[<item:minecraft:air> * 0, <item:minecraft:stick>, <item:minecraft:air> * 0],
//[<item:minecraft:air> * 0, <item:minecraft:stick>, <item:minecraft:air> * 0]], <item:stone_age:flint_knife>.withTag({Damage: 0 as int}));

FlintWorkbenchManager.INSTANCE.addRecipe("flint_hoe", <item:pickletweaks:flint_hoe>.withTag({Damage: 0 as int}), 
[[<item:minecraft:flint>, <item:minecraft:flint>, <item:minecraft:air> * 0], 
[<item:minecraft:air> * 0, <item:minecraft:stick>, <item:minecraft:air> * 0],
[<item:minecraft:air> * 0, <item:minecraft:stick>, <item:minecraft:air> * 0]], <item:stone_age:flint_knife>.withTag({Damage: 0 as int}));
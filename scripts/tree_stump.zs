import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.data.StringData;

import mods.stone_age.TreeStumpManager;

<recipetype:stone_age:tree_stump>.addRecipe("sawdust", <item:immersiveengineering:dust_wood>, <item:stone_age:stone_hammer>.withTag({Damage: 0 as int}), <tag:items:minecraft:slabs>, 4);
TreeStumpManager.INSTANCE.addRecipe("sawdust", <item:immersiveengineering:dust_wood>, <item:stone_age:stone_hammer>.withTag({Damage: 0 as int}), <tag:items:minecraft:slabs>, 4); 

<recipetype:stone_age:tree_stump>.addRecipe("oak_planks", <item:minecraft:oak_planks> * 3, <item:stone_age:stone_axe>, <item:minecraft:oak_log>, 2);
TreeStumpManager.INSTANCE.addRecipe("oak_planks", <item:minecraft:oak_planks> * 3, <item:stone_age:stone_axe>, <item:minecraft:oak_log>, 2);

<recipetype:stone_age:tree_stump>.addRecipe("oak_planaks", <item:minecraft:dark_oak_planks> * 3, <item:stone_age:stone_axe>, <item:minecraft:dark_oak_log>, 2);
TreeStumpManager.INSTANCE.addRecipe("oak_planaks", <item:minecraft:dark_oak_planks> * 3, <item:stone_age:stone_axe>, <item:minecraft:dark_oak_log>, 2);
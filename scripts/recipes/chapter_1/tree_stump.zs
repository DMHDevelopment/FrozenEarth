import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.data.StringData;

import mods.stone_age.TreeStumpManager;

<recipetype:stone_age:tree_stump>.addRecipe("sawdust", <item:immersiveengineering:dust_wood>, <item:stone_age:stone_hammer>.withTag({Damage: 0 as int}), <tag:minecraft:wooden_slabs>, 4);
TreeStumpManager.INSTANCE.addRecipe("sawdust", <item:immersiveengineering:dust_wood>, <item:stone_age:stone_hammer>.withTag({Damage: 0 as int}), <tag:minecraft:wooden_slabs>, 4);
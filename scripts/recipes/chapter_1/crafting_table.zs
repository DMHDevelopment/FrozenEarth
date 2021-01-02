import crafttweaker.api.item.IIngredient;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.data.StringData;

craftingTable.addShapeless("strainer_base", <item:waterstrainer:strainer_base>, 
[<item:stone_age:drying_rack>, <item:minecraft:air> * 0, <item:stone_age:drying_rack>, 
<tag:minecraft:planks>, <item:exnihilosequentia:mesh_string>.withTag({Damage: 0 as int}), <tag:minecraft:planks>, 
<tag:minecraft:planks>, <tag:forge:chests/wooden>, <tag:minecraft:planks>]);

craftingTable.removeRecipe(<item:ceramics:unfired_clay_bucket>);

craftingTable.removeRecipe(<item:extendedcrafting:handheld_table>);
craftingTable.addShapeless("handheld_table", <item:extendedcrafting:handheld_table>, 
[<item:minecraft:air> * 0, <item:silents_mechanisms:zombie_leather>, <tag:forge:workbench>, 
<item:minecraft:air> * 0, <tag:forge:rods/wooden>, <item:silents_mechanisms:zombie_leather>, 
<tag:forge:rods/wooden>, <item:minecraft:air> * 0, <item:minecraft:air> * 0]);
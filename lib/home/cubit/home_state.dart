part of 'home_cubit.dart';

class HomeState {

  List<MinecraftRecipe> recipes;
  String? searchTerm;

  HomeState({required this.recipes, required this.searchTerm});
}

class MinecraftRecipe {

  String itemName;
  List<String> requiredItems;
  String itemImageAsset;
  String recipeImageAsset;

  MinecraftRecipe({
    required this.itemName,
    required this.requiredItems,
    required this.itemImageAsset,
    required this.recipeImageAsset,
  });

  @override
  String toString() {
    return "MinecraftRecipe(itemName=$itemName, requiredItems=${requiredItems.join(',')}, itemImageAsset=$itemImageAsset, recipeImageAsset=$recipeImageAsset)";
  }
}
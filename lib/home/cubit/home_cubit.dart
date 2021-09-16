import 'dart:core';
import 'dart:convert';
import 'package:bloc/bloc.dart';
import 'package:flutter/services.dart' show rootBundle;

part 'home_state.dart';

class HomeCubit extends Cubit<HomeState> {

  static const fileRecipeJson = 'assets/minecraft_recipes.json';

  HomeCubit() : super(HomeState(
    recipes: [],
    searchTerm: '',
  )) {
    print("HomeCubit created!");
    print("Loading recipes...");
    loadRecipes().then((recipes) {
      print("Loaded ${recipes.length} recipes!");
    });
  }

  Future<List<MinecraftRecipe>> getRecipes(String? searchTerm) async {
    List<MinecraftRecipe> recipes = [];

    var jsonString = await rootBundle.loadString(fileRecipeJson);
    dynamic contentJSON = jsonDecode(jsonString);

    print("getRecipes: $searchTerm");

    for (var recipe in contentJSON['recipes']) {
      if (searchTerm == null || searchTerm.isEmpty || recipe['name'].toString().toLowerCase().contains(searchTerm.toLowerCase())) {
        var itemName = recipe['name'].toString().toLowerCase().replaceAll(' ', '-');
        recipes.add(MinecraftRecipe(
          itemName: recipe['name'],
          requiredItems: (recipe['requiredItems'] as List).map((v) => v.toString()).toList(),
          itemImageAsset: "assets/images/items/$itemName.png",
          recipeImageAsset: "assets/images/recipes/$itemName.png",
        ));
      }
    }

    return recipes;
  }

  Future<List<MinecraftRecipe>> setSearchTerm(String? searchTerm) async {
    print("setSearchTerm: $searchTerm");
    var recipes = await getRecipes(searchTerm);
    emit(HomeState(
      recipes: recipes,
      searchTerm: searchTerm,
    ));
    return recipes;
  }

  Future<List<MinecraftRecipe>> loadRecipes() async {
    var recipes = await getRecipes(state.searchTerm);
    emit(HomeState(
      recipes: recipes,
      searchTerm: state.searchTerm,
    ));
    return recipes;
  }
}

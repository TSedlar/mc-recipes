import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mc_recipes/home/cubit/home_cubit.dart';

class HomeView extends StatelessWidget {
  HomeView({Key? key}) : super(key: key);

  final searchController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<HomeCubit, HomeState>(builder: (ctx, state) {
      var width = MediaQuery.of(context).size.width;
      var singleResult = state.recipes.length == 1;
      var gridCount = singleResult ? 1 : (width / 200).floor();
      var recipes = (state.recipes
          .map<Widget>((recipe) => RecipeView(
            recipe: recipe,
            gridCount: gridCount,
            singleResult: singleResult,
          ))).toList();

      return Scaffold(
          appBar: AppBar(
            // The search area here
            title: Container(
              width: double.infinity,
              height: 40.0,
              decoration: BoxDecoration(
                color: const Color(0xff242424),
                borderRadius: BorderRadius.circular(5)
              ),
              child: Center(
                child: TextField(
                  controller: searchController,
                  onChanged: (term) {
                    ctx.read<HomeCubit>().setSearchTerm(term).then((recipes) {
                      print("Filtered recipes to ${recipes.length} results");
                    });
                  },
                  decoration: InputDecoration(
                    prefixIcon: const Icon(Icons.search),
                    suffixIcon: IconButton(
                      icon: const Icon(Icons.clear),
                      onPressed: () {
                        ctx.read<HomeCubit>().setSearchTerm(null).then((_) {
                          print("Cleared search filter");
                          searchController.clear();
                        });
                      },
                    ),
                    hintText: 'Search...',
                    border: InputBorder.none,
                  ),
                ),
              ),
            ),
          ),
          body: Padding(
            padding: const EdgeInsets.all(5.0),
            child: GridView.count(
              crossAxisCount: gridCount,
              children: recipes,
              childAspectRatio: singleResult ? 1.2 : 0.665,
            ),
          ),
        );
    });
  }
}

class RecipeView extends StatelessWidget {
  final MinecraftRecipe recipe;
  final int gridCount;
  final bool singleResult;

  static const fileArrowImage = "assets/images/creation-arrow.png";
  static const fileBoxImage = "assets/images/creation-box.png";

  const RecipeView({
    Key? key,
    required this.recipe,
    required this.gridCount,
    required this.singleResult
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var width = MediaQuery.of(context).size.width;
    var cardWidth = (width / gridCount - (gridCount * 10.0));
    var boxSize = singleResult ? (cardWidth / 8.0) : (width < 600 ? cardWidth / 3.4 : cardWidth / 3.25);
    var recipeSize = singleResult ? (cardWidth / 2.0) : (cardWidth + 5.0);
    return Card(
      color: const Color(0xffc6c6c6),
      child: Padding(
        padding: EdgeInsets.only(
          left: 10.0,
          right: 10.0,
          top: singleResult ? 0.0 : 10.0,
          bottom: 3.0,
        ),
        child: Column(
          // crossAxisAlignment: singleResult ? CrossAxisAlignment.center : CrossAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Item name
            Padding(
              padding: EdgeInsets.only(
                bottom: singleResult ? 15.0 : (cardWidth / (gridCount <= 2 ? 40.0 : 30.0)),
              ),
              child: SizedBox(
                height: 30.0,
                child: Text(
                  recipe.itemName,
                  softWrap: true,
                  maxLines: 1,
                  style: TextStyle(
                    fontSize: singleResult ? 28.0 : 16.0,
                    color: const Color(0xff242424),
                  ),
                ),
              ),
            ),

            // Item image w/required items tooltip
            Tooltip(
              message:
                  "\nThe following items are needed:\n${recipe.requiredItems.map((r) => '- $r').toList().join('\n')}\n",
              child: Stack(
                alignment: AlignmentDirectional.center,
                children: [
                  Container(
                    width: boxSize,
                    height: boxSize,
                    decoration: const BoxDecoration(
                      image: DecorationImage(
                        image: AssetImage(fileBoxImage),
                        fit: BoxFit.contain,
                      ),
                    ),
                  ),

                  // Item image
                  Container(
                    width: boxSize - 20.0,
                    height: boxSize - 20.0,
                    decoration: BoxDecoration(
                      image: DecorationImage(
                        image: AssetImage(recipe.itemImageAsset),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                ],
              ),
            ),

            // Recipe image
            Padding(
              padding: const EdgeInsets.only(
                top: 8.0,
              ),
              child: Container(
                width: recipeSize,
                height: recipeSize,
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: AssetImage(recipe.recipeImageAsset),
                    fit: BoxFit.fill,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

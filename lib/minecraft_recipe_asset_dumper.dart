import 'dart:io';
import 'dart:convert';
import 'package:http/http.dart' as http;

const fileRecipeJson = 'package:mc_recipes/../assets/minecraft_recipes.json';
void main() async {
  var jsonString = await File(fileRecipeJson).readAsString();
  dynamic contentJSON = jsonDecode(jsonString);

  for (var recipe in contentJSON['recipes']) {
    var itemName = recipe['name'].toString().toLowerCase().replaceAll(' ', '-');

    var itemImageURL = recipe['itemImageURL'];
    var recipeImageURL = recipe['recipeImageURL'];

    var itemImageFile = "package:mc_recipes/../assets/images/items/$itemName.png";
    var recipeImageFile = "package:mc_recipes/../assets/images/recipes/$itemName.png";
    
    await File(itemImageFile).writeAsBytes(await http.readBytes(Uri.parse(itemImageURL)));
    await File(recipeImageFile).writeAsBytes(await http.readBytes(Uri.parse(recipeImageURL)));
  }
}
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mc_recipes/home/view/home_page.dart';

void main() => runApp(const MainApp());

class MainApp extends StatelessWidget {

  const MainApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: const HomePage(),
      darkTheme: ThemeData(
        brightness: Brightness.dark,
      ),
      themeMode: ThemeMode.dark,
    );
  }
}

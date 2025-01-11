import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:frontend_mobile/base_url.dart';
import 'package:frontend_mobile/components/my_favorite_tile.dart';
import 'package:frontend_mobile/models/backend.dart';
import 'package:frontend_mobile/pages/login_page.dart';
import 'package:http/http.dart' as http;
import 'package:http/http.dart';
import 'package:frontend_mobile/components/my_drawer.dart';
import 'package:frontend_mobile/models/product.dart';

class FavoritePage extends StatefulWidget {
  const FavoritePage({super.key});

  @override
  State<FavoritePage> createState() => _FavoritePageState();
}

class _FavoritePageState extends State<FavoritePage> {
  Client client=http.Client();
  List<Product> products=[];

  @override
  void initState() {
    super.initState();
    if (backend.isactive) {
      _retriveFavorites();
    } else {
      _redirectToLogin();
    }
  }

  Future<void> _redirectToLogin() async {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      Navigator.pushReplacement(context,MaterialPageRoute(builder: (context) => const LoginPage()));
    });
  }

  _retriveFavorites() async {
    products=[];
    final url=Uri.parse("$baseurl/store/favorites/");
    final headers={"Content-Type":"application/json","Authorization":"Bearer ${backend.token}"};
    dynamic response=jsonDecode((await client.get(url,headers: headers)).body);
    for (var elemet in response) {
      products.add(Product.fromMap(elemet["product"]));
    }
    setState(() {});
  }

  void _removeFavorite(Product product) {
    setState(() {
      products.remove(product);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        foregroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text("Favorite Page")
        ),
        backgroundColor: Theme.of(context).colorScheme.surface,
        drawer: const MyDrawer(),
        body: ListView.builder(itemCount: products.length, itemBuilder: (BuildContext context, int index) {
          return MyFavoriteTile(product: products[index],onRemove: _removeFavorite);
          },),
      );
    }
}
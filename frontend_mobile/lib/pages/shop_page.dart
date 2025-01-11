import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:frontend_mobile/base_url.dart';
import 'package:http/http.dart' as http;
import 'package:http/http.dart';
import 'package:frontend_mobile/components/my_drawer.dart';
import 'package:frontend_mobile/components/my_product_tile.dart';
import 'package:frontend_mobile/models/product.dart';

class ShopPage extends StatefulWidget {
  const ShopPage({super.key});

  @override
  State<ShopPage> createState() => _ShopPageState();
}

class _ShopPageState extends State<ShopPage> {
  Client client=http.Client();
  List<Product> products=[];

  @override
  void initState() {
    _retriveProduct();
    super.initState();
  }

  _retriveProduct() async {
    products=[];
    final url=Uri.parse("$baseurl/store/products/");
    List response=jsonDecode((await client.get(url)).body);
    for (var elemet in response) {
      products.add(Product.fromMap(elemet));
    }
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        foregroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text("Shop Page")
        ),
        backgroundColor: Theme.of(context).colorScheme.surface,
        drawer: const MyDrawer(),
        body: SizedBox(
          child: ListView.builder(
            padding:const EdgeInsets.all(15),
            itemCount: products.length,
            itemBuilder: (BuildContext context, int index) {
            return MyProductTile(product: products[index]);
            },),
        ),
      );
    }
}
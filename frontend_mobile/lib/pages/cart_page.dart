import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:frontend_mobile/base_url.dart';
import 'package:frontend_mobile/components/my_cart_tile.dart';
import 'package:frontend_mobile/models/backend.dart';
import 'package:frontend_mobile/pages/login_page.dart';
import 'package:http/http.dart' as http;
import 'package:http/http.dart';
import 'package:frontend_mobile/components/my_drawer.dart';
import 'package:frontend_mobile/models/product.dart';

class CartPage extends StatefulWidget {
  const CartPage({super.key,auth});

  @override
  State<CartPage> createState() => _CartPageState();
}

class _CartPageState extends State<CartPage> {
  Client client=http.Client();
  List<Product> products=[];

  @override
  void initState() {
    super.initState();
    if (backend.isactive) {
      _retriveItems();
    } else {
      _redirectToLogin();
    }
  }

  Future<void> _redirectToLogin() async {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      Navigator.pushReplacement(context,MaterialPageRoute(builder: (context) => const LoginPage()));
    });
  }

  _retriveItems() async {
    products=[];
    final url=Uri.parse("$baseurl/store/cart/");
    final headers={"Content-Type":"application/json","Authorization":"Bearer ${backend.token}"};
    List response=jsonDecode((await client.get(url,headers: headers)).body);
    dynamic data=response;
    List items=data[0]["items"];
    for (var elemet in items) {
      products.add(Product.fromMap(elemet["product"]));
    }
    setState(() {});
  }
  
  void _removeCartItem(Product product) {
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
        title: const Text("Cart Page"),
      ),
      backgroundColor: Theme.of(context).colorScheme.surface,
      drawer: const MyDrawer(),
        body:ListView.builder(itemCount: products.length, itemBuilder: (BuildContext context, int index) {
            return MyCartTile(product: products[index],onRemove: _removeCartItem);
            },),
      );
  }
}
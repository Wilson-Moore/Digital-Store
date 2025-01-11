import 'package:flutter/material.dart';
import 'package:frontend_mobile/pages/cart_page.dart';
import 'package:frontend_mobile/pages/favorite_page.dart';
import 'package:frontend_mobile/pages/intro_page.dart';
import 'package:frontend_mobile/pages/login_page.dart';
import 'package:frontend_mobile/pages/register_page.dart';
import 'package:frontend_mobile/pages/shop_page.dart';
import 'package:frontend_mobile/themes/light_mode.dart';
void main() 
{
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: const IntroPage(),
      theme: lightmode,
      routes: {
        '/intro_page':(context)=>const IntroPage(),
        '/shop_page':(context)=>const ShopPage(),
        '/cart_page':(context)=>const CartPage(),
        '/favorite_page':(context)=>const FavoritePage(),
        '/login_page':(context)=>const LoginPage(),
        '/register_page':(context)=>const RegisterPage(),
      },
    );
  }
}

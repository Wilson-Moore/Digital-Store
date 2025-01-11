import 'package:flutter/material.dart';
import 'package:frontend_mobile/components/my_list_tile.dart';


class MyDrawer extends StatefulWidget {
  const MyDrawer({super.key});

  @override
  State<MyDrawer> createState() => _MyDrawerState();
}

class _MyDrawerState extends State<MyDrawer> {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      backgroundColor: Theme.of(context).colorScheme.surface,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Column(children: [DrawerHeader(
            child: Center(
              child: Icon(
                Icons.shopping_bag,
                size: 72,
                color: Theme.of(context).colorScheme.inversePrimary,
              ),
            ),
          ),
          const SizedBox(height: 25),
          MyListTile(text: "Shop", icon: Icons.home, onTap: (){
            Navigator.pop(context);
            Navigator.pushNamed(context, "/shop_page");
            }),
          MyListTile(text: "Cart", icon: Icons.shopping_cart, onTap: (){
            Navigator.pop(context);
            Navigator.pushNamed(context, "/cart_page");
          }),
          MyListTile(text: "Favorite", icon: Icons.favorite, onTap: (){
            Navigator.pop(context);
            Navigator.pushNamed(context, "/favorite_page");
          }),
          ],
          ),
          Column(
            children: [
              Padding(
                padding: const EdgeInsets.only(bottom: 15.0),
                child: MyListTile(text: "Login", icon: Icons.login, onTap: (){
            Navigator.pop(context);
            Navigator.pushNamed(context, "/login_page");
          }),
                ),
              Padding(
                padding: const EdgeInsets.only(bottom: 25.0),
                child: MyListTile(text: "Exit", icon: Icons.logout, onTap: (){
                  Navigator.pushNamed(context, "/intro_page");
                  }),
          ),
          ],
          ),
        ],
      ),
    );
  }
}
            
          
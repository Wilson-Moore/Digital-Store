import 'package:flutter/material.dart';
import 'package:frontend_mobile/components/my_icon_button.dart';

class IntroPage extends StatefulWidget {
  const IntroPage({super.key});

  @override
  State<IntroPage> createState() => _IntroPageState();
}

class _IntroPageState extends State<IntroPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.surface,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.shopping_bag,
              size: 72,
              color: Theme.of(context).colorScheme.inversePrimary,
              ),
              const SizedBox(height: 25),
              const Text("Digital Shop",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold)),
              const SizedBox(height: 25),
              MyIconButton(onTap: () =>Navigator.pushNamed(context,'/shop_page'),clr: Theme.of(context).colorScheme.primary,child: const Icon(Icons.arrow_forward))
            ],
          ),
        )
    );
  }
}
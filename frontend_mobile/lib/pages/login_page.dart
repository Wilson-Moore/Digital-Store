import 'package:flutter/material.dart';
import 'package:frontend_mobile/components/my_button.dart';
import 'package:frontend_mobile/components/my_text_field.dart';
import "package:frontend_mobile/models/backend.dart";


class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final usernamecontroller=TextEditingController();
  final passwordcontroller=TextEditingController();

  @override
  void initState() {
    super.initState();
  }

  void signin() async {
    if (await backend.login(usernamecontroller.text, passwordcontroller.text)) {
      Navigator.pushNamed(context, "/shop_page");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.primary,
      body: SafeArea(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const SizedBox(height: 25),
              const Icon(Icons.lock,size: 100),
              const SizedBox(height: 25),
              const Text("LOGIN",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold)),
              const SizedBox(height: 25),
              MyTextField(controller: usernamecontroller,hintext: "USERNAME",obscuretext: false),
              const SizedBox(height: 25),
              MyTextField(controller: passwordcontroller,hintext: "PASSWORD",obscuretext: true),
              const SizedBox(height: 50),
              MyButton(onTap: signin,text: "Sign in",clr: Colors.black),
              const SizedBox(height: 75),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text("Don't have an account ?",style: TextStyle(fontSize: 20)),
                  const SizedBox(width: 10),
                  GestureDetector(
                    onTap: ()=> Navigator.pushNamed(context, "/register_page"),
                    child: const Text("Register",style: TextStyle(color: Colors.blue,fontSize: 20,fontWeight: FontWeight.bold))
                    ),
                ],
              )
              ],
            ),
        ), 
        )
      );
  }
}
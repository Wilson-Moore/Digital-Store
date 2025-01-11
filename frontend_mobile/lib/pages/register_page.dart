import 'package:flutter/material.dart';
import 'package:frontend_mobile/components/my_button.dart';
import 'package:frontend_mobile/components/my_text_field.dart';
import "package:frontend_mobile/models/backend.dart";


class RegisterPage extends StatefulWidget {
  const RegisterPage({super.key});

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final usernamecontroller=TextEditingController();
  final passwordcontroller=TextEditingController();
  final emailcontroller=TextEditingController();
  void Function()? onTap;

  @override
  void initState() {
    super.initState();
    backend.isactive=true;
  }

  void signup() async {
    if (await backend.register(usernamecontroller.text, passwordcontroller.text,emailcontroller.text)) {
      Navigator.pushNamed(context, "/login_page");
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
              const Icon(Icons.app_registration,size: 100),
              const SizedBox(height: 25),
              const Text("Register",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold)),
              const SizedBox(height: 25),
              MyTextField(
                controller: usernamecontroller,
                hintext: "USERNAME",
                obscuretext: false,
              ),
              MyTextField(
                controller: emailcontroller,
                hintext: "EMAIL",
                obscuretext: false,
              ),
              const SizedBox(height: 25),
              MyTextField(
                controller: passwordcontroller,
                hintext: "PASSWORD",
                obscuretext: true,
              ),
              const SizedBox(height: 50),
              MyButton(onTap: signup,text: "Sign up",clr: Colors.black),
              ],
            ),
        ), 
        )
      );
  }
}
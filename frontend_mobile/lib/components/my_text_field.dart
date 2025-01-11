import "package:flutter/material.dart";

class MyTextField extends StatelessWidget {
  final dynamic controller;
  final String hintext;
  final bool obscuretext;
  const MyTextField({super.key,required this.controller,required this.hintext,required this.obscuretext});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10.0),
      child: TextField(
        controller: controller,
        obscureText: obscuretext,
        decoration: InputDecoration(
          enabledBorder: const OutlineInputBorder(borderSide: BorderSide(color: Colors.white)),
          focusedBorder: const OutlineInputBorder(borderSide: BorderSide(color: Colors.grey)),
          fillColor: Colors.grey,
          filled: true,
          hintText: hintext,
      )),
    );
  }
}
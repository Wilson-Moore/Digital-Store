import 'package:flutter/material.dart';

class MyButton extends StatelessWidget {
  final Function()? onTap;
  final Color clr;
  final String text;
  const MyButton({super.key,required this.text,required this.onTap,required this.clr});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(15),
        margin: const EdgeInsets.symmetric(horizontal: 100),
        decoration: BoxDecoration(color: clr,borderRadius: BorderRadius.circular(10)),
        child: Center(
          child: Text(text,style: const TextStyle(color: Colors.white,fontSize: 20,fontWeight: FontWeight.bold)),
        ),
      ),
    );
  }
}
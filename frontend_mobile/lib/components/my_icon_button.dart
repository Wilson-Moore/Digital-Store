import 'package:flutter/material.dart';

class MyIconButton extends StatelessWidget {
  final Function()? onTap;
  final Color clr;
  final Widget child;
  const MyIconButton({super.key,required this.onTap,required this.clr,required this.child});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          color: clr,
          borderRadius: BorderRadius.circular(15)
          ),
        padding: const EdgeInsets.all(15),
        child: child,
      ),
    );
  }
}
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:frontend_mobile/base_url.dart';
import 'package:frontend_mobile/models/backend.dart';
import 'package:http/http.dart' as http;
import 'package:frontend_mobile/components/my_icon_button.dart';
import 'package:frontend_mobile/models/product.dart';

class MyFavoriteTile extends StatelessWidget {
  final Product product;
  final Function(Product) onRemove;
  const MyFavoriteTile({super.key,required this.product,required this.onRemove});

  Future<bool> removefromfavorite() async{
    if (backend.isactive) {
      final url=Uri.parse("$baseurl/store/favorites/delete/");
      final headers={"Content-Type":"application/json","Authorization":"Bearer ${backend.token}"};
      final body=jsonEncode({"product":product.id});
      final response=await http.delete(url,headers: headers,body: body);
      if (response.statusCode==200) {
        return true;
      } else {
        return false; 
      }
    } else {
      return false;
    }
  }

  void dialogcart(BuildContext context){
    showDialog(
      context: context,
       builder: (context)=>AlertDialog(
        content:const Text("remove from favorties list ?"),
        actions: [
          MaterialButton(onPressed: ()=> Navigator.pop(context),child:const Text("Cancel")),
          MaterialButton(onPressed: () async {
            Navigator.pop(context);
            if (await removefromfavorite()) {
              onRemove(product);
            }
            },child:const Text("Yes"))
        ]
       )
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.primary,
        borderRadius: BorderRadius.circular(25)),
      margin:const EdgeInsets.all(10),
      padding: const EdgeInsets.all(25),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(product.name,style:const TextStyle(fontSize: 25,fontWeight: FontWeight.bold)),
              const SizedBox(height: 25),
              Text("Price: ${product.price}",style:const TextStyle(fontSize: 20,fontWeight: FontWeight.bold)),
              const SizedBox(height: 15),
              Text("Category: ${product.category.name}",style:const TextStyle(fontSize: 20,fontWeight: FontWeight.bold)),
              const SizedBox(height: 15),
              Text("Description:\n${product.description}",style:TextStyle(color: Theme.of(context).colorScheme.inversePrimary, fontSize: 18,fontWeight: FontWeight.bold)),
          ],),
          Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              MyIconButton(onTap: ()=> dialogcart(context),clr: Colors.white,child:const Icon(Icons.remove)),
            ],
          )
        ],
      ),
    );
  }
}
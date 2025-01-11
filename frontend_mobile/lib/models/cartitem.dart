import 'dart:convert';
import 'package:frontend_mobile/models/cart.dart';
import 'package:frontend_mobile/models/product.dart';

class CartItem {
  Cart cart;
  Product product;
  CartItem({
    required this.cart,
    required this.product,
  });

  CartItem copyWith({
    Cart? cart,
    Product? product,
  }) {
    return CartItem(
      cart: cart ?? this.cart,
      product: product ?? this.product,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'cart': cart.toMap(),
      'product': product.toMap(),
    };
  }

  factory CartItem.fromMap(Map<String, dynamic> map) {
    return CartItem(
      cart: Cart.fromMap(map['cart'] as Map<String,dynamic>),
      product: Product.fromMap(map['product'] as Map<String,dynamic>),
    );
  }

  String toJson() => json.encode(toMap());

  factory CartItem.fromJson(String source) => CartItem.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() => 'CartItem(cart: $cart, product: $product)';

  @override
  bool operator ==(covariant CartItem other) {
    if (identical(this, other)) return true;
  
    return 
      other.cart == cart &&
      other.product == product;
  }

  @override
  int get hashCode => cart.hashCode ^ product.hashCode;
}

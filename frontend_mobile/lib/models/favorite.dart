import 'dart:convert';
import 'package:frontend_mobile/models/product.dart';
import 'package:frontend_mobile/models/user.dart';

class Favorite {
  User user;
  Product product;
  Favorite({
    required this.user,
    required this.product,
  });

  Favorite copyWith({
    User? user,
    Product? product,
  }) {
    return Favorite(
      user: user ?? this.user,
      product: product ?? this.product,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'user': user.toMap(),
      'product': product.toMap(),
    };
  }

  factory Favorite.fromMap(Map<String, dynamic> map) {
    return Favorite(
      user: User.fromMap(map['user'] as Map<String,dynamic>),
      product: Product.fromMap(map['product'] as Map<String,dynamic>),
    );
  }

  String toJson() => json.encode(toMap());

  factory Favorite.fromJson(String source) => Favorite.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() => 'Favorite(user: $user, product: $product)';

  @override
  bool operator ==(covariant Favorite other) {
    if (identical(this, other)) return true;
  
    return 
      other.user == user &&
      other.product == product;
  }

  @override
  int get hashCode => user.hashCode ^ product.hashCode;
}

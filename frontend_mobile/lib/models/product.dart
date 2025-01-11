import 'dart:convert';
import 'package:frontend_mobile/models/category.dart';
import 'package:frontend_mobile/models/user.dart';

class Product {
  int id;
  String name;
  String price;
  String description;
  String image;
  User publisher;
  Category category;
  Product({
    required this.id,
    required this.name,
    required this.price,
    required this.description,
    required this.image,
    required this.publisher,
    required this.category,
  });
  

  Product copyWith({
    int? id,
    String? name,
    String? price,
    String? description,
    String? image,
    User? publisher,
    Category? category,
  }) {
    return Product(
      id: id ?? this.id,
      name: name ?? this.name,
      price: price ?? this.price,
      description: description ?? this.description,
      image: image ?? this.image,
      publisher: publisher ?? this.publisher,
      category: category ?? this.category,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'name': name,
      'price': price,
      'description': description,
      'image': image,
      'publisher': publisher.toMap(),
      'category': category.toMap(),
    };
  }

  factory Product.fromMap(Map<String, dynamic> map) {
    return Product(
      id: map['id'] as int,
      name: map['name'] as String,
      price: map['price'] as String,
      description: map['description'] as String,
      image: map['image'] as String,
      publisher: User.fromMap(map['publisher'] as Map<String,dynamic>),
      category: Category.fromMap(map['category'] as Map<String,dynamic>),
    );
  }

  String toJson() => json.encode(toMap());

  factory Product.fromJson(String source) => Product.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() {
    return 'Product(id: $id, name: $name, price: $price, description: $description, image: $image, publisher: $publisher, category: $category)';
  }

  @override
  bool operator ==(covariant Product other) {
    if (identical(this, other)) return true;
  
    return 
      other.id == id &&
      other.name == name &&
      other.price == price &&
      other.description == description &&
      other.image == image &&
      other.publisher == publisher &&
      other.category == category;
  }

  @override
  int get hashCode {
    return id.hashCode ^
      name.hashCode ^
      price.hashCode ^
      description.hashCode ^
      image.hashCode ^
      publisher.hashCode ^
      category.hashCode;
  }
}


// Product({
//     required this.name,
//     required this.price,
//     required this.description,
//     });
//   factory Product.fromJson(dynamic json){
//     return Product(name: json["name"] as String,
//     price: json["price"] as double,
//     description: json["description"] as String,
//   );
//   }
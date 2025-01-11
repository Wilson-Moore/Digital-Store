import 'dart:convert';
import 'package:frontend_mobile/models/user.dart';

class Cart {
  int id;
  User owner;
  bool payed;
  Cart({
    required this.id,
    required this.owner,
    required this.payed,
  });

  Cart copyWith({
    int? id,
    User? owner,
    bool? payed,
  }) {
    return Cart(
      id: id ?? this.id,
      owner: owner ?? this.owner,
      payed: payed ?? this.payed,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'owner': owner.toMap(),
      'payed': payed,
    };
  }

  factory Cart.fromMap(Map<String, dynamic> map) {
    return Cart(
      id: map['id'] as int,
      owner: User.fromMap(map['owner'] as Map<String,dynamic>),
      payed: map['payed'] as bool,
    );
  }

  String toJson() => json.encode(toMap());

  factory Cart.fromJson(String source) => Cart.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() => 'Cart(id: $id, owner: $owner, payed: $payed)';

  @override
  bool operator ==(covariant Cart other) {
    if (identical(this, other)) return true;
  
    return 
      other.id == id &&
      other.owner == owner &&
      other.payed == payed;
  }

  @override
  int get hashCode => id.hashCode ^ owner.hashCode ^ payed.hashCode;
}

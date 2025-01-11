import 'dart:convert';
import 'package:frontend_mobile/models/country.dart';

class User {
  int id;
  String username;
  String password;
  String email;
  Country? country;
  bool ispublisher;
  User({
    required this.id,
    required this.username,
    required this.password,
    required this.email,
    required this.country,
    required this.ispublisher,
  });

  User copyWith({
    int? id,
    String? username,
    String? password,
    String? email,
    Country? country,
    bool? ispublisher,
  }) {
    return User(
      id: id ?? this.id,
      username: username ?? this.username,
      password: password ?? this.password,
      email: email ?? this.email,
      country: country ?? this.country,
      ispublisher: ispublisher ?? this.ispublisher,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'username': username,
      'password': password,
      'email': email,
      'country': country?.toMap(),
      'ispublisher': ispublisher,
    };
  }

  factory User.fromMap(Map<String, dynamic> map) {
    return User(
      id: map['id'] as int,
      username: map['username'] as String,
      password: map['password'] as String,
      email: map['email'] as String,
      country: map['country'] != null ? Country.fromMap(map['country'] as Map<String,dynamic>) : null,
      ispublisher: map['ispublisher'] as bool,
    );
  }

  String toJson() => json.encode(toMap());

  factory User.fromJson(String source) => User.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() {
    return 'User(id: $id, username: $username, password: $password, email: $email, country: $country, ispublisher: $ispublisher)';
  }

  @override
  bool operator ==(covariant User other) {
    if (identical(this, other)) return true;
  
    return 
      other.id == id &&
      other.username == username &&
      other.password == password &&
      other.email == email &&
      other.country == country &&
      other.ispublisher == ispublisher;
  }

  @override
  int get hashCode {
    return id.hashCode ^
      username.hashCode ^
      password.hashCode ^
      email.hashCode ^
      country.hashCode ^
      ispublisher.hashCode;
  }
}

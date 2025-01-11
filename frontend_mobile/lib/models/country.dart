import 'dart:convert';

class Country {
  String code;
  String name;
  Country({
    required this.code,
    required this.name,
  });

  Country copyWith({
    String? code,
    String? name,
  }) {
    return Country(
      code: code ?? this.code,
      name: name ?? this.name,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'code': code,
      'name': name,
    };
  }

  factory Country.fromMap(Map<String, dynamic> map) {
    return Country(
      code: map['code'] as String,
      name: map['name'] as String,
    );
  }

  String toJson() => json.encode(toMap());

  factory Country.fromJson(String source) => Country.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() => 'Country(code: $code, name: $name)';

  @override
  bool operator ==(covariant Country other) {
    if (identical(this, other)) return true;
  
    return 
      other.code == code &&
      other.name == name;
  }

  @override
  int get hashCode => code.hashCode ^ name.hashCode;
}

library globals;
import 'package:frontend_mobile/base_url.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';


class Backend {
  dynamic data;
  dynamic token;
  bool isactive=false;
  dynamic cart;

  Future<bool> login(String username,String password) async {
    final url=Uri.parse("$baseurl/api/token/");
    final headers={"Content-Type":"application/json"};
    final body=jsonEncode({"username":username,"password":password});
    final response=await http.post(url,headers: headers,body: body);
    if (response.statusCode==200) {
      data=jsonDecode(response.body);
      token=data["access"];
      backend.isactive=true;
      return true;
    } else {
      return false; 
    }
  }

  Future<bool> register(String username,String password,String email) async {
    final url=Uri.parse("$baseurl/store/auth/register/");
    final headers={"Content-Type":"application/json"};
    final body=jsonEncode({"username":username,"password":password,"email":email});
    final response=await http.post(url,headers: headers,body: body);
    if (response.statusCode==201) {
      return true;
    } else {
      return false; 
    }
  }
}

Backend backend=Backend();
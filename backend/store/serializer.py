from rest_framework import serializers
from . import models

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Country
        fields="__all__"

class UserSerializer(serializers.ModelSerializer):
    country=CountrySerializer()
    class Meta:
        model=models.User
        fields=["username","country"]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Category
        fields="__all__"

class ProductSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    publisher=UserSerializer()
    class Meta:
        model=models.Product
        fields=["name","price","description","category","publisher"]

class FavoriteSerializer(serializers.ModelSerializer):
    user=UserSerializer()
    product=ProductSerializer()
    class Meta:
        model=models.Favorite
        fields=["user","product"]

class ReportSerializer(serializers.ModelSerializer):
    user=UserSerializer()
    product=ProductSerializer()
    class Meta:
        model=models.Report
        fields=["user","product","reason"]

class CartSerializer(serializers.ModelSerializer):
    owner=UserSerializer()
    class Meta:
        model=models.Cart
        fields=["owner"]

class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CartItem
        fields=["cart","product"]
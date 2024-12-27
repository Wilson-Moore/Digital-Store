from rest_framework import serializers
from . import models

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Country
        fields="__all__"

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.User
        fields="__all__"

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Category
        fields="__all__"

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Product
        fields="__all__"

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Favorite
        fields="__all__"

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Report
        fields="__all__"

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Cart
        fields="__all__"

class Cart_ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Cart_Item
        fields="__all__"
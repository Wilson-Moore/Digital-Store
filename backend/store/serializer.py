from rest_framework import serializers
from . import models

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Country
        fields="__all__"

class UserSerializer(serializers.ModelSerializer):
    country=CountrySerializer(read_only=True)
    class Meta:
        model=models.User
        fields=["id","username","email","password","birth_year","ispublisher","country"]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Category
        fields="__all__"

class ProductSerializer(serializers.ModelSerializer):
    publisher=UserSerializer(read_only=True)
    category=CategorySerializer(read_only=True)
    class Meta:
        model=models.Product
        fields="__all__"

class getFavoriteSerializer(serializers.ModelSerializer):
    user=UserSerializer()
    product=ProductSerializer()
    class Meta:
        model=models.Favorite
        fields="__all__"

class postFavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Favorite
        fields="__all__"

class ReportSerializer(serializers.ModelSerializer):
    user=UserSerializer()
    product=ProductSerializer()
    class Meta:
        model=models.Report
        fields="__all__"

class getCartItemSerializer(serializers.ModelSerializer):
    product=ProductSerializer()
    class Meta:
        model=models.CartItem
        fields="__all__"

class postCartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CartItem
        fields="__all__"
        
class CartSerializer(serializers.ModelSerializer):
    items=getCartItemSerializer(many=True,read_only=True)
    total_price=serializers.SerializerMethodField()

    def get_total_price(self,obj):
        cartitems=obj.items.all()
        return sum(item.product_price for item in cartitems)

    owner=UserSerializer()
    class Meta:
        model=models.Cart
        fields="__all__"

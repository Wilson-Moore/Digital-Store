from rest_framework import serializers
from .models import Country,User

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model=Country
        fields="__all__"

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields="__all__"
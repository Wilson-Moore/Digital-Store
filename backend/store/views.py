from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from . import models
from .serializer import CountrySerializer,UserSerializer,ProductSerializer

@api_view(["GET"])
def get_countries(request):
    countries=models.Country.objects.all()
    serializer=CountrySerializer(countries,many=True)
    return Response(serializer.data)

@api_view(["GET"])
def get_users(request):
    users=models.User.objects.all()
    serializer=UserSerializer(users,many=True)
    return Response(serializer.data)

@api_view(["POST"])
def create_user(request):
    serializer=UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET","PUT","DELETE"])
def user_detail(request,pk):
    try:
        user=models.User.objects.get(pk=pk)
    except models.User.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    if request.method=="GET":
        serializer=UserSerializer(user)
        return Response(serializer.data)
    
    elif request.method=="PUT":
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method=="DELETE":
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(["GET"])
def get_products(request):
    prducts=models.Product.objects.all()
    serializer=ProductSerializer(prducts,many=True)
    return Response(serializer.data)

@api_view(["POST"])
def create_product(request):
    serializer=ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET","PUT","DELETE"])
def product_detail(request,pk):
    try:
        product=models.Product.objects.get(pk=pk)
    except models.Product.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    if request.method=="GET":
        serializer=ProductSerializer(product)
        return Response(serializer.data)
    
    elif request.method=="PUT":
        serializer=ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method=="DELETE":
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
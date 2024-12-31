from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from store.models import User
from rest_framework import status
from . import models
from .serializer import CountrySerializer,UserSerializer,ProductSerializer,FavoriteSerializer,ReportSerializer,CartSerializer,CartItemSerializer

@api_view(["POST"])
def login(request):
    username=request.data.get("username")
    password=request.data.get("password")
    if not username or not password:
        return Response({"error":"please provide both username and password"},status=status.HTTP_400_BAD_REQUEST)
    
    user=authenticate(username=username,password=password)
    if not user:
        return Response({"error":"invalid credentials"},status=status.HTTP_401_UNAUTHORIZED)
    
    token,created=Token.objects.get_or_create(user=user)
    return Response({"token":token.key})

@api_view(["POST"])
def logout(request):
    token_key=request.data.get("authorization")
    if token_key:
        token_key=token_key.split(" ")[1]
    try:
        token=Token.objects.get(key=token_key)
        token.delete()
        return Response({"message":"logged out"},status=status.HTTP_200_OK)
    except Token.DoesNotExist:
        return Response({"message":"No token or logged out already"},status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
def register(request):
    username=request.data.get("username")
    email=request.data.get("email")
    password=request.data.get("password")
    if not username or not password:
        return Response({"error":"please provide username, email and password"},status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({"error":"username already exists"},status=status.HTTP_400_BAD_REQUEST)
    
    if User.objects.filter(email=email).exists():
        return Response({"error":"email already exists"},status=status.HTTP_400_BAD_REQUEST)
    
    user=User.objects.create_user(username=username,email=email,password=password)
    return Response({"message":"successfully registerd"},status=status.HTTP_201_CREATED)

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
        serializer=UserSerializer(user,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method=="DELETE":
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(["GET"])
def get_products(request):
    products=models.Product.objects.all()
    serializer=ProductSerializer(products,many=True)
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
        serializer=ProductSerializer(product,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method=="DELETE":
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class getFavoriteAPI(APIView):
    def get(self,request):
        user=request.user
        if not user.is_authenticated:
            return Response({"error":"must be authenticated"},status=status.HTTP_401_UNAUTHORIZED)

        favorites=models.Favorite.objects.filter(user=2).select_related("product")
        serializer=FavoriteSerializer(favorites,many=True)
        return Response(serializer.data)

@api_view(["POST"])
def create_favorite(request):
    user=request.user
    if not user.is_authenticated:
        return Response({"error":"must be authenticated"},status=status.HTTP_401_UNAUTHORIZED)
    
    serializer=FavoriteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)

@api_view(["DELETE"])
def delete_favorite(request,pk):
    user=request.user
    if not user.is_authenticated:
        return Response({"error":"must be authenticated"},status=status.HTTP_401_UNAUTHORIZED)
    
    try:
        favorite=models.Favorite.objects.get(pk=pk)
    except models.Product.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    favorite.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

class getReportAPI(APIView):
    def get(self,request):
        user=request.user
        if not user.is_authenticated:
            return Response({"error":"must be authenticated"},status=status.HTTP_401_UNAUTHORIZED)

        reports=models.Report.objects.filter(pk=1)
        serializer=ReportSerializer(reports,many=True)
        return Response(serializer.data)
    
@api_view(["POST"])
def create_report(request):
    user=request.user
    if not user.is_authenticated:
        return Response({"error":"must be authenticated"},status=status.HTTP_401_UNAUTHORIZED)
    
    serializer=ReportSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)


class getCartAPI(APIView):
    def get(self,request):
        user=request.user
        if not user.is_authenticated:
            return Response({"error":"must be authenticated"},status=status.HTTP_401_UNAUTHORIZED)

        cart=models.Cart.objects.filter(owner=user)
        serializer=CartSerializer(cart,many=True)
        return Response(serializer.data)


class getCartItemAPI(APIView):
    def get(self,request):
        user=request.user
        if not user.is_authenticated:
            return Response({"error":"must be authenticated"},status=status.HTTP_401_UNAUTHORIZED)

        try:
            cart=models.Cart.objects.get(owner=user,payed=False)
        except models.Cart.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        cartitems=models.CartItem.objects.filter(cart=cart)
        serializer=CartItemSerializer(cartitems,many=True)
        return Response(serializer.data)

@api_view(["GET"])
def delete_cartitem(request,pk):
    user=request.user
    if not user.is_authenticated:
        return Response({"error":"must be authenticated"},status=status.HTTP_401_UNAUTHORIZED)
    
    try:
        cart=models.Cart.objects.get(owner=2,payed=False)
    except models.Product.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    try:
        product=models.Product.objects.get(pk=pk)
    except models.Product.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    try:
        cartitem=models.CartItem.objects.filter(cart=cart,product=product)
    except models.Product.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    

    cartitem.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
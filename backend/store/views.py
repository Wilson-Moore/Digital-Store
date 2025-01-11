from rest_framework.decorators import api_view
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from . import models
from . import serializers


class registerAPI(APIView):
    def post(self,request):
        username=request.data.get("username")
        email=request.data.get("email")
        password=request.data.get("password")
        if not username or not password:
            return Response({"error":"please provide username, email and password"},status=status.HTTP_400_BAD_REQUEST)

        if models.User.objects.filter(username=username).exists():
            return Response({"error":"username already exists"},status=status.HTTP_400_BAD_REQUEST)

        if models.User.objects.filter(email=email).exists():
            return Response({"error":"email already exists"},status=status.HTTP_400_BAD_REQUEST)

        user=models.User.objects.create_user(username=username,email=email,password=password)
        return Response({"message":"successfully registerd"},status=status.HTTP_201_CREATED)

class getCountriesAPI(APIView):
    def get(self,request):
        countries=models.Country.objects.all()
        serializer=serializers.CountrySerializer(countries,many=True)
        return Response(serializer.data)

@api_view(["GET","PUT","DELETE"])
def user_detail(request,pk):
    try:
        user=models.User.objects.get(pk=pk)
    except models.User.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    if request.method=="GET":
        serializer=serializers.UserSerializer(user)
        return Response(serializer.data)
    
    elif request.method=="PUT":
        serializer=serializers.UserSerializer(user,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method=="DELETE":
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class getCategoriesAPI(APIView):
    def get(self,request):
        categories=models.Category.objects.all()
        serializer=serializers.CategorySerializer(categories,many=True)
        return Response(serializer.data)

class getProductsAPI(APIView):
    def get(self,request):
        products=models.Product.objects.all()
        serializer=serializers.ProductSerializer(products,context={"request":request},many=True)
        return Response(serializer.data)

@api_view(["POST"])
def create_product(request):
    serializer=serializers.ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET","PUT","DELETE"])
def product_detail(request,pk):
    try:
        product=models.Product.objects.get(pk=pk)
    except models.Product.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    if request.method=="GET":
        serializer=serializers.ProductSerializer(product,context={"request":request})
        return Response(serializer.data)
    
    elif request.method=="PUT":
        serializer=serializers.ProductSerializer(product,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method=="DELETE":
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class getFavoriteAPI(APIView):
    authentication_classes=[JWTAuthentication]
    permission_classes=[IsAuthenticated]
    def get(self,request):
        user=request.user
        favorites=models.Favorite.objects.filter(user=user).select_related("product")
        serializer=serializers.FavoriteSerializer(favorites,many=True,context={"request":request})
        return Response(serializer.data)
    
class postFavoriteAPI(APIView):
    authentication_classes=[JWTAuthentication]
    permission_classes=[IsAuthenticated]
    def post(self,request):
        product_id=request.data.get("product")
        user=request.user
        try:
            product=models.Product.objects.get(id=product_id)
        except models.Product.DoesNotExist:
            return Response({"error":"product not found"},status=status.HTTP_404_NOT_FOUND)
        favorite,created=models.Favorite.objects.get_or_create(user=user,product=product)
        if not created:
            return Response({"error":"product is aleardy favored"},status=status.HTTP_200_OK)
        return Response({"message":"product add successfully"},status=status.HTTP_201_CREATED)
    
class deleteFavoriteAPI(APIView):
    authentication_classes=[JWTAuthentication]
    permission_classes=[IsAuthenticated]
    def delete(self,request):
        product_id=request.data.get("product")
        user=request.user
        try:
            product=models.Product.objects.get(id=product_id)
        except models.Product.DoesNotExist:
            return Response({"error":"product not found"},status=status.HTTP_404_NOT_FOUND)
        try:
            favorite=models.Favorite.objects.get(user=user,product=product)
        except models.Favorite.DoesNotExist:
            return Response({"error":"favorite not found"},status=status.HTTP_404_NOT_FOUND)
        favorite.delete()
        return Response({"message":"favorite remove successfully"},status=status.HTTP_200_OK)

class getCartAPI(APIView):
    authentication_classes=[JWTAuthentication]
    permission_classes=[IsAuthenticated]
    def get(self,request):
        user=request.user
        cart=models.Cart.objects.filter(owner=user)
        serializer=serializers.CartSerializer(cart,many=True,context={"request":request})
        return Response(serializer.data)
    
class postCartItemAPI(APIView):
    authentication_classes=[JWTAuthentication]
    permission_classes=[IsAuthenticated]
    def post(self,request):
        product_id=request.data.get("product")
        user=request.user
        try:
            product=models.Product.objects.get(id=product_id)
        except models.Product.DoesNotExist:
            return Response({"error":"product not found"},status=status.HTTP_404_NOT_FOUND)
        try:
            cart=models.Cart.objects.get(owner=user,payed=False)
        except models.Cart.DoesNotExist:
            return Response({"error":"cart not found"},status=status.HTTP_404_NOT_FOUND)
        cartitem,created=models.CartItem.objects.get_or_create(cart=cart,product=product)
        if not created:
            return Response({"error":"product is aleardy in cart"},status=status.HTTP_200_OK)
        return Response({"message":"product add successfully"},status=status.HTTP_201_CREATED)
    
class deleteCartItemAPI(APIView):
    authentication_classes=[JWTAuthentication]
    permission_classes=[IsAuthenticated]
    def delete(self,request):
        product_id=request.data.get("product")
        user=request.user
        try:
            product=models.Product.objects.get(id=product_id)
        except models.Product.DoesNotExist:
            return Response({"error":"product not found"},status=status.HTTP_404_NOT_FOUND)
        try:
            cart=models.Cart.objects.get(owner=user,payed=False)
        except models.Cart.DoesNotExist:
            return Response({"error":"cart not found"},status=status.HTTP_404_NOT_FOUND)
        try:
            item=models.CartItem.objects.get(cart=cart,product=product)
        except models.CartItem.DoesNotExist:
            return Response({"error":"item not found"},status=status.HTTP_404_NOT_FOUND)
        item.delete()
        return Response({"message":"item remove successfully"},status=status.HTTP_200_OK)

class postReportAPI(APIView):
    authentication_classes=[JWTAuthentication]
    permission_classes=[IsAuthenticated]
    def post(self,request):
        user=request.user
        product_id=request.data.get("product")
        reason=request.data.get("reason")
        try:
            product=models.Product.objects.get(id=product_id)
        except models.Product.DoesNotExist:
            return Response({"error":"product not found"},status=status.HTTP_404_NOT_FOUND)
        report=models.Report.objects.create(user=user,product=product,reason=reason)
        return Response({"message":"product successfully reported"},status=status.HTTP_201_CREATED)
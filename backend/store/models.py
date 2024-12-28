from django.db import models
from django.contrib.auth.models import AbstractBaseUser


# Create your models here.
class Country(models.Model):
    code=models.CharField(primary_key=True,max_length=2)
    name=models.CharField(max_length=50)

    class Meta:
        verbose_name_plural="Countries"

    def __str__(self):
        return self.name
    
class User(AbstractBaseUser):
    username=models.CharField(max_length=50)
    email=models.EmailField(max_length=255)
    birth_year=models.DateField(blank=True,null=True)
    country=models.ForeignKey(Country,on_delete=models.SET_NULL,blank=True,null=True)
    created_at=models.DateTimeField(auto_now_add=True)
    is_publisher=models.BooleanField(default=False)

    USERNAME_FIELD="username"
    EMAIL_FIELD="email"
    REQUIRED_FIELDS=["username"]

    def __str__(self):
        return self.username
    
class Category(models.Model):
    name=models.CharField(max_length=25)
    parent=models.ForeignKey('self',on_delete=models.CASCADE,blank=True,null=True)

    class Meta:
        verbose_name_plural="Catagories"

    def __str__(self):
        return self.name
    
class Product(models.Model):
    name=models.CharField(max_length=255)
    price=models.DecimalField(max_digits=5,decimal_places=2)
    on_sale=models.BooleanField(default=False)
    sale_price=models.DecimalField(default=0,max_digits=5,decimal_places=2)
    url=models.URLField(max_length=300,blank=True)
    publisher=models.ForeignKey(User,on_delete=models.CASCADE,blank=True,null=True)
    category=models.ForeignKey(Category,on_delete=models.SET_NULL,null=True)
    description=models.TextField(blank=True,null=True)
    image=models.ImageField(upload_to="uploads/product")
    created_at=models.DateTimeField(auto_now_add=True)
    modified_at=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
class Favorite(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    product=models.ForeignKey(Product,on_delete=models.CASCADE)
    created_at=models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural="Favorities"
        unique_together=("user","product")

class Report(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    product=models.ForeignKey(Product,on_delete=models.CASCADE)
    reason=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Report by {self.user.username} on {self.product.name}"
    
class Cart(models.Model):
    owner=models.ForeignKey(User,on_delete=models.CASCADE)
    payed=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)

class CartItem(models.Model):
    cart=models.ForeignKey(Cart,on_delete=models.CASCADE)
    product=models.ForeignKey(Product,on_delete=models.CASCADE)
    
    class Meta:
        unique_together=("cart","product")
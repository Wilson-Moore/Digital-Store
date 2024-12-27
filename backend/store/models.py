from django.db import models
from django.core.validators import MaxValueValidator,MinValueValidator


# Create your models here.
class Country(models.Model):
    code=models.CharField(primary_key=True,max_length=2)
    name=models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
class User(models.Model):
    name=models.CharField(max_length=50)
    email=models.EmailField(max_length=255)
    password=models.CharField(max_length=100)
    birth_year=models.DateField(blank=True,null=True)
    country=models.ForeignKey(Country,on_delete=models.SET_NULL,blank=True,null=True)
    created_at=models.DateTimeField(auto_now_add=True)
    is_publisher=models.BooleanField(default=False)

    def __str__(self):
        return self.name
    
class Category(models.Model):
    name=models.CharField(max_length=25)
    parent=models.ForeignKey('self',on_delete=models.CASCADE,blank=True,null=True)

    class Meta:
        verbose_name_plural="Catagories"

    def __str__(self):
        return self.name
    
    def is_top_level(self):
        return self.parent is None
    
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
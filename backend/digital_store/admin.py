from django.contrib import admin
from .models import Country,Category,User,Product,Order
# Register your models here.
admin.site.register(Country)
admin.site.register(User)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Order)

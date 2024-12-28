from django.contrib import admin
from .models import Country,Category,User,Product,Favorite,Report,Cart,CartItem
# Register your models here.
admin.site.register(Country)
admin.site.register(User)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Favorite)
admin.site.register(Report)
admin.site.register(Cart)
admin.site.register(CartItem)
from django.urls import path, include
from . import views

urlpatterns = [
    path('country/',views.get_countries,name="get_country"),
    path('country/create/',views.create_country,name="get_country"),
    path('users/',views.get_users,name="get_users"),
    path('users/create/',views.create_user,name="create_user"),
    path('users/<int:pk>',views.user_detail,name="user_detail"),
    path('products/',views.get_products,name="get_products"),
    path('products/create/',views.create_product,name="create_product"),
    path('products/<int:pk>',views.product_detail,name="product_detail"),
]
from django.urls import path, include
from . import views

urlpatterns = [
    path('auth/login/',views.login,name="login"),
    path('auth/logout/',views.logout,name="logout"),
    path('auth/register/',views.register,name="register"),
    path('country/',views.get_countries,name="get_country"),
    path('users/',views.get_users,name="get_users"),
    path('users/<int:pk>',views.user_detail,name="user_detail"),
    path('products/',views.get_products,name="get_products"),
    path('products/create/',views.create_product,name="create_product"),
    path('products/<int:pk>',views.product_detail,name="product_detail"),
    path('favorites/',views.get_favorites,name="get_favorites"),
    path('favorites/create/',views.create_favorite,name="create_favorite"),
    path('favorites/delete/<int:pk>',views.delete_favorite,name="delete_favorite"),
    path('reports/',views.get_reports,name="get_report"),
    path('cart/',views.get_cart,name="get_cart"),
    path('cart/items/',views.get_cartitems,name="get_cartitems"),
]
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
    path('favorites/',views.getFavoriteAPI.as_view(),name="get_favorites"),
    path('favorites/create/',views.create_favorite,name="create_favorite"),
    path('favorites/delete/<int:pk>',views.delete_favorite,name="delete_favorite"),
    path('reports/',views.getReportAPI.as_view(),name="get_reports"),
    path('reports/create/',views.create_report,name="create_report"),
    path('cart/',views.getCartAPI.as_view(),name="get_cart"),
    path('cart/items/',views.getCartItemAPI.as_view(),name="get_cartitems"),
    path('cart/items/<int:pk>',views.delete_cartitem,name="delete_cartitems")
]
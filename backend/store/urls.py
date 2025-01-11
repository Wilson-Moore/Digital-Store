from django.urls import path, include
from . import views

urlpatterns = [
    path('auth/login/',views.login_user,name="login"),
    path('auth/logout/',views.logout_user,name="logout"),
    path('auth/register/',views.register_user,name="register"),
    path('country/',views.get_countries,name="get_country"),
    path('users/',views.get_users,name="get_users"),
    path('users/<int:pk>',views.user_detail,name="user_detail"),
    path('categories/',views.get_categories,name="get_categories"),
    path('products/',views.get_products,name="get_products"),
    path('products/create/',views.create_product,name="create_product"),
    path('products/<int:pk>',views.product_detail,name="product_detail"),
    path('favorites/',views.getFavoriteAPI.as_view(),name="get_favorites"),
    path('favorites/add/',views.addFavorite.as_view(),name="create_favorite"),
    path('favorites/delete/',views.removeFavorite.as_view(),name="delete_favorite"),
    path('reports/',views.getReportAPI.as_view(),name="get_reports"),
    path('reports/create/',views.create_report,name="create_report"),
    path('cart/',views.getCartAPI.as_view(),name="get_cart"),
    path('cart/add/',views.addCartItem.as_view(),name="add_cartitems"),
    path('cart/delete/',views.removeCartItem.as_view(),name="delete_cartitems")
]
from django.urls import path, include
from . import views

urlpatterns = [
    path('register/',views.registerAPI.as_view(),name="register"),
    path('country/',views.getCategoriesAPI.as_view(),name="get_country"),
    path('user/',views.user_detail,name="user_detail"),
    path('categories/',views.getCategoriesAPI.as_view(),name="get_categories"),
    path('products/',views.getProductsAPI.as_view(),name="get_products"),
    path('products/create/',views.create_product,name="create_product"),
    path('products/<int:pk>',views.product_detail,name="product_detail"),
    path('favorites/',views.getFavoriteAPI.as_view(),name="get_favorites"),
    path('favorites/add/',views.postFavoriteAPI.as_view(),name="post_favorite"),
    path('favorites/delete/',views.deleteFavoriteAPI.as_view(),name="delete_favorite"),
    path('cart/',views.getCartAPI.as_view(),name="get_cart"),
    path('cart/add/',views.postCartItemAPI.as_view(),name="post_cartitems"),
    path('cart/delete/',views.deleteCartItemAPI.as_view(),name="delete_cartitems"),
    path('reports/create/',views.postReportAPI.as_view(),name="create_report"),
]
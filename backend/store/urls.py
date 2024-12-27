from django.urls import path, include
from . import views

urlpatterns = [
    path('country/',views.get_countries,name="get_country"),
    path('users/',views.get_users,name="get_users"),
    path('users/create/',views.create_user,name="create_user"),
    path('users/<int:pk>',views.user_detail,name="user_detail"),
]
from django.shortcuts import render,redirect
from .models import Product,Category
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from django import forms
from .forms import SignUpForm

# Create your views here.
def home(request):
    products=Product.objects.all()
    return render(request,"home.html",{"products":products})

def product(request,pk):
    product=Product.objects.get(id=pk)
    return render(request,"product.html",{"product":product})

def category(request,pk):
    category=Category.objects.get(id=pk)
    products=Product.objects.filter(category=category)
    return render(request,"category.html",{"category":category,"products":products})

def about(request):
    return render(request,"about.html",{})

def login_user(request):
    if request.method=="POST":
        username=request.POST["username"]
        password=request.POST["password"]
        user=authenticate(request,username=username,password=password)
        if user is not None:
            login(request,user)
            messages.success(request,("logged in succefully"))
            return redirect("home")
        else:
            messages.success(request,("something is wrong"))
            return redirect("login")
    else:
        return render(request,"login.html",{})

def logout_user(request):
    logout(request)
    messages.success(request,("logged out succefully"))
    return redirect("home")

def register_user(request):
    form=SignUpForm()
    if request.method=="POST":
        form=SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username=form.cleaned_data["username"]
            password=form.cleaned_data["password1"]
            user=authenticate(username=username,password=password)
            login(request,user)
            messages.success(request,("registered succefully"))
            return redirect("home")
        else:
            messages.success(request,("try again"))
            return redirect("register")
    else:
        return render(request,"register.html",{"form":form})
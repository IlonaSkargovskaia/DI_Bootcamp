from django.shortcuts import render 
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
from .forms import *
from django.contrib.auth.models import User


class RegisterView(CreateView):
    model = User
    form_class = RegisterForm
    template_name = 'register.html'
    #куда перейдем после регистрации - на форму введите новый свой login
    success_url = reverse_lazy('login') #name of path

class UserProfileView(CreateView):
    model = UserProfile
    form_class = ProfileForm
    template_name = 'profile.html'
    #после авторизации переходим на просмотр своих данных профиля
    success_url = reverse_lazy('profile') #name of path
from django.shortcuts import render 
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
from .forms import RegisterForm
from django.contrib.auth.models import User


class RegisterView(CreateView):
    model = User
    form_class = RegisterForm
    template_name = 'register.html'
    #куда перейдем после регистрации
    success_url = reverse_lazy('login') #name of path

    
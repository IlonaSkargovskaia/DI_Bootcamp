from django.shortcuts import render,redirect
from django.contrib import messages
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
from .forms import LoginForm, RegisterForm, ProfileForm
from .models import UserProfile
from django.contrib.auth import login, authenticate, logout

def log_in(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            return redirect('home')

        form = LoginForm()
        return render(request, 'users/login.html', {'form': form})
    
    elif request.method == 'POST':
        form = LoginForm(request.POST)
        
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request,username=username,password=password)
            if user:
                login(request, user)
                messages.success(request,f'Hi {username.title()}, welcome back!')
                return redirect('home')
        
        # form is not valid or user is not authenticated
        messages.error(request,f'Invalid username or password')
        return render(request,'users/login.html',{'form': form})
    

def log_out(request):
    logout(request)
    messages.success(request,f'You have been logged out.')
    return redirect('login')  


def sign_up(request):
    if request.method == 'GET':
        form = RegisterForm()
        return render(request, 'users/register.html', { 'form': form})  
    
    if request.method == 'POST':
        form = RegisterForm(request.POST) 
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            messages.success(request, 'You have singed up successfully.')
            login(request, user)
            return redirect('home')
        else:
            return render(request, 'users/register.html', {'form': form})
        

class UserProfileView(CreateView):
    model = UserProfile
    form_class = ProfileForm
    template_name = 'profile.html'
    #после авторизации переходим на просмотр своих данных профиля
    success_url = reverse_lazy('profile') 
        


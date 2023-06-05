from django.urls import path
from django.contrib.auth import views
from .views import *


urlpatterns = [
    #пишем темплейт в котором используется форма login
    path('login/', views.LoginView.as_view(template_name = 'login.html'), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('register/', RegisterView.as_view(), name='register'),
    
]
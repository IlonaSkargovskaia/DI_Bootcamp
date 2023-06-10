from django.urls import path
from . import views
from .views import *


urlpatterns = [
    path('login/', views.log_in, name='login'),
    path('logout/', views.log_out, name='logout'),
    path('register/', views.sign_up, name='register'),
    path('profile/', UserProfileView.as_view(), name='profile'),
]
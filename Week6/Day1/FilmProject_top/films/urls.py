from django.urls import path 
from . import views 


urlpatterns = [
    path('homepage/', views.HomePageView.as_view(), name='home'),
]
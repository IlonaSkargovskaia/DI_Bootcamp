from django.urls import path 
from . import views 

# one urlpattern per line
urlpatterns = [
    path('', views.people)
]
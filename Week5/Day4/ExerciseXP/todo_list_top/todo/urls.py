from django.urls import path 
from . import views 

# one urlpattern per line
urlpatterns = [
    path('add-task/', views.add_task, name='add_task'),
]
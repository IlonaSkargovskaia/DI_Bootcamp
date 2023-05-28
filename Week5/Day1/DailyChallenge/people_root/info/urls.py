from django.urls import path 
from . import views 

# one urlpattern per line
urlpatterns = [
    path('people', views.people),
    path('people/<int:id>', views.person)
]
from django.urls import path #path function
from . import views # . is shorthand for the current directory

# one urlpattern per line
urlpatterns = [
    path('', views.posts, name='index'),
    path('profile_user/', views.profile, name='profile')
]

# '' : empty string and /
# views.index : index function in views.py
# name='index' : name of the route
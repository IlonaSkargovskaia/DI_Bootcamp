from django.urls import path 
from . import views 

# one urlpattern per line
urlpatterns = [
    path('', views.homepage, name='home'),
    path('category/<int:cat_id>/', views.category, name='category'),
    path('gif_view/<int:gif_id>/', views.gif_view, name='gif_view'),
    path('categories/', views.categories, name='categories'),
    path('add-gifs/', views.add_gif, name='add_gif'),
]
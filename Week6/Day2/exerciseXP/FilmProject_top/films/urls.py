from django.urls import path 
from . import views 


urlpatterns = [
    path('', views.HomePageView.as_view(), name='home'),
    path('add-film/', views.AddFilm.as_view(), name='add_film'),
    path('add-director/', views.AddDirector.as_view(), name='add_director'),
    path('add-review/', views.ReviewCreateView.as_view(), name='add_review'),
    path('edit-film/<pk>', views.EditFilm.as_view(), name='edit_film'),
    path('edit-director/<pk>', views.EditDirector.as_view(), name='edit_director'),
]
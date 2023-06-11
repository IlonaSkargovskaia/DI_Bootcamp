from django.urls import path
from . import views


urlpatterns = [
    path('', views.homepage, name="home"),
    path('vacancies/', views.RoomsView.as_view(), name="vacancies"),
    path('add_review/', views.ReviewCreateView.as_view(), name="add_review"),
]
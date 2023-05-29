from django.urls import path
from . import views

# (вызываем созданную там функцию)
urlpatterns = [
    path('animal/<int:animal_id>/', views.animal, name="animal"),
    path('family/<int:family_id>/', views.family, name="family"),
    path('animals/', views.animals, name="animals")
]
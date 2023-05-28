from django.urls import path
from . import views

# (вызываем созданную там функцию)
urlpatterns = [
    path('animal/<int:id>/', views.animal),
    path('family/<int:id>/', views.family)
]
from django.urls import path
from . import views

# (вызываем созданную там функцию)
urlpatterns = [
    path('persons/phonenumber/<str:number>/', views.phonenumber, name="phone"),
    path('persons/name/<str:input_name>/', views.name, name='name'),
]
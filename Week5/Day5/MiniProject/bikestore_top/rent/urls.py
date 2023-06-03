from django.urls import path
from . import views

# (вызываем созданную там функцию)
urlpatterns = [
    path('', views.home, name="home"),
    path('customers/', views.all_customers, name="all_customers"),
    path('customer/<int:pk>', views.customer, name="customer"),
    path('customer/add', views.add_customer, name="add_customer"),
    path('vehicles/', views.all_vehicles, name="all_vehicles"),
    path('vehicle/<int:pk>', views.vehicle, name="vehicle"),
    path('vehicles/add', views.add_vehicle, name="add_vehicle"),
    path('rentals/', views.all_rentals, name="all_rentals"),
    path('rentals/<int:pk>', views.rental, name="rental"),
    path('rentals/add', views.add_rental, name="add_rental"),
]
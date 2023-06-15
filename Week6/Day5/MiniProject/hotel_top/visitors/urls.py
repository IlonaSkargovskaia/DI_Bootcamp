from django.urls import path
from . import views
from .views import *


urlpatterns = [
    path('', views.Home.as_view(), name="home"),
    # path('vacancies/', views.RoomsView.as_view(), name="vacancies"),
    # path('add_review/', views.ReviewCreateView.as_view(), name="add_review"),
    #path('hotels/', HotelListView.as_view(), name='hotel_list'),
    path('hotels/<int:hotel_id>/', HotelDetailView.as_view(), name='hotel_detail'),
    path('rooms/', RoomListView.as_view(), name='room_list'),
    path('rooms/<int:room_id>/', RoomDetailView.as_view(), name='room_detail'),
    path('rooms/<int:room_id>/reservation/', ReservationCreateView.as_view(), name='reservation_create'),
]
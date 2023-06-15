from django.shortcuts import render, redirect
from .models import *
from .forms import *
from django.views.generic import View, CreateView, ListView
from django.urls import reverse_lazy



class Home(ListView):
    model = Hotel
    template_name = 'home.html'
    success_url = reverse_lazy('home')

    def get(self, request):
        hotels = Hotel.objects.all()
        return render(request, 'home.html', {'hotels': hotels})


# class HotelListView(View):
#     def get(self, request):
#         hotels = Hotel.objects.all()
#         return render(request, 'hotel_list.html', {'hotels': hotels})
    
class HotelDetailView(View):
    def get(self, request, hotel_id):
        hotel = Hotel.objects.get(id=hotel_id)
        rooms = Room.objects.filter(hotel=hotel)
        return render(request, 'hotel_detail.html', {'hotel': hotel, 'rooms': rooms})
    
class RoomListView(View):
    def get(self, request):
        rooms = Room.objects.filter(availability=True)
        return render(request, 'room_list.html', {'rooms': rooms})

class RoomDetailView(View):
    def get(self, request, room_id):
        room = Room.objects.get(id=room_id)
        return render(request, 'room_detail.html', {'room': room})



class ReservationCreateView(View):
    def get(self, request, room_id):
        room = Room.objects.get(id=room_id)
        form = ReservationForm()
        return render(request, 'reservation_create.html', {'room': room, 'form': form})

    def post(self, request, room_id):
        room = Room.objects.get(id=room_id)
        form = ReservationForm(request.POST)
        
        if form.is_valid():
            guest_name = form.cleaned_data['guest_name']
            guest_email = form.cleaned_data['guest_email']
            check_in_date = form.cleaned_data['check_in_date']
            check_out_date = form.cleaned_data['check_out_date']
            
            # Perform validation and create the reservation
            reservation = Reservation.objects.create(
                room=room,
                guest_name=guest_name,
                guest_email=guest_email,
                check_in_date=check_in_date,
                check_out_date=check_out_date
            )
            
            return render(request, 'reservation_confirmation.html', {'reservation': reservation})

        return render(request, 'reservation_create.html', {'room': room, 'form': form})




# class RoomsView(ListView):
#     model = Room
#     template_name = 'vacancies.html'
#     #говорим что хотим чтобы ключ в context был 'films' и его потом for-loop в template home
#     context_object_name = 'rooms'

# class ReviewCreateView(CreateView):
#     model = Review
#     form_class = ReviewForm
#     template_name = 'add_review.html'
#     #редирект на add_category (имя из urls)
#     success_url = reverse_lazy('add_review')

#     def form_valid(self, form):
#         return super().form_valid(form) 




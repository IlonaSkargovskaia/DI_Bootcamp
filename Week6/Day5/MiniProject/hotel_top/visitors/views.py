from django.shortcuts import render, redirect
from .models import *
from .forms import *
from django.views.generic import View, CreateView, ListView, FormView, TemplateView
from django.urls import reverse_lazy



class Home(ListView):
    model = Hotel
    # form_class = ReservationForm
    template_name = 'home.html'
    success_url = reverse_lazy('home')

    def get(self, request):
        hotels = Hotel.objects.all()
        form = SearchForm()
        return render(request, 'home.html', {'hotels': hotels, 'form': form})
    
    
    
    def post(self, request):
        if self.request.method == 'POST':
            form = SearchForm(self.request.POST)
            if form.is_valid():
                check_in_date = form.cleaned_data['check_in_date']
                check_out_date = form.cleaned_data['check_out_date']
                
                # Query available rooms based on check-in and check-out dates
                available_rooms = Room.objects.filter(reservation__check_in_date__gte=check_in_date, reservation__check_out_date__lte=check_out_date)
                
                context = {
                    'form': form,
                    'available_rooms': available_rooms,
                }
                
                return render(self.request, 'search_results.html', context)
            else:
                form = SearchForm()
            
        return render(self.request, 'search_results.html', {'form': form})


    
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


class ReviewCreateView(CreateView):
    model = Review
    form_class = ReviewForm
    template_name = 'add_review.html'
    success_url = reverse_lazy('add_review')

    def form_valid(self, form):
        return super().form_valid(form) 


class ContactView(FormView):
    template_name = 'contact.html'
    form_class = ContactForm
    success_url = reverse_lazy('contact_success')

    def form_valid(self, form):
        # Process the form data
        name = form.cleaned_data['name']
        email = form.cleaned_data['email']
        message = form.cleaned_data['message']
        # Perform further actions (e.g., sending an email, saving to database)
        
        # Render a success message or redirect to the success URL
        return super().form_valid(form)

class ContactSuccessView(TemplateView):
    template_name = 'contact_success.html'




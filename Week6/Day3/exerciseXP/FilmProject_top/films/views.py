from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import *
from .forms import *
from django.contrib.messages.views import SuccessMessageMixin
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import UserPassesTestMixin
from django.views.generic import ListView, View
from django.urls import reverse_lazy 
from accounts.models import UserProfile
from django.contrib import messages
from django.shortcuts import get_object_or_404

#альтернатива для posts view
class HomePageView(ListView):
    model = Film
    template_name = 'homepage.html'
    #говорим что хотим чтобы ключ в context был 'post_list'
    context_object_name = 'films'


#alternative generic view
class AddFilm(CreateView):
    model = Film
    form_class = FilmForm
    template_name = 'add_film.html'
    #редирект на add_category (имя из urls)
    success_url = reverse_lazy('home')

    #контроль как форма будет submitted
    def form_valid(self, form):
        return super().form_valid(form) 



#alternative generic view
class AddDirector(CreateView):
    model = Director
    form_class = DirectorForm
    template_name = 'add_director.html'
    #редирект на add_category (имя из urls)
    success_url = reverse_lazy('home')

    def form_valid(self, form):
        return super().form_valid(form) 


#alternative generic view
class ReviewCreateView(CreateView):
    model = Review
    form_class = ReviewForm
    template_name = 'add_review.html'
    #редирект на add_category (имя из urls)
    success_url = reverse_lazy('add_review')

    def form_valid(self, form):
        return super().form_valid(form) 
    

#alternative generic view
# class FavouriteFilmView(View):
#     def post(self,request, film_id): 
        
#         film = get_object_or_404(Film, id=film_id)
#         user = self.request.user
#         user_profile = user.user_profile

#         if film in user_profile.favorite_film.all():
#             user_profile.favorite_film.remove(film)
#             messages.success(request, "Film removed from favorites.")
#         else:
#             user_profile.favorite_film.add(film)
#             messages.success(request, "Film added to favorites.")
            
#         return redirect('home')
    

#alternative generic view
class EditFilmView(UserPassesTestMixin, UpdateView):
    model = Film
    template_name = 'edit_film.html'
    fields = [
        "title",
        "release_date",
        "created_in_country",
        "available_in_countries",
        "category",
        "director",
        "poster"
    ]

    success_url = reverse_lazy('home')

    
    def test_func(self):
        if self.request.user.is_superuser:
            return True 
        else:
            return False #403 Forbidden

    #контроль как форма будет submitted
    def form_valid(self, form):
        return super().form_valid(form) 



#alternative generic view
class EditDirectorView(UserPassesTestMixin, UpdateView):
    model = Director
    template_name = 'edit_director.html'
    fields = [
        "first_name",
        "last_name"
    ]
    
    success_url = reverse_lazy('home')

    def test_func(self):
        if self.request.user.is_superuser:
            return True 
        else:
            return False #403 Forbidden

    
    def form_valid(self, form):
        return super().form_valid(form) 
    

class FilmDeleteView(SuccessMessageMixin, UserPassesTestMixin, DeleteView):
    
    model = Film
    success_url =reverse_lazy("home")
    template_name = "film_confirm_deleted.html"
    success_message = "film was deleted successfully"
    
    def form_valid(self, form):
        
        return super().form_valid(form) 
    
    def test_func(self):
        if self.request.user.is_superuser:
            return True 
        else:
            return False #403 Forbidden
        


class AddPosterView(CreateView):
    model= Poster
    form_class = AddPosterForm
    template_name= 'image_form.html'
    success_url= reverse_lazy('home')        
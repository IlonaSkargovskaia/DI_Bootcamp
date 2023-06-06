from django.shortcuts import render
from .models import *
from .forms import *
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import UserPassesTestMixin
from django.views.generic import ListView 
from django.urls import reverse_lazy 


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
class EditFilm(UpdateView):
    model = Film
    template_name = 'add_film.html'
    fields = [
        "title",
        "release_date",
        "created_in_country",
        "available_in_countries",
        "category",
        "director"
    ]

    success_url = reverse_lazy('home')

     #функция будет проверять юзер is_authenticated или нет
    def test_func(self):
        if self.request.user.is_superuser:
            return True 
        else:
            return False #403 Forbidden

    #контроль как форма будет submitted
    def form_valid(self, form):
        return super().form_valid(form) 



#alternative generic view
class EditDirector(UpdateView):
    model = Director
    template_name = 'add_director.html'
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

    #контроль как форма будет submitted
    def form_valid(self, form):
        return super().form_valid(form) 
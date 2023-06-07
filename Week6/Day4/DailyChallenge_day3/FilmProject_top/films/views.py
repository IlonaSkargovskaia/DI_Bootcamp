from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import *
from .forms import *
from django.contrib.messages.views import SuccessMessageMixin
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import UserPassesTestMixin
from django.views.generic import ListView, DetailView, View
from django.urls import reverse_lazy 
from accounts.models import UserProfile
from django.contrib import messages
from django.shortcuts import get_object_or_404

#альтернатива для posts view
class HomePageView(ListView):
    model = Film
    template_name = 'homepage.html'
    #говорим что хотим чтобы ключ в context был 'films' и его потом for-loop в template home
    context_object_name = 'films'


def films_cat(request):
    # cat = Category.objects.filter(id = cat_id)
    # films_cat = cat.films.all()
    # print(films_cat)

    context = {
        'films_cat' : Film.objects.filter(category__name='Mystery')
    }

    return render(request, 'all_categories.html', context)


        



class AddFilm(CreateView):
    model = Film
    form_class = FilmForm
    template_name = 'add_film.html'
    #редирект на add_category (имя из urls)
    success_url = reverse_lazy('home')

    
    def get_context_data(self, **kwargs):
        context = super(AddFilm, self).get_context_data(**kwargs)
        context['title'] = "Add Film"
        context['formset'] = ProducerFormSet
        return context
    
    def post(self, request):
        formset = ProducerFormSet(request.POST, queryset=Producer.objects.all())
        film_form = FilmForm(data=request.POST)
        if formset.is_valid() and film_form.is_valid():
            formset.save()

        return self.form_valid(formset, film_form)



class AddDirector(CreateView):
    model = Director
    form_class = DirectorForm
    template_name = 'add_director.html'
    #редирект на home (имя из urls)
    success_url = reverse_lazy('home')

    def form_valid(self, form):
        return super().form_valid(form) 



class ReviewCreateView(CreateView):
    model = Review
    form_class = ReviewForm
    template_name = 'add_review.html'
    #редирект на add_category (имя из urls)
    success_url = reverse_lazy('add_review')

    def form_valid(self, form):
        return super().form_valid(form) 
    


class FavouriteFilmView(View):
    def post(self,request, film_id): 
        
        film = get_object_or_404(Film, id=film_id)
        user = self.request.user
        print(user)
        userprofile = user.user_profile

#если фильм уже есть в профиле пользователя - удалить
        if film in userprofile.favorite_films.all():
            userprofile.favorite_films.remove(film)
            messages.success(request, "Film REMOVED from Favorites.")
        else:
            userprofile.favorite_films.add(film)
            messages.success(request, "Film ADDED to Favorites.")
            
        return redirect('home')
    


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
        


class AddPosterView(UserPassesTestMixin, CreateView):
    model= Poster
    form_class = AddPosterForm
    template_name= 'image_form.html'
    success_url= reverse_lazy('home') 

    def form_valid(self, form):
        
        return super().form_valid(form) 
    
    def test_func(self):
        if self.request.user.is_superuser:
            return True 
        else:
            return False #403 Forbidden



class FilmDetailView(DetailView):
    model = Film
    template_name = 'film_detail.html'    

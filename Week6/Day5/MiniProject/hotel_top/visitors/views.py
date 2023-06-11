from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import *
from .forms import *
from django.contrib.messages.views import SuccessMessageMixin
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import UserPassesTestMixin
from django.views.generic import ListView, DetailView, View
from django.urls import reverse_lazy 
from django.contrib import messages
from django.shortcuts import get_object_or_404


def homepage(request):
    context = {
        'title' : 'HOME | TORQUAY'
    }

    return render(request, 'home.html', context)

class RoomsView(ListView):
    model = Room
    template_name = 'vacancies.html'
    #говорим что хотим чтобы ключ в context был 'films' и его потом for-loop в template home
    context_object_name = 'rooms'

class ReviewCreateView(CreateView):
    model = Review
    form_class = ReviewForm
    template_name = 'add_review.html'
    #редирект на add_category (имя из urls)
    success_url = reverse_lazy('add_review')

    def form_valid(self, form):
        return super().form_valid(form) 

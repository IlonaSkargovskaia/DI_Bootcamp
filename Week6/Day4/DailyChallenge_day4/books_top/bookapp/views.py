from django.contrib.auth import logout, authenticate, login
from django.contrib.auth.mixins import UserPassesTestMixin
from django.db.models.query import QuerySet
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, FormMixin
from django.db.models import Q
from django.db.models import Avg
from django.urls import reverse_lazy 
from .models import *
from .forms import *




class HomePageView(ListView):
    model = Book
    template_name = 'home.html'
    context_object_name = 'books'

    ordering = ['-published_date']
    


class SearchResultsView(ListView):
    model = Book
    template_name = 'search_results.html'

    #query - запрос пользователя в поисковой строке
    # в filter указываем где будем искать
    def get_queryset(self):
        query = self.request.GET.get("q")
        object_list = Book.objects.filter(
            Q(title__icontains=query) | Q(description__icontains=query)
        )
        return object_list
    


class ReviewCreateView(CreateView):
    model = BookReview
    form_class = ReviewForm
    template_name = 'add_review.html'
    #редирект на add_category (имя из urls)
    success_url = reverse_lazy('home')


    def form_valid(self, form):
        return super(ReviewForm).form_valid(form) 
    


class BookDetailView(FormMixin, DetailView):
    model = Book
    template_name = 'book_detail.html' 
    form_class = ReviewForm

    

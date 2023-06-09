
from django.contrib.auth import logout, authenticate, login
from django.contrib.auth.mixins import UserPassesTestMixin
from django.db.models.query import QuerySet
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse, reverse_lazy 
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, FormMixin
from django.contrib.auth.models import User
from django.db.models import Q
from django.db.models import Avg
from .models import *
from .forms import *




class HomePageView(ListView):
    model = Book
    template_name = 'home.html'
    context_object_name = 'books' 
    ordering = ['-published_date']

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'HOME | BOOKS' #заменяю title
        return context
    
    
    


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
        return super().form_valid(form) 
    


class BookDetailView(FormMixin, DetailView):
    model = Book
    template_name = 'book_detail.html' 
    form_class = ReviewForm
    context_object_name = 'book' 

    def get_context_data(self, **kwargs):
        book = Book.objects.get(id = self.kwargs['pk'])
        reviews = book.reviews.all()

        context = super().get_context_data(**kwargs)
        context['reviews'] = reviews
        context['avg_rating'] = reviews.aggregate(Avg('rating'))['rating__avg']
        return context


    def post(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return redirect('home')

        self.object = self.get_object()
        form = self.get_form()

        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)
from typing import Any
from django.db.models.query import QuerySet
from django.shortcuts import render
from django.views.generic import TemplateView, ListView
from django.db.models import Q
from .models import *

class HomePageView(TemplateView):
    template_name = 'home.html'


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
